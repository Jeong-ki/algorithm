function solution(s){
  let answer = s.replace(/A/gi, '#');
  return answer;
}

let str="BANANA";
console.log(solution(str));