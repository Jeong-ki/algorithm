# def twoSum(nums, target):
#   n = len(nums)
#   for i in range(n):
#     for j in range(i+1, n):
#       if nums[i] + nums[j] == target:
#         return True
#   return False


# two pointer
def twoSum(nums, target):
  # O(nlogn)
  nums.sort()
  l, r = 0, len(nums)-1

  # O(n)
  while l<r:
    print(l, r)
    if nums[l] + nums[r] > target: r -= 1
    elif nums[l] + nums[r] < target: l += 1
    elif nums[l] + nums[r] == target: return True
  
  return False

print(twoSum(nums=[4,1,9,7,5,3,16], target=14));