// let str = "hi";
// let result = "";

// console.log(Math.ceil((50 - str.length) / 2)+str.length);

// for (let i = 0; i < 50 - str.length; i++) {
//   if(i === Math.ceil((50 - str.length) / 2)) {
//     result += str;
//   }
//   result += "=";
// }

// console.log(result);
// console.log(result.length);

const str = "hiii";
const n = 25 + parseInt((str.length/2), 10);

const a = str.padStart(n, '='); 

console.log(a.padEnd(50, '='));

//padStart(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 왼쪽부터 주어진 문자열로 채움
//padEnd(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 오른쪽부터 주어진 문자열로 채움