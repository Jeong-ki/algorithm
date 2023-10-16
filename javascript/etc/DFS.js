// DFS로 모든 노드 접근
function dfs(curNode) {
  if (curNode === null) {
    return [];
  }
  dfs(curNode.left);
  dfs(curNode.right);
}

dfs(root);