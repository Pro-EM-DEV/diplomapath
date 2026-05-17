const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'node_modules', 'd3-shape', 'src', 'curve', 'natural.js');

const safeCode = `
export function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line ? this._line += 1 : this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x, y = this._y, n = x.length;
    if (n) {
      this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else if (n > 2) {
        var px = controlPoints(x), py = controlPoints(y);
        for (var i = 0, n0 = n - 1; i < n0; ++i) {
          this._context.bezierCurveTo(px[0][i], py[0][i], px[1][i], py[1][i], x[i + 1], y[i + 1]);
        }
      }
    }
    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    this._x.push(x);
    this._y.push(y);
  }
};

function controlPoints(x) {
  var i, n = x.length - 1, m, a = new Array(n), b = new Array(n), r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

export default function(context) {
  return new Natural(context);
}
`;

if (fs.existsSync(targetPath)) {
  fs.writeFileSync(targetPath, safeCode, 'utf8');
  console.log("Successfully replaced natural.js with valid ascii content.");
} else {
  console.log("natural.js not found at " + targetPath);
}
