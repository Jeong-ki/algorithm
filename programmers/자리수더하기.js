function solution(n) {
  let answer = 0;
  const str = n+"";
  console.log(str);
  for(let i=0; i<str.length; i++) {
      answer += Number(str[i]);
  }
  return answer;
}


console.log(solution(123));