function bfs(root) {
  let visited = [];
  if (root === null) {
    return [];
  }
  let q = [];
  q.push(root);
  while(q.length > 0) {
    let curNode = q.shift();
    visited.push(curNode.value);

    if (curNode.left) {
      q.push(curNode.left);
    }
    if (curNode.right) {
      q.push(curNode.right);
    }
  }
  return visited;
}

bfs(root);