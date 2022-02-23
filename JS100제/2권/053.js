let bracket = '(()())';


function solution(bracket) {
  if(bracket.length%2 !== 0) return "NO1";

  let count = 0;

  for (let i = 0; i < bracket.length; i++) {
    if(bracket[i] === "(") {
      count++;
    } else {
      count--;
    }
    if(count < 0) return "NO2";
  }
  if(count === 0) {
    return "YES";
  } else {
    return "NO3";
  }
}

console.log(solution(bracket));