function solution(arr){
  let answer = [];
  let reverseArr = arr.map((v, i) => {
    return parseInt(v.toString().split('').reverse().join(''));
  });
  for(let x of reverseArr) {
    let check = true;
    if(x === 1) continue;
    for(let i=2; i<x; i++) {
      if(x%i === 0)  { 
        check = false;
        break;
      }      
    }
    if(check) answer.push(x);
  }
  return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));