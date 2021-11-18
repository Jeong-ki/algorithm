function solution(n) {
  let fibo = [1, 1];
  for(let i=0; i<n-2; i++) {
    let num = (fibo[i] + fibo[i+1])%1234567;
    console.log(num);
    fibo.push(num);
  }
  return fibo[n-1];
}

console.log(solution(5));