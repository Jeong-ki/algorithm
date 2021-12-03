// hash

// 내가 푼 코드(Map 없이, 값이 주어져있어야함.)
// function solution(s){  
//   let candidate = ["A", "B", "C", "D", "E"];
//   let count = [0, 0, 0, 0, 0];
//   for(let i=0; i<s.length; i++) {
//     if(s[i] === 'A') count[0]++;
//     else if(s[i] === 'B') count[1]++;
//     else if(s[i] === 'C') count[2]++;
//     else if(s[i] === 'D') count[3]++;
//     else count[4]++;
//   }
//   return candidate[count.indexOf(Math.max(...count))];
// }

function solution(s){  
  const cand = new Map();
  for(let x of s) {
    if(cand.has(x)) cand.set(x, cand.get(x)+1);
    else cand.set(x, 1);
  }
  let answer;
  let max = 0;
  for(let [x, y] of cand) {
    if(max < y) {
      max = y;
      answer = x;
    }
  }
  console.log(cand);
  return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));