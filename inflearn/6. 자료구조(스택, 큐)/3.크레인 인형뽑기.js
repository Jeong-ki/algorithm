function solution(board, moves) {
  let stack = [];
  let count = 0;

  for (let x of moves) {
    let idx = x - 1;
    for (let y of board) {
      if (y[idx]) {
        if (stack.length > 0 && stack[stack.length - 1] === y[idx]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(y[idx]);
        }
        y[idx] = 0;
        break;
      }
    }
  }
  return count;
}
