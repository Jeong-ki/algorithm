function solution(n, m) {
  let rest = 0;
  let x = n*m;
  while(true) {
    rest = m%n;
    if(!rest) break;
    m = n;
    n = rest;
  }
  return [n, x/n];
}

console.log(solution(3, 12));

// 최대공약수 - 유클리드 호제법
// 최소공배수 - a와 b의 최소공배수는 a와 b의 곱을 a와 b의 최대공약수를 나눈 것과 같다