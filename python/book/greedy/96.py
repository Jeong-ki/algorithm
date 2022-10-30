# 숫자카드게임
x, y = map(int, input('행과 열을 입력하세요: ').split())

allValue = [list(map(int, input().split())) for _ in range(x)]

bigInMin = 0

for value in allValue:
  # if (min(value) > bigInMin):
  #   bigInMin = min(value)
  bigInMin = max(bigInMin, min(value))

print(bigInMin)