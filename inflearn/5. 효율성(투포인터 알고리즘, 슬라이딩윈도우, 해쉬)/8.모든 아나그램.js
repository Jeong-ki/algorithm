// 해쉬, 투포인터, 슬라이딩 윈도우
// function compareMap(sH, tH) {
//   if (sH.size !== tH.size) return false;
//   for (const [key, value] of tH) {
//     if (sH.get(key) !== value) return false;
//   }
//   return true;
// }

// function solution(s, t) {
//   let count = 0;
//   let n = t.length;
//   let sH = new Map();
//   let tH = new Map();

//   for (const x of t) {
//     if (tH.has(x)) tH.set(x, tH.get(x) + 1);
//     else tH.set(x, 1);
//   }

//   for (let i = 0; i < t.length; i++) {
//     if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
//     else sH.set(s[i], 1);
//   }

//   if (compareMap(sH, tH)) count++;

//   for (let i = 0; i < s.length - n; i++) {
//     // 지우고
//     if (sH.get(s[i]) === 1) sH.delete(s[i]);
//     else sH.set(s[i], sH.get(s[i]) - 1);

//     // 더하고
//     if (sH.has(s[i + n])) sH.set(s[i + n], sH.get(s[i + n]) + 1);
//     else sH.set(s[i + n], 1);

//     if (compareMap(sH, tH)) count++;
//   }

//   return count;
// }

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let sH = new Map();
  let tH = new Map();

  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }

  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);

    if (compareMaps(sH, tH)) answer++;

    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
