// https://school.programmers.co.kr/learn/courses/30/lessons/43165

// 1.
function solution(numbers, target) {
  function dfs(sum, index) {
    if (index === numbers.length - 1) {
      if (sum === target) return 1;
      return 0;
    }
    return (
      dfs(sum + numbers[index + 1], index + 1) +
      dfs(sum - numbers[index + 1], index + 1)
    );
  }
  return dfs(numbers[0], 0) + dfs(-numbers[0], 0);
}

// 2.
function solution(numbers, target) {
  let answer = 0;

  function dfs(sum, index) {
    if (index === numbers.length) {
      if (sum === target) answer += 1;
      return;
    }
    dfs(sum + numbers[index], index + 1);
    dfs(sum - numbers[index], index + 1);
  }

  dfs(0, 0);
  return answer;
}
