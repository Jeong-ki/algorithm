/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth0 = function (root) {
  if (root === null) return 0;
  let depth = 0;
  let deq = [];
  deq.push([root, 1]);
  while (deq.length > 0) {
    let [node, idx] = deq.shift();
    depth = Math.max(depth, idx);
    if (node?.left) {
      deq.push([node.left, idx + 1]);
    }
    if (node?.right) {
      deq.push([node.left, idx + 1]);
    }
  }
  return depth;
};

// BFS
var maxDepth = function (root) {
  if (root === null) return 0;

  let depth = 0;
  let q = [[root, 0]];

  while (q.length) {
    let [node, idx] = q.shift();
    if (node?.left) {
      q.push([node.left, idx + 1]);
    }
    if (node?.right) {
      q.push([node.right, idx + 1]);
    }
    if (!node?.left && !node?.right) {
      depth = Math.max(depth, idx);
    }
  }
  return depth + 1;
};

// DFS
var maxDepth = function (root) {
  if (root === null) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
};

class TreeNode {
  constructor(left = null, right = null, value = 0) {
    this.left = left;
    this.right = right;
    this.value = value;
  }
}

const root = new TreeNode((value = 3));
root.left = new TreeNode((value = 9));
root.left.left = new TreeNode((value = null));
root.left.right = new TreeNode((value = null));
root.right = new TreeNode((value = 20));
root.right.left = new TreeNode((value = 15));
root.right.right = new TreeNode((value = 7));

console.log(maxDepth(root));

// 2024-05-06 BFS
var maxDepth = function (root) {
  if (root === null) return 0;
  let maxDepth = 1;
  const q = [];
  q.push([root, 1]);
  while (q.length > 0) {
    const [node, depth] = q.shift();
    if (depth > maxDepth) maxDepth = depth;
    if (node.left) q.push([node.left, depth + 1]);
    if (node.right) q.push([node.right, depth + 1]);
  }
  return maxDepth;
};

// 2024-05-06 DFS(postorder)
var maxDepth = function (root) {
  if (root === null) return 0;
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
};
