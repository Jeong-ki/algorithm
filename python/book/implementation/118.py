# 게임개발
N, M = map(int, input().split())
x, y, direction = map(int, input().split())

d = [[0] * M for _ in range(N)]
d[x][y] = 1

maps = []
for i in range(M):
  a = list(map(int, input().split()))
  maps.append(a)

# 북 동 남 서
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

def turnLeft():
  global direction
  direction -= 1
  if direction == -1:
    direction = 3

count = 1
turn_time = 0

while(True):
  turnLeft()
  nx = x + dx[direction]
  ny = y + dy[direction]

  if d[nx][ny] == 0 and maps[nx][ny] == 0:
    d[nx][ny] = 1
    x = nx
    y = ny
    count += 1
    turn_time = 0
    continue

  else:
    turn_time += 1

  if turn_time == 4:
    nx = x - dx[direction]
    ny = y - dy[direction]

    if maps[nx][ny] == 0:
      x = nx
      y = ny
    else:
      break
    turn_time = 0

print(count)