// you can import module with constructor or not
// const fs = require('fs');
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

writeFileSync('./content/third.txt', `result : ${first}, ${second}`, { flag: 'a' });