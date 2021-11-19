function solution(x, n) {
  let answer = [];
  for(let i=1; i<=n; i++) {
    answer.push(i*x);
  }
  return answer;
}

console.log(solution(2, 5));
