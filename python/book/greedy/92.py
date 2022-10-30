# 큰 수의 법칙
n, m, k = map(int, input('숫자 세개를 입력').split())
data = list(map(int, input('N개의 수 입력').split()))

data.sort()
first = data[-1] # 가장 큰 수
second = data[-2] # 두번째로 큰 수

# 그냥 풀기
sum = 0;

for idx in range(m):
  if((idx+1) % k == 0):
    sum += second
  else:
    sum += first


# 수학적 아이디어 이용
# 반복되는 수열에 대해서 파악
# 가장 큰 수가 더해지는 횟수: int(M / (K + 1) * K + M % (K + 1))
result = 0

count = int((m / (k + 1)) * k)
count += m % (k + 1)

result += count * first
result += (m - count) * second

print(result)