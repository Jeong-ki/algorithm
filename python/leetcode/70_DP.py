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

# my solution - Top-down
memo = {}
class Solution:
    def climbStairs(self, n: int) -> int:
        global memo
        if (n <= 1):
            return 1
        
        if n not in memo:
            memo[n] = self.climbStairs(n - 1) + self.climbStairs(n - 2)
        return memo[n]

solution = Solution()
print(solution.climbStairs(40))

# Bottom-up
memo_b = {1: 1, 2: 2}
def cs(n):
    for i in range(3, n+1):
        memo_b[i] = memo_b[i-1] + memo_b[i-2]

    return memo_b[n]

print(cs(40))