function solution(n) {
  var answer = [];
  let num = n.toString();
  for(let i=num.length-1; i>=0; i--) {
    answer.push(Number(num[i]));
  }
  return answer;
}

console.log(solution(12345));
