# 카펫 - 완전탐색
def solution(brown, yellow):
    answer = []
    x = brown/2
    
    while x >= 3:
        y = (brown + yellow) / x
        print(x, y)
        if (x + y) * 2 - 4 == brown:
            answer.append(x)
            answer.append(y)
            break
        x -= 1
        
    return answer

print(solution(8, 1))