function solution(n) {
  let count = 0;
  let num = i;
  if(num===n) count++;
  for(let i=1; i<=n; i++) {
    for(let j=i+1; j<=n; j++) {
      num += j;
      if(num===n) {
        count++;
        break;
      } else if (num > n) {
        break;
      }
    }
  }
return count;
}

console.log(solution(15));