// function solution(s, t){
//   let answer = [];
//   for(let i=0; i<s.length; i++) {
//     if(s[i] === t) {
//       answer.push(0);
//       continue;
//     }
//     for(let j=1; j<s.length; j++) {
//       if(s[i+j] === t || s[i-j] === t) { 
//         answer.push(j)
//         break;
//       }
//     }
//   }
//   return answer;
// }

function solution(s, t) {
  let answer = [];
  let p = 1000;
  for(let x of s) {
    if(x===t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for(let i=s.length-1; i>=0; i--) {
    if(s[i] === t) p=0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p)
    }
  }
  return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));