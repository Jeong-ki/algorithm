function solution(s){
  let answer = "";
  for(let value of s) {
    if(answer.length < value.length) answer = value;
  }
  return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));