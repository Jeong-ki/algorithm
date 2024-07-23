// https://school.programmers.co.kr/learn/courses/30/lessons/42576

// 1.
// function solution(participant, completion) {
//   let result = '';
//   const runner = new Map();
//   completion.forEach(item => {
//       if (runner.has(item)) {
//           runner.set(item, runner.get(item) + 1);
//       } else {
//           runner.set(item, 1);
//       }
//   });

//   participant.forEach(item => {
//       if (runner.has(item)) {
//           if (runner.get(item) === 0) result = item;
//           runner.set(item, runner.get(item) - 1);
//       } else {
//           result = item;
//       }
//   });

//   return result;
// }

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [key, value] of map) {
    if (value > 0) return key;
  }
}
