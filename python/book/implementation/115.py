# 왕실의 나이트
position = input()
row = int(position[1])
column = ord(position[0]) - ord('a') + 1

steps = [(-2, -1), (-2, 1), (2, -1), (2, 1), (-1, 2), (-1, -2), (1, -2), (1, 2)]

count = 0

for step in steps:
  row_move = row + step[0]
  column_move = column + step[1]
  if(row_move >= 1 and row_move <= 8 and column_move >= 1 and column_move <= 8):
    count += 1

print(count)
