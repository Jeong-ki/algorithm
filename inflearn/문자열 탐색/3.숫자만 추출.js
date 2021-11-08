function solution(str){
  let num = "";
  for(let x of str) {
    if(Number(x) || Number(x)===0) num+=x;
  }
  return Number(num);
}

let str="g0en2T0s8eSoft";
console.log(solution(str));