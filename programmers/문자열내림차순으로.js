function solution(s) {
  s = s.split('').sort((a, b) => {
    if(a < b) return 1;
    if(a > b) return -1;
    if(a === b) return 0;
  }).join('');
  return s;
}
console.log(solution("Zbcdefg"));
