function solution(need, plan) {
  const queue = [];
  for (const x of need) {
    queue.push(x);
  }

  for (let i = 0; i < plan.length; i++) {
    if (plan[i] === queue[0]) queue.shift();
  }

  return queue.length === 0 ? "YES" : "NO";
}

function solution2(need, plan) {
  let answer = "YES";
  let queue = need.split("");

  for (const x of plan) {
    if (queue.include(x)) {
      if (x !== queue.shift()) {
        answer = "NO";
      }
    }
  }

  return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
