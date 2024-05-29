// https://school.programmers.co.kr/learn/courses/30/lessons/43162?language=javascript

// 1. DFS
function solution(n, computers) {
  let count = 0;

  const visited = Array.from({ length: n }, () => false);

  function dfs(i) {
    visited[i] = true;
    for (let j = 0; j < n; j++) {
      if (i !== j && computers[j][i] === 1 && visited[j] === false) {
        dfs(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] === false) {
      dfs(i);
      count++;
    }
  }

  return count;
}

// 2. BFS
function solution(n, computers) {
  let count = 0;

  const visited = Array.from({ length: n }, () => false);

  function bfs(idx) {
    visited[idx] = true;
    const queue = [];
    queue.push(idx);

    while (queue.length > 0) {
      const curIdx = queue.shift();
      visited[curIdx] = true;

      for (let i = 0; i < n; i++) {
        if (
          visited[i] === false &&
          computers[i][curIdx] === 1 &&
          i !== curIdx
        ) {
          queue.push(i);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] === false) {
      bfs(i);
      count++;
    }
  }

  return count;
}
