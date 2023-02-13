from collections import deque

def solution(maps):
    answer = -1
    
    row = len(maps)
    col = len(maps[0])
    
    if maps[0][0] == 0 or maps[row-1][col-1] == 0:
        return answer
    
    visited = [[False] * col for _ in range(row)]
    delta = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    
    queue = deque() # [(0, 0, 1)]
    queue.append((0, 0, 1)) # (0, 0), 카운트 1
    
    while queue:
        cur_x, cur_y, cur_len = queue.popleft()
        
        if cur_x == row-1 and cur_y == col-1:
            answer = cur_len
            break
        
        for dx, dy in delta:
            next_x = cur_x + dx
            next_y = cur_y + dy
            next_len = cur_len + 1
            
            if 0 <= next_x < row and 0 <= next_y < col:
                if maps[next_x][next_y] == 1 and not visited[next_x][next_y]:
                    queue.append((next_x, next_y, next_len))
                    visited[next_x][next_y] = True

    return answer