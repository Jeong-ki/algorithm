function solution(s){         
  let answer=0;
  for(let value of s) {
    if(value === value.toUpperCase()) answer++;
  }
  return answer;
}

let str="KorEaTimeGood";
console.log(solution(str));