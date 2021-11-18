function solution(n, k, card){
  let answer = [];
  for(let i=0; i<n; i++) {
    for(let j=i+1; j<n; j++) {
      for(let x=j+1; x<n; x++) {
        answer.push(card[i]+card[j]+card[x]); // 카드 세 값 더함
      }
    }
  }
  answer = [...new Set(answer)];
  answer.sort((a, b) => b - a);
  return answer[k-1];
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));