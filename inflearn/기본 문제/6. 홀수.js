function solution(arr){
  let 홀수 = [];
  let sum = 0;
  let min = 0;
  for(let i=0; i<arr.length; i++) {
    if(arr[i]%2 !== 0) {
      홀수.push(arr[i]);
      sum += arr[i]
    }
  }
  min = Math.min(...홀수);
  return [min, sum];
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));