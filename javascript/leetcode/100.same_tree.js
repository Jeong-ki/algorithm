// 01.
// var isSameTree = function(p, q) {
//   const res_p = [];
//   const res_q = [];

//   dfs(p, res_p);
//   dfs(q, res_q);

//   return JSON.stringify(res_p) === JSON.stringify(res_q);
// };

// function dfs(root, res) {
//   if (!root) {
//       res.push(null);
//       return;
//   }
//   res.push(root.val);
//   dfs(root.left, res);
//   dfs(root.right, res);
// }

// 02.
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
