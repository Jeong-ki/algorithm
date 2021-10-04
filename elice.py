# import sys
# n = int(sys.stdin.readline().rstrip())
# N = [int(x) for x in sys.stdin.readline().split()]

import sys

def main():
    N, M = map(int, sys.stdin.readline().split())
    
    board = []
    for i in range(N):
        raw = [int(x) for x in sys.stdin.readline().split()]
        board.append(raw)
    
    y, x = map(int, sys.stdin.readline().split())
    count = 0
    y -= 1
    x -= 1
        
    while True:
        if board[y][x] == 1: # 상
            y -= 1 
        elif board[y][x] == 2: # 좌
            x -= 1
        elif board[y][x] == 3: # 우
            x += 1
        elif board[y][x] == 4: # 하
            y += 1
        
        if x<0 or y<0 or x>len(board)-1 or y>len(board)-1:
            print(-1)
            break
          
        count += 1
        if count >= (len(board))*(len(board[0])):
            print("특정 구간 반복")
            print(count)
            break

if __name__=="__main__":
    main()