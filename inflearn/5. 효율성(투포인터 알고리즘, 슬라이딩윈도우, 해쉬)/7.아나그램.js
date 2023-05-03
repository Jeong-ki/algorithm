// function solution(str1, str2) {
//   let result = "YES";
//   if (str1.length !== str2.length) return "NO";

//   let memo1 = new Map();
//   let memo2 = new Map();

//   for (let i = 0; i < str1.length; i++) {
//     if (memo1.has(str1[i])) {
//       memo1.set(str1[i], memo1.get(str1[i]) + 1);
//     } else {
//       memo1.set(str1[i], 1);
//     }

//     if (memo2.has(str2[i])) {
//       memo2.set(str2[i], memo2.get(str2[i]) + 1);
//     } else {
//       memo2.set(str2[i], 1);
//     }
//   }

//   for (let x of str1) {
//     if (memo1.get(x) !== memo2.get(x)) result = "NO";
//   }

//   return result;
// }

function solution(str1, str2) {
  let answer = "YES";
  let sH = new Map();

  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }

  return answer;
}

let a = "abaCC";
let b = "Caaab";
console.log(solution(a, b));
