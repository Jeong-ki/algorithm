// function solution(s){
//   const str = s.toLowerCase();
//   const iter = parseInt(s.length/2);
//   for(let i=0; i<iter; i++) {
//     if(str[i] !== str[s.length-1-i]) return "NO";
//   }
//   return "YES";
// }

function solution(s){
  const str = s.toLowerCase();
  if(str.split('').reverse().join('') !== str) return "NO";
  return "YES";
}

let str="goooG";
console.log(solution(str));