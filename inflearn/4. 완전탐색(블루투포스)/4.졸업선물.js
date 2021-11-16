function solution(m, product){
  let answer = 0;
  let cheapSort = product.sort(function(a, b) {
    return (a[0]+a[1]) - (b[0]+b[1]);
  });
  for(let x of cheapSort) {
    if(answer + x[0]+x[1] > m) {
      if(answer + (x[0]/2) + x[1] <= m) answer += (x[0]/2) + x[1];
      continue;
    };
    answer += x[0]+x[1];
  }
  return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));