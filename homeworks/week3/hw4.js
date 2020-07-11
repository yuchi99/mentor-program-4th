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
  const arr = lines[0].split('');
  let newStr = '';
  for (let i = arr.length - 1; i >= 0; i--) {
    newStr += arr[i];
  }
  if (lines[0] === newStr) {
    console.log('True');
  } else {
    console.log('False');
  }
}
