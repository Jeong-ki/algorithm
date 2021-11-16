function solution(a, b) {
  let answer = 0;
  let c = a<=b ? a : b;
  for(let i=c; i<=c+Math.abs(a-b); i++) {
      answer+=i;
  }
  return answer;
}
