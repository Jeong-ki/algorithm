// BFS
// var numIslands = function (grid) {
//   let number_of_islands = 0;
//   const row = grid.length;
//   const col = grid[0].length;

//   const visited = Array.from({ length: row }, () =>
//     Array.from({ length: col }, () => false)
//   );

//   function bfs(x, y) {
//     const dx = [-1, 1, 0, 0];
//     const dy = [0, 0, -1, 1];
//     visited[x][y] = true;
//     const queue = [[x, y]];
//     while (queue.length > 0) {
//       const [cur_x, cur_y] = queue.shift();
//       for (let i = 0; i < 4; i++) {
//         const next_x = cur_x + dx[i];
//         const next_y = cur_y + dy[i];
//         if (next_x >= 0 && next_x < row && next_y >= 0 && next_y < col) {
//           if (grid[next_x][next_y] === "1" && !visited[next_x][next_y]) {
//             visited[next_x][next_y] = true;
//             queue.push([next_x, next_y]);
//           }
//         }
//       }
//     }
//   }

//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       if (grid[i][j] === "1" && !visited[i][j]) {
//         number_of_islands++;
//         bfs(i, j);
//       }
//     }
//   }

//   return number_of_islands;
// };

// numIslands([
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ]);

// BFS - 2
// var numIslands = function (grid) {
//   let count = 0;
//   const row = grid.length;
//   const col = grid[0].length;

//   function bfs(x, y) {
//       let queue = [[x, y]];

//       while (queue.length > 0) {
//           const [cur_x, cur_y] = queue.shift();
//           if (cur_x < 0 || cur_x >= row || cur_y < 0 || cur_y >= col || grid[cur_x][cur_y] === "0") continue;
//           grid[cur_x][cur_y] = "0";

//           queue.push([cur_x - 1, cur_y]);
//           queue.push([cur_x + 1, cur_y]);
//           queue.push([cur_x, cur_y - 1]);
//           queue.push([cur_x, cur_y + 1]);
//       }
//   }

//   for (let i = 0; i < row; i++) {
//       for (let j = 0; j < col; j++) {
//           if (grid[i][j] === "1") {
//               count++;
//               bfs(i, j);
//           }
//       }
//   }

//   return count;
// };

// DFS
var numIslands = function (grid) {
  let number_of_islands = 0;
  const row = grid.length;
  const col = grid[0].length;

  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= row || y >= col || grid[x][y] === "0") return;

    grid[x][y] = "0";
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        number_of_islands++;
        dfs(i, j);
      }
    }
  }

  return number_of_islands;
};

numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]);
