function solution(test){
  let answer = [];
  for(let i=0; i<test[0].length; i++) {
    for(let j=i+1; j<test[0].length; j++) {
      answer.push(""+test[0][i]+test[0][j]);
    }
  }
  
  for(let x=1; x<test.length; x++) {
    let real = [];
    for(let i=0; i<test[0].length; i++) {
      for(let j=i+1; j<test[0].length; j++) {
        let ind = answer.indexOf(""+test[x][i]+test[x][j]);
        if(ind !== -1) {
          real.push(answer[ind]);
        }
      }
    }
    answer = real;
  }
  return answer.length;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));