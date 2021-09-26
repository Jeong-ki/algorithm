import sys
T = int(sys.stdin.readline())
for i in range(T):
  H, W, N = map(int, sys.stdin.readline().split())

  if N%H==0:
    a = H
    b = N//H
  else:
    b = N//H+1
    a = N%H

  if b < 10:
    b = format(b, '02')
  print(f'{a}{b}')

  # print(N%H) #몇백
  # print(N//H+1) #몇호