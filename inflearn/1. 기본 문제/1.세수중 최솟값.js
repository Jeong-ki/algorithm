function solution(a, b, c){
  answer = a > b ? b : a;
  answer = answer > c ? c : answer;
  return answer;
}

console.log(solution(6, 5, 11));