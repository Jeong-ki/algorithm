function solution(n) {
  let x = Math.floor(Math.sqrt(n));
  if( x**2 === n ) console.log((x+1)**2);
  else console.log(-1);
}

solution(27)