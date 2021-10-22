function solution(day, arr){
  let answer=0;
  for(let value of arr) {
    if(value%10 === day) answer += 1;
  }
  return answer;
}

arr=[24, 23, 14, 47, 54, 17, 33];
console.log(solution(4, arr));