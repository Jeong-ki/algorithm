// function solution(s){  
//   let answer = [];
//   for(let value of s) {
//     if(!answer.includes(value)) {
//       answer.push(value);
//     }
//   }
//   return answer;
// }

function solution(s) {
  let answer;
  answer = s.filter(function(v, i) {
    if(s.indexOf(v) === i) return true;
  })
  return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));