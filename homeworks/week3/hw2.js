/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  // eslint-disable-next-line no-use-before-define
  solve(lines);
});

// eslint-disable-next-line no-shadow
function solve(lines) {
  const f = lines[0].split(' ');
  const x = Number(f[0]);
  const y = Number(f[1]);
  // eslint-disable-next-line no-plusplus
  for (let i = x; i <= y; i++) {
    if (isFlower(i)) {
      console.log(i);
    }
  }
}

function digits(n) {
  let result = 0;
  while (n != 0) {
    n = Math.floor(n / 10);
    result++;
  }
  return result;
}

function isFlower(n) {
  let f = n;
  const digitsNum = digits(n);
  let sum = 0;
  while (f != 0) {
    const num = f % 10;
    sum += num ** digitsNum;
    f = Math.floor(f / 10);
  }
  if (sum === n) {
    return true;
  }
  return false;
}
