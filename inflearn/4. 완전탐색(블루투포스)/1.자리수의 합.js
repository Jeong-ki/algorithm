function solution(n, arr){
  let sum = [0, 0];  // 값, 자리수의 합
  for(let i=0; i<n; i++) {
    const x = arr[i].toString().split('').map(o => o = parseInt(o)).reduce((acc, v) => acc + v);
    if(x > sum[1]) { 
      sum[0] = arr[i];
      sum[1] = x;
    } else if(x === sum[1] && sum[0] < arr[i]) {
      sum[0] = arr[i];
      sum[1] = x;
    }
  }
  return sum[0];
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));