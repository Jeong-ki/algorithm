# class ListNode:
#   def __init__(self, val=0, next=None, prev=None):
#     self.val = val
#     self.next = next
#     self.prev = prev

# class BrowserHistory(object):
#   def __init__(self, homepage):
#     self.head = self.current = ListNode(val=homepage)

#   def visit(self, url):
#     self.current.next = ListNode(val=url, prev=self.current)
#     self.current = self.current.next
#     return None

#   def back(self, steps):
#     while steps > 0 and self.current.prev != None:
#       steps -= 1
#       self.current = self.current.prev
#     return self.current.val
        

#   def forward(self, steps):
#     while steps > 0 and self.current.next != None:
#       steps -= 1
#       self.current = self.current.next
#     return self.current.val
        
# browserHistory = BrowserHistory("leetcode.com")


# class Solution(object):
#   def isValid(self, s):
#     stack = []
#     for x in s:
#       if x == "(":
#         stack.append(")")
#       elif x == "[":
#         stack.append("]")
#       elif x == "{":
#         stack.append("}")
#       elif not stack or stack.pop() != x:
#         return False
#     return not stack

    
# valid = Solution()
# print(valid.isValid("()[]{}"))

# class Solution(object):
#   def dailyTemperatures(self, temperatures):
#     ans = [0] * len(temperatures)
#     stack = []
#     for idx, val in enumerate(temperatures):
#       while stack and stack[-1][1] < val:
#         index, _ = stack.pop()
#         ans[index] = idx - index
#       stack.append((idx, val))
#     print(ans)
#     return ans


# temp = Solution()
# temp.dailyTemperatures([73,74,75,71,69,72,76,73])
# from collections import deque

# grid = [
#   ["1","0","1","1","1"],
#   ["1","0","1","0","1"],
#   ["1","1","1","0","1"]
# ]
# class Solution(object):
#   def numIslands(self, grid):
#     num = 0
#     row = len(grid)
#     col = len(grid[0])

#     check_grid = [[False for _ in range(col)] for _ in range(row)]

#     def bfs(x, y):
#       dx = [-1, 1, 0, 0]
#       dy = [0, 0, -1, 1]

#       queue = deque()
#       queue.append((x, y))

#       while queue:
#         cur_x, cur_y = queue.popleft()
#         for i in range(4):
#           next_x = cur_x + dx[i]
#           next_y = cur_y + dy[i]
#           if next_x >= 0 and next_x < row and next_y >= 0 and next_y < col:
#             if grid[next_x][next_y] == '1' and not check_grid[next_x][next_y]:
#               check_grid[next_x][next_y] = True
#               queue.append((next_x, next_y))


#     for i in range(row):
#       for j in range(col):
#         if grid[i][j] == '1' and not check_grid[i][j]:
#           print(i, j)
#           bfs(i, j)
#           num += 1
    
#     return num



# result = Solution()
# result.numIslands(grid)

# answer = 0

# def DFS(numbers, target, value, index):
#   global answer
#   N = len(numbers)
#   if (N == index and value == target):
#     answer += 1
#     return
#   if (N == index):
#     return
#   DFS(numbers, target, value + numbers[index], index + 1)
#   DFS(numbers, target, value - numbers[index], index + 1)

# def solution(numbers, target):
#   global answer
#   DFS(numbers, target, 0, 0)
#   print(answer)
#   return answer

# solution([1, 1, 1, 1, 1], 3)
# grid = [
#   ["1","1","0","0","0"],
#   ["1","1","0","0","0"],
#   ["0","0","1","0","0"],
#   ["0","0","0","1","1"]
# ]

# class Solution(object):
#   def numIslands(self, grid):
#     rows = len(grid)
#     cols = len(grid[0])

#     count = 0

#     def dfs(row, col):
#       if row < 0 or row == rows or col < 0 or col == cols:
#         return
      
#       if grid[row][col] != '1':
#         return

#       grid[row][col] = 'V'

#       dfs(row-1, col)
#       dfs(row+1, col)
#       dfs(row, col-1)
#       dfs(row, col+1)
    
#     for row in range(rows):
#       for col in range(cols):
#         if grid[row][col] == '1':
#           dfs(row, col)
#           count += 1
    
#     return count
    

# solution = Solution()
# print(solution.numIslands(grid))

def dailyTemperatures(temperatures):
  answer = [0] * len(temperatures)
  stack = []
  for idx, value in enumerate(temperatures):
    stack.append((idx, value))

    while len(stack) > 1:
      cur_idx, cur_val = stack[-1]
      prev_idx, prev_val = stack[-2]
      if cur_val < prev_val:
        break
      else:
        answer[prev_idx] = cur_idx - prev_idx
        del stack[-2]

  return answer

dailyTemperatures([89,62,70,58,47,47,46,76,100,70])