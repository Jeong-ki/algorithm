# BFS 풀이
from collections import deque

def numIslands(grid):
  number_of_islands = 0
  row = len(grid)
  col = len(grid[0])
  visited = [[False] * col for _ in range(row)] # 방문 체크하기 위한 똑같은 그래프(행렬) 구현

  def bfs(x, y): # 안에서 bfs를 써서 매개변수를 복잡하게 작성 안해도됨, 메모리 아낌
    # 상하좌우, 대각선도 필요하면 추가
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    visited[x][y] = True
    queue = deque()
    queue.append((x, y))
    while queue:
      cur_x, cur_y = queue.popleft()
      for i in range(4):
        next_x = cur_x + dx[i]
        next_y = cur_y + dy[i]
        if next_x >= 0 and next_x < row and next_y >= 0 and next_y < col:
          if grid[next_x][next_y] == "1" and not visited[next_x][next_y]:
            visited[next_x][next_y] = True
            queue.append((next_x, next_y))

  for i in range(row):
    for j in range(col):
      if grid[i][j] == '1' and not visited[i][j]:
        bfs(i, j) # or dfs
        number_of_islands += 1
  return number_of_islands

# print(numIslands(grid = [
#   ["1","1","0","0","0"],
#   ["1","1","0","0","0"],
#   ["0","0","1","0","0"],
#   ["0","0","0","1","1"]
# ]))

# DFS 풀이
def numIslands2(grid):
  count = 0
  row = len(grid)
  col = len(grid[0])

  def dfs(x, y):
    if x < 0 or y < 0 or x == row or y == col:
      return
    
    if grid[x][y] != "1":
      return

    grid[x][y] = 'V'

    dfs(x - 1, y)
    dfs(x + 1, y)
    dfs(x, y -1)
    dfs(x, y + 1)

  for i in range(row):
    for j in range(col):
      if grid[i][j] == "1":
        dfs(i, j)
        count += 1
  
  return count

print(numIslands2(grid=[
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))