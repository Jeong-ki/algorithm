function solution(s){
  const iter = parseInt(s.length/2);
  const str = s.toLowerCase();
  for(let i=0; i<iter; i++) {
    if(str[i] !== str[s.length-1-i]) return "NO";
  }
  return "YES";
}

let str="goooG";
console.log(solution(str));