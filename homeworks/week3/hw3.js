/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});

function solve(lines) {
  const temp = Number(lines[0]);
  for (let n = 1; n <= temp; n++) {
    const num = Number(lines[n]);
    console.log(isPrime(num));
  }
}
function isPrime(num) {
  if (num === 1) {
    return ('Composite');
  } if (num === 2) {
    return ('Prime');
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return ('Composite');
    }
  }
  return ('Prime');
}
