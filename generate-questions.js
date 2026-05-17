const fs = require('fs');

const technicalTopics = ["Mechanical", "Software", "Electrical", "Civil", "Automation"];
const hrTopics = ["Behavioral", "Motivation", "Leadership", "Conflict", "Career Goals"];

const questions = {
  technical: [],
  hr: []
};

// Generate 60 Technical Questions
for (let i = 1; i <= 60; i++) {
  const topic = technicalTopics[i % technicalTopics.length];
  questions.technical.push({
    id: `tech-${i}`,
    question: `[${topic}] Question ${i}: Explain a core concept related to your engineering domain.`,
    answer: `In ${topic} engineering, this concept is fundamental. It involves understanding the physical or logical principles that govern the system's behavior. Always structure your answer by defining the concept, explaining its application, and providing a real-world example from your diploma projects.`
  });
}

// Generate 40 HR Questions
for (let i = 1; i <= 40; i++) {
  const topic = hrTopics[i % hrTopics.length];
  questions.hr.push({
    id: `hr-${i}`,
    question: `[${topic}] Question ${i}: Can you describe a situation where you demonstrated this skill?`,
    answer: `Use the STAR method (Situation, Task, Action, Result). Briefly describe the context, what your specific responsibility was, the exact steps you took to resolve the issue, and the positive outcome that resulted.`
  });
}

// Ensure the directory exists
const dir = './src/data';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync('./src/data/interviewQuestions.json', JSON.stringify(questions, null, 2));
console.log("Successfully generated 100 questions!");
