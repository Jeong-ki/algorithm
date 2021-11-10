function solution(s, t){
  let answer = [];
  for(let i=0; i<s.length; i++) {
    if(s[i] === t) {
      answer.push(0);
      continue;
    }
    for(let j=1; j<s.length; j++) {
      if(s[i+j] === t || s[i-j] === t) { 
        answer.push(j)
        break;
      }
    }
  }
  return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));