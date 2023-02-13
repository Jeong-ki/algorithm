# 전화번호 목록 (해시)

# 내 풀이
def my_solution(phone_book):
  phone_book.sort()
  for i in range(len(phone_book) - 1):
    if len(phone_book[i]) < len(phone_book[i + 1]):
      if phone_book[i] in phone_book[i + 1] and phone_book[i + 1].index(phone_book[i]) == 0:
        return False
  return True
        
print(my_solution(["119", "97674223", "1195524421"]))

# 해시 이용한 사람 풀이
def solution(phone_book):
  hash_map = {}
  for phone_number in phone_book:
    hash_map[phone_number] = 1
  for phone_number in phone_book:
    temp = ""
    for number in phone_number:
      temp += number
      if temp in hash_map and temp != phone_number:
        return False
  return True