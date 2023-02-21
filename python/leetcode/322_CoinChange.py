from collections import deque

class Solution(object):
    def coinChange(self, coins, amount):
        q = deque([(amount, 0)])

        visited = set()

        while q:
            val, count = q.popleft()

            if val == 0:
                return count
            
            for x in coins:
                next_val = val - x

                if next_val in visited or next_val < 0:
                    continue

                q.append((next_val, count+1))
                visited.add(next_val)
        
        return -1

solution = Solution()
solution.coinChange(coins = [1,2,5], amount = 11)