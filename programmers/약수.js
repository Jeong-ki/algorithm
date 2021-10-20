function solution(left, right) {
  let answer = 0;
  for(let i=0; i<right-left+1; i++) {
    let 루트 = Math.floor(Math.sqrt(left + i))**2;
    if(루트 === left+i) {
      answer -= left+i;
      continue;
    }
    answer += left+i;
  }
  console.log(answer);
}

solution(13, 17);