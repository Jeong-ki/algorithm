from collections import deque

def bfs(root):
  visited = []
  if root is None:
    return []
  q = deque()
  q.append(root)
  while q:
    cur_node = q.popleft()
    visited.append(cur_node.value)

    if cur_node.left:
      q.append(cur_node.left)
    if cur_node.right:
      q.append(cur_node.right)
  print(visited)
  return visited

# bfs(root)


### 트리 테스트
class Node:
  def __init__(self, value = 0, left = None, right = None):
    self.value = value
    self.left = left
    self.right = right

class BinaryTree:
  def __init__(self):
    self.root = None

bt = BinaryTree()
bt.root = Node(value = 1)
bt.root.left = Node(value = 2)
bt.root.right = Node(value = 3)
bt.root.left.left = Node(value = 4)
bt.root.left.right = Node(value = 5)
bt.root.right.right = Node(value = 6)

bfs(bt.root)