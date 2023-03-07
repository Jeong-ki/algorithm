# DFS 시간 초과
class Solution:
    def climbStairs(self, n):
        if (n <= 1):
            return 1
        return self.climbStairs(n - 1) + self.climbStairs(n - 2)
        

solution = Solution()
print(solution.climbStairs(n = 3))

# memo, dp
def climbing_stairs(n):
    memo = {}

    def dp(n):
        if n == 1:
            return 1
        if n == 2:
            return 2
        
        if n not in memo:
            memo[n] = dp(n-1) + dp(n-2)
    
        return memo[n]
    
    return dp(n)

print(climbing_stairs(40))