# 더 맵게 (Heap)
import heapq

def solution(scoville, K):
    count = 0
    heapq.heapify(scoville)
    
    while scoville[0] < K:
        if len(scoville) == 1:
            return -1
        one = heapq.heappop(scoville)
        two = heapq.heappop(scoville)
        heapq.heappush(scoville, one + two * 2)
        count += 1

    return count

print(solution([3, 1, 2, 9, 10, 12], 7))
