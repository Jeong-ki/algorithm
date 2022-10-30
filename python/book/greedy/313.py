# Q3. 문자열 뒤집기
data = '0001100111100'

zero = 0
one = 0

if data[0] == '0':
  zero += 1
else:
  one += 1

for i in range(len(data) - 1):
  if data[i] != data[i + 1]:
    if data[i + 1] == '1':
      one += 1
    else:
      zero += 1

print(min(zero, one))

# 첫 풀이
data = '0001100111100'

zero = 0
one = 0

val = None

for i in data:
  if val == i: continue

  if val != '0':
    val = '0'
    zero += 1
  else:
    val = '1'
    one += 1

print(min(zero, one))