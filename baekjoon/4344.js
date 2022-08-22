// boj.kr/4344
const fs = require('fs');
let input = fs.readFileSync('./baekjoon/input.txt').toString().split('\n'); // boj : /dev/stdin

const inputC = Number(input[0]);
const inputTestCase = [];

for (let i = 1; i <= inputC; i++) {
  const arr = input[i].split(' ').map(item => Number(item));
  const newArr = [];

  for (let i = 1; i <= arr[0]; i++) {
    newArr.push(arr[i]);
  }

  const testCase = {
    N: arr[0],
    arr: newArr,
  }

  inputTestCase.push(testCase);
}

/*
solution 생성 -> 어떻게 값이 들어오면 좋을지 고려 후 데이터를 정제(가공)해서 넘겨줌.
C = 5
testCase = [
  {
    N: 5,
    arr: [50, 50, 70, 80],
  },
  ...
]
*/

// Solution 함수를 먼저 생성
function solution(C, testCase) {
  for (let i = 0; i < C; i++) {
    let count = 0;
    let average = 0;
    testCase[i].arr.forEach(element => {
      average += element;
    });
    average /= testCase[i].N; // 평균
    testCase[i].arr.forEach(element => {
      if (element > average) count++;
    });
    let result = (Math.round((count / testCase[i].N)*100000) / 1000).toFixed(3);
    console.log(result + '%');
  }
}

solution(inputC, inputTestCase);