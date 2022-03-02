// let 탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
// let 규칙 = "ABD";
// let result = [];
// let temp = -1;

// for (const x of 탑) {
//   for (let i = 0; i < 규칙.length; i++) {
//     if(x.indexOf(규칙[i]) === -1) {
//       continue;
//     }
//     if(temp < x.indexOf(규칙[i])) {
//       temp = x.indexOf(규칙[i]);
//     } else {
//       temp = -2;
//       break;
//     }
//   }
//   if(temp === -2) {
//     result.push("불가능");
//   } else {
//     result.push("가능");
//   }
//   temp = -1;
// }

// console.log(result);


const 전체블록 = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'AEBFDGCH'];
const 규칙 = 'ABCD';

function solution(전체블록, 규칙) {
  let answer = [];
  for (const 부분블록 of 전체블록) {
    answer.push(블록순서체크(부분블록, 규칙));
  }
  return answer;
}

function 블록순서체크(부분블록, 규칙) {
  let 임시변수 = 규칙.indexOf(규칙[0]);
  for (const 문자 of 부분블록) {
    if(규칙.includes(문자)) {
      if(임시변수 > 규칙.indexOf(문자)) {
        return '불가능';
      }
      임시변수 = 규칙.indexOf(문자);
    }
  }
  return '가능';
}

console.log(solution(전체블록, 규칙));