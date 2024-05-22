/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  let result = -1;
  const row = grid.length;
  const col = grid[0].length;
  if (grid[0][0] === 1 || grid[row - 1][col - 1] === 1) return result;

  const queue = [[0, 0, 1]];

  const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
  const dy = [-1, 0, 1, 1, 1, 0, -1, -1];

  // const delta = [
  //   [-1, -1],
  //   [-1, 0],
  //   [-1, 1],
  //   [0, 1],
  //   [1, 1],
  //   [1, 0],
  //   [1, -1],
  //   [0, -1],
  // ];

  while (queue.length > 0) {
    const [cur_x, cur_y, cnt] = queue.shift();
    if (cur_x === row - 1 && cur_y === col - 1) {
      result = cnt;
      break;
    }
    // for (let [x, y] of delta) {
    //   const next_x = cur_x - x;
    //   const next_y = cur_y - y;
    //   if (
    //     next_x >= 0 &&
    //     next_x < row &&
    //     next_y >= 0 &&
    //     next_y < col &&
    //     grid[next_x][next_y] === 0
    //   ) {
    //     grid[next_x][next_y] = 1;
    //     queue.push([next_x, next_y, cnt + 1]);
    //   }
    // }
    for (let i = 0; i < 8; i++) {
      const next_x = cur_x + dx[i];
      const next_y = cur_y + dy[i];
      if (
        next_x >= 0 &&
        next_x < row &&
        next_y >= 0 &&
        next_y < col &&
        grid[next_x][next_y] === 0
      ) {
        grid[next_x][next_y] = 1;
        queue.push([next_x, next_y, cnt + 1]);
      }
    }
  }

  return result;
};
