/* eslint-disable no-undef */
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
  const gameNum = Number(lines[0]);
  for (let i = 1; i <= gameNum; i++) {
    const G = lines[i].split(' ');
    const A = (BigInt(G[0]));
    const B = (BigInt(G[1]));
    const K = Number(G[2]);
    if (K === 1) {
      console.log(bigWin(A, B));
    } else if (K === -1) {
      console.log(smallWin(A, B));
    }
  }
}
function smallWin(x, y) {
  if (x > y) {
    return 'B';
  } if (x < y) {
    return 'A';
  }
  return 'DRAW';
}
function bigWin(x, y) {
  if (x > y) {
    return 'A';
  } if (x < y) {
    return 'B';
  }
  return 'DRAW';
}
