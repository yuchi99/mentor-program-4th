/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
import { createInterface } from 'readline';

const lines = [];
const rl = createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});

function solve(lines) {
  const n = lines[0];
  let print = '';
  for (let i = 1; i <= n; i++) {
    print += '*';
    console.log(print);
  }
}
