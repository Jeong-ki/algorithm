function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const thr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];
  let answer = [];

  for(let i=0; i<answers.length; i++){
    if(one[i%5] == answers[i]) { count[0] += 1 }
    if(two[i%8] == answers[i]) { count[1] += 1 }
    if(thr[i%10] == answers[i]) { count[2] += 1 }
  }

  const maxNum = Math.max(...count);
  for(let i=0; i<count.length; i++){
    if(maxNum == count[i]) answer.push(i+1);
  }
  
  return answer;
}