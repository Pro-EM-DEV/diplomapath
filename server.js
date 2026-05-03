const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Read the OPENAI_API_KEY directly from the .env file if it exists, or from Render environment variables
let apiKey = process.env.OPENAI_API_KEY || '';
try {
  const envFile = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
  const match = envFile.match(/OPENAI_API_KEY=(.+)/);
  if (match) apiKey = match[1].trim() || apiKey;
} catch (e) {
  console.log("Running without local .env file (using environment variables)");
}

const SYSTEM_PROMPT = `
You are "Guide", a friendly and helpful career counselor bot for DiplomaPath India.
Your job is to answer visitor questions regarding diploma colleges, courses, admission processes, and career paths in India after 10th and 12th grade.
Be concise, welcoming, and encouraging.
`;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer(async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === 'POST' && req.url === '/api/chat') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', async () => {
      try {
        const { messages } = JSON.parse(body);
        if (!messages) {
          res.writeHead(400);
          return res.end(JSON.stringify({ error: 'Messages required' }));
        }

        const apiMessages = [{ role: 'system', content: SYSTEM_PROMPT }, ...messages];
        
        const payload = JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: apiMessages,
          max_tokens: 250,
          temperature: 0.7
        });

        const options = {
          hostname: 'api.openai.com',
          path: '/v1/chat/completions',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'Content-Length': Buffer.byteLength(payload)
          }
        };

        const openaiReq = https.request(options, (openaiRes) => {
          let responseData = '';
          openaiRes.on('data', d => responseData += d);
          openaiRes.on('end', () => {
            try {
              const result = JSON.parse(responseData);
              const reply = result.choices[0].message.content;
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ reply }));
            } catch(e) {
              res.writeHead(500);
              res.end(JSON.stringify({ error: 'Failed to parse OpenAI response' }));
            }
          });
        });

        openaiReq.on('error', (e) => {
          res.writeHead(500);
          res.end(JSON.stringify({ error: e.message }));
        });

        openaiReq.write(payload);
        openaiReq.end();

      } catch (err) {
        res.writeHead(500);
        res.end(JSON.stringify({ error: 'Server error' }));
      }
    });
    return;
  }

  // Serve Static Files
  if (req.method === 'GET') {
    let parsedUrl = req.url.split('?')[0];
    if (parsedUrl === '/') parsedUrl = '/index.html';
    
    // Remove leading slash so path.join resolves correctly inside __dirname on Linux
    let filePath = path.join(__dirname, parsedUrl.replace(/^\//, ''));
    
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if(err.code == 'ENOENT') {
          res.writeHead(404);
          res.end('File not found');
        } else {
          res.writeHead(500);
          res.end('Server error: ' + err.code);
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
