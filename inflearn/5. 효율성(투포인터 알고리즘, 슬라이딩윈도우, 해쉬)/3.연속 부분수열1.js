// 2중 포문
// function solution(m, arr){
//   let count = 0;
//   for(let i=0; i<arr.length; i++) {
//     let sum = arr[i];
//     for(let j=i+1; j<arr.length; j++) {
//       sum += arr[j]
//       if(sum === m) {
//         count += 1;
//         break;
//       } else if (sum > m) {
//         break;
//       }
//     }
//   }
//   return count;
// }

// 투 포인터 알고리즘
// function solution(m, arr) {
//   let lt = 0;
//   let rt = 0;
//   let sum = 0;
//   let count = 0;
//   while(rt <= arr.length) {
//     sum += arr[rt];
//     if(sum === m){
//       count++;
//       sum -= arr[lt];
//       lt++;
//       rt++;
//     } else if (sum > m) {
//       sum -= arr[lt];
//       sum -= arr[rt];
//       lt++;
//     } else {
//       rt++;
//     }
//   }
//   return count;
// }

// 투 포인터 알고리즘 답안
function solution(m, arr) {
  let answer = 0, lt = 0, sum = 0;
  for(let rt=0; rt<arr.length; rt++) {
    sum += arr[rt];
    if(sum === m) answer++;
    while(sum >= m) {
      sum -= arr[lt++];
      if(sum === m) answer++;
    }
  }
  return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));