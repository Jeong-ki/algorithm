function solution(N, stages) {
  let answer = [];
  let record = [];
  let user = stages.length;
  for(let i=1; i<=N; i++) {
    let count = 0;
    for(let j=0; j<stages.length; j++) {
      if(stages[j] === i) count += 1;
    }
    if(user===0) {
      record.push(0);
    } else {
      record.push(count/user);
    }
    user -= count;
  }
  let before = [...record];
  record.sort((a,b) => b-a);
  for(let x of record) {
    let rank = before.indexOf(x);
    answer.push(rank+1);
    before[rank] = undefined;
  }
  return answer;
}

solution(5,	[1,2,2,1,3]);
//result [3,2,1,4,5]