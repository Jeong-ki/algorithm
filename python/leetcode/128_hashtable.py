# class Solution(object):
#   def longestConsecutive(self, nums):
#     if not nums:
#       return 0

#     result = 1
#     memo = {}
#     for x in nums:
#       memo[x] = x + 1

#     for x in nums:
#       count = 1
#       if x - 1 not in memo:
#         while memo[x] in memo:
#             count += 1
#             x += 1
#         if count > result:
#             result = count
          
#     return result

# consecutive = Solution()

# print(consecutive.longestConsecutive([0,3,7,2,5,8,4,6,0,1]))

class Solution:
    def longestConsecutive(self, nums) -> int:
        set_list = set(nums)
        answer = 0

        for x in set_list:
            if x - 1 not in set_list:            
                count = 1
                while x + count in set_list:
                    count += 1
                answer = max(answer, count)

        return answer