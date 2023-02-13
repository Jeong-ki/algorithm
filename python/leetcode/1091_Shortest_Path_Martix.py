from collections import deque

def shortestPathBinaryMatrix(grid):
    shortest_path_len = -1
    row = len(grid)
    col = len(grid[0])

    if grid[0][0] == 1 or grid[row-1][col-1] == 1:
        return shortest_path_len

    visited = [[False] * col for _ in range(row)]
    delta = [(1, 0), (-1, 0), (0, 1), (0, -1), 
            (1, 1), (1, -1), (-1, 1), (-1, -1)]
    
    queue = deque()
    queue.append((0, 0, 1))
    visited[0][0] = True

    while queue:
        cur_x, cur_y, cur_len = queue.popleft()
        if cur_x == row - 1 and cur_y == col - 1:
            shortest_path_len = cur_len
            break

        for dx, dy in delta:
            next_x = cur_x + dx
            next_y = cur_y + dy
            if 0 <= next_x < row and 0 <= next_y < col:
                if grid[next_x][next_y] == 0 and not visited[next_x][next_y]:
                    queue.append((next_x, next_y, cur_len + 1))
                    visited[next_x][next_y] = True

    return shortest_path_len
