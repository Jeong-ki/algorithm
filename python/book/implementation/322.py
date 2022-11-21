S = input()

result = []
num = 0

for i in S:
  if i.isalpha():
    result.append(i)
  else:
    num += int(i)

result.sort()

if num != 0:
  result.append(str(num))

print(''.join(result))