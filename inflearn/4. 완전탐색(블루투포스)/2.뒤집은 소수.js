function solution(arr){
  let answer = [];
  let reverseArr = arr.map((v, i) => {
    return parseInt(v.toString().split('').reverse().join(''));
  });
  for(let x of reverseArr) {
    let check = true;
    if(x === 1) continue;
    for(let i=2; i<x/2; i++) {
      if(x%i === 0)  { 
        check = false;
        break;
      }      
    }
    if(check) answer.push(x);
  }
  return answer;
}

// function isPrime(num) {
//   if(num===1) return false;
//   for(let i=2; i<=parseInt(Math.sqrt(num)); i++) {
//     if(num%i===0) return false;
//   }
//   return true;
// }

// function solution(arr){
//   let answer = [];
//   for(let x of arr) {
//     let res=0;
//     while(x) {
//       let t=x%10;
//       res=res*10+t;
//       x=parseInt(x/10);
//     }
//     if(isPrime(res)) answer.push(res);
//   }  
//   return answer;
// }

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));