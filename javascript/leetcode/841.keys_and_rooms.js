// BFS
var canVisitAllRooms = function (rooms) {
  const visited = Array.from({ length: rooms.length }, () => false);

  const queue = [rooms[0]];
  visited[0] = true;

  while (queue.length > 0) {
    const keys = queue.shift();
    keys.forEach((key) => {
      if (visited[key] === false) {
        visited[key] = true;
        queue.push(rooms[key]);
      }
    });
  }

  return !visited.includes(false);
};

// DFS
var canVisitAllRooms = function (rooms) {
  const visited = new Map();

  function dfs(key) {
    visited.set(key, key);
    rooms[key].forEach((newKey) => {
      if (!visited.has(newKey)) {
        dfs(newKey);
      }
    });
  }

  dfs(0);

  return rooms.length === visited.size;
};
