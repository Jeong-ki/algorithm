function solution() {
  let answer = [];
  let done = 0;
  let count = 0;
  while(true) {
      for(let i=0; i<progresses.length; i++) {
          progresses[i] += speeds[i];
      }
      while(true) {
          if(progresses[done] >= 100) {
              speeds[done] = 0;
              count += 1;
              done += 1;
              continue;
          }
          if(count) {
              answer.push(count);
              count = 0;
          }
          break;
      }
      if(speeds[speeds.length-1] == 0) break;
  }
  return answer;
}

solution();