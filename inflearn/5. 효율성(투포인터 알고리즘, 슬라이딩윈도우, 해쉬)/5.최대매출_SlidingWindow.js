// function solution(k, arr){
//   let answer = 0;
//   let temp;
//   for(let i=0; i<arr.length-(k-1); i++) {
//     temp = 0;
//     for(let j=0; j<k; j++) {
//       temp += arr[i+j];
//     }
//     if(temp > answer) answer = temp;
//   }
//   return answer;
// }


// 슬라이딩 윈도우
function solution(k, arr){
  let sum = 0;
  for(let i=0; i<k; i++) sum += arr[i]; // k까지 더함
  let answer = sum;
  
  for(let i=k; i<arr.length; i++) {  // 슬라이딩 윈도우
    sum += arr[i]-arr[i-k];
    if(sum > answer) answer = sum;
  }
  return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));