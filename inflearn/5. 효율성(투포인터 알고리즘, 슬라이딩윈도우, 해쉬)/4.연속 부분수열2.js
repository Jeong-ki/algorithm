// 2중 포문
// function solution(m, arr){
//   let count = 0;
//   for(let i=0; i<arr.length; i++) {
//     let sum = 0;
//     for(let j=i; j<arr.length; j++) {
//       sum += arr[j];
//       if(sum <= m) count += 1;
//       else break;
//       console.log(sum);
//     }
//   }
//   return count;
// }

// 투 포인터 알고리즘
function solution(m, arr) {
  let answer = lt = sum = 0;
  for(let rt=0; rt < arr.length; rt++) {
    sum += arr[rt];
    while(sum > m) {
      sum -= arr[lt++];
    }
    answer += (rt-lt+1);
  }
  return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));