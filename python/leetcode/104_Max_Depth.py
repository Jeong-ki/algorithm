# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# from collections import deque

# class Solution(object):
#   def maxDepth(self, root):
#     if root is None: 
#       return 0
  
#     q = deque()
#     q.append((root, 1))

#     depth = 0
    
#     while q:
#       node, num = q.popleft()
#       if node.left == None and node.right == None:
#         depth = max(depth, num)
#       if node.left:
#         q.append((node.left, num + 1))
#       if node.right:
#         q.append((node.right, num + 1))

#     return depth

class Solution:
  def longestConsecutive(self, nums):
    set_list = set(nums)
    print(set_list)

solution = Solution()
solution.longestConsecutive([1, 2, 3])