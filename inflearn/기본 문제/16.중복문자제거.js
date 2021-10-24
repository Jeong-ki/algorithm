function solution(s){  
  let answer = "";
  for(let value of s) {
    if(!answer.includes(value)) {
      answer += value;
    }
  }
  return answer;
}
console.log(solution("ksekkset"));