function solution(s){
  const str = s.toLowerCase();
  const alp = "abcedfghijklmnopqrstuvwxyz";
  let a = "";
  let b = "";
  for(let i=0; i<str.length; i++) {
    if(alp.indexOf(str[i]) !== -1) a += str[i];
    if(alp.indexOf(str[str.length-1-i]) !== -1) b += str[str.length-1-i];
  }
  return a === b ? "YES" : "NO";
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));