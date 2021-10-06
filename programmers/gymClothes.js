function solution(n, lost, reserve) {
  lost.sort();
  reserve.sort();
  let answer = n - lost.length;
  for(let i = 0; i < lost.length; i++) {
    if(reserve.indexOf(lost[i]) != -1) {
      answer += 1;
      reserve.splice(reserve.indexOf(lost[i]),1);
      lost.splice(i,1);
      i--
    }
  }
  for(let i = 0; i < lost.length; i++) {
    if(reserve.indexOf(lost[i]-1) != -1) {
      answer += 1;
      reserve.splice(reserve.indexOf(lost[i]-1),1);
      lost.splice(i,1);
      i--
    } else if(reserve.indexOf(lost[i]+1) != -1) {
      answer += 1;
      reserve.splice(reserve.indexOf(lost[i]+1),1);
      lost.splice(i,1);
      i--
    }
  }
  return answer;
}