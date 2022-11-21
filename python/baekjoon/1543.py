# 문서검색 (greedy)
s = input()
p = input()

count = 0

while True:
  index = s.find(p)
  if index == -1:
    break
  count += 1
  s = s[index + len(p):]

print(count)
