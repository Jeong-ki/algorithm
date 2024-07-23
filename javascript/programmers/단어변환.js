function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  return bfs(begin, target, words);
}

function bfs(begin, target, words) {
  const queue = [];
  queue.push([begin, 0]);

  while (queue.length > 0) {
    const [now, step] = queue.shift();

    if (now === target) return step;

    for (const word of words) {
      let count = 0;
      for (let i = 0; i < now.length; i++) {
        if (now[i] !== word[i]) {
          count++;
        }
      }
      if (count === 1) {
        queue.push([word, step + 1]);
      }
    }
  }
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
