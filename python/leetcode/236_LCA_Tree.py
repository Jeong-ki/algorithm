class Node:
  def __init__(self, value = 0, left = None, right = None):
    self.value = value
    self.left = left
    self.right = right

class BinaryTree:
  def __init__(self):
    self.root = None

class Solution(object):
  def lowestCommonAncestor(self, root, p, q):
    if root is None:
      return None
    
    left = self.lowestCommonAncestor(root.left, p, q)
    right = self.lowestCommonAncestor(root.right, p, q)

    if root == p or root == q:
      return root
    elif left and right:
      return root
    return left or right

bt = BinaryTree()
bt.root = Node(value = 1)
bt.root.left = Node(value = 2)
bt.root.right = Node(value = 3)
bt.root.left.left = Node(value = 4)
bt.root.left.right = Node(value = 5)
bt.root.right.right = Node(value = 6)

lca = Solution()
lca.lowestCommonAncestor(bt.root, 2, 3)
