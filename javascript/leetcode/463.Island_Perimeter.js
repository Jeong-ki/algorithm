/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        return dfs(grid, i, j);
      }
    }
  }
};

function dfs(grid, i, j) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === 0
  )
    return 1;
  if (grid[i][j] === "") return 0;

  grid[i][j] = "";
  let perimeter =
    dfs(grid, i - 1, j) +
    dfs(grid, i + 1, j) +
    dfs(grid, i, j - 1) +
    dfs(grid, i, j + 1);
  return perimeter;
}
