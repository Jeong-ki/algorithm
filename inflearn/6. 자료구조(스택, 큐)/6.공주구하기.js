function solution(n, k) {
  let queue = Array.from({ length: n }, (v, i) => i + 1);

  let count = 1;
  while (queue.length > 1) {
    if (count === k) {
      queue.shift();
      count = 1;
    } else {
      queue.push(queue.shift());
      count++;
    }
  }

  return queue[0];
}

console.log(solution(8, 3));

function solution2(n, k) {
  let answer;
  let queue = Arrayl.from({ length: n }, (v, i) => i + 1);

  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }

  return answer;
}
