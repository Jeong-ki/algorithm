function solution(n) {
  n = n + 1;
  let answer = 0;

  // 에라토스테네스의 체 초기화: n개 요소에 True 설정(소수로 간주)
  let arr = Array.from({length: n}, () => true);

  // n의 최대 약수가 sqrt(n) 이하이므로 i=sqrt(n)까지 검사
  const m = parseInt(n ** 0.5);
  for(let i=2; i < m+1; i++) {
    if(arr[i] === true) {         // i가 소수인 경우
      for(let j = i+i; j < n; j+=i) {  // i이후 i의 배수들을 False 판정
        arr[j] = false; 
      } 
    }
  }
  console.log(arr);
  for(let i=2; i<=n; i++) {
    if(arr[i] === true) answer++;
  }
  return answer;
}

console.log(solution(6));  // 37: 12


// 에라토스테네스의 체
// def prime_list(n):
//     # 에라토스테네스의 체 초기화: n개 요소에 True 설정(소수로 간주)
//     sieve = [True] * n

//     # n의 최대 약수가 sqrt(n) 이하이므로 i=sqrt(n)까지 검사
//     m = int(n ** 0.5)
//     for i in range(2, m + 1):
//         if sieve[i] == True:           # i가 소수인 경우
//             for j in range(i+i, n, i): # i이후 i의 배수들을 False 판정
//                 sieve[j] = False