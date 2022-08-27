const fs = require('fs');
let input = fs.readFileSync('./baekjoon/input.txt').toString().split('\n'); // boj : /dev/stdin

const inputTestCase = [];

for (const item of input) {
  inputTestCase.push(item.split(' ').map(Number));
}

function solution(testCase) {
  let result = 0;
  let tmp = 0;
  for (const item of testCase) {
    tmp = tmp + item[1] - item[0];
    if(tmp > result) result = tmp;
  }
  console.log(result);
}

solution(inputTestCase);