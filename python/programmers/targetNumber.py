answer = 0

def DFS(idx, value, numbers, target):
  global answer
  N = len(numbers)
  if (idx == N and target == value):
    answer += 1
    return
  if (idx == N):
    return

  DFS(idx+1, value+numbers[idx], numbers, target)
  DFS(idx+1, value-numbers[idx], numbers, target)

def solution(numbers, target):
  global answer
  DFS(0, 0, numbers, target)
  return answer

# def solution(numbers, target):
#   answer = 0
    
#   def DFS(idx, value):
#     nonlocal answer
#     N = len(numbers)
#     if (idx == N and value == target):
#       answer += 1
#       return
#     if (idx == N):
#       return
        
#     DFS(idx+1, value+numbers[idx])
#     DFS(idx+1, value-numbers[idx])
    
#   DFS(0, 0)
#   return answer

# solution([1, 1, 1, 1, 1], 3) # return 5
# solution([4, 1, 2, 1], 4) # return 2
print(solution([4, 1, 2, 1], 4))