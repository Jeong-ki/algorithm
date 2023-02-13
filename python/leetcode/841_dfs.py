class Solution(object):
    def canVisitAllRooms(self, rooms):
        visited = [False] * len(rooms)

        def dfs(room):
            if visited[room]:
                return

            visited[room] = True
            for key in rooms[room]:
                if not visited[key]:
                    dfs(key)

        dfs(0)
        
        return False not in visited


solution = Solution()
print(solution.canVisitAllRooms([[1,3],[3,0,1],[2],[0]]))