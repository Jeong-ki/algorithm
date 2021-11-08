function solution(s, t){
  let answer = [];
  for(let i=0; i<s.length; i++) {
    if(s[i] === t) {
      answer.push(0);
      continue;
    }
    for(let j=0; j<s.length; j++) {
      if(j === i) continue;
      if(s[j] === t) {
        answer.push(Math.abs(i-j)+1);
        break;
      }
    }
  }
  return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));