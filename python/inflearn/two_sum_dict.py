def two_sum(nums, target):
  memo = {}
  for v in nums:
    needed_number = target - v
    if needed_number in memo:
      return True
    else:
      memo[v] = 1
  return False
      
print(two_sum([4, 1, 9, 7], 14))
