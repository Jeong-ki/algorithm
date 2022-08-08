# 목표
- 빅오 표기법의 필요성
- 빅오 표기법 표현하는 법
- 시간 복잡성과 공간 복잡성
- 알고리즘 평가
- 로그(log)

### Who Cares?
- 코드의 성능을 얘기할 때 정확한 전문용어를 사용하는 것이 중요하다.
  만든 해결책이 만족스럽다고 해도 다른 해결책과 비교하고 성능이 어떤지 이해하는 것이 도움이 된다.
- 여러 접근법의 장단점을 얘기할때도 유용하다. 
  항상 장단점이 있어서, 꼭 하나가 무조건 최고는 아니다.
- 코드를 디버그할 때 코드를 느리게 만드는 것은 이해하는것이 중요하다.
  빅오를 이해하면 어디서 문제가 나타나는지 찾기 쉬울 수 있다.
  (비효율적인 코드를 찾는데 도움이 된다.)
- 면접에 자주 나온다.

### What does better mean? (어떤 코드가 더 좋은걸까?)
- Faster? 속도?
- Less memory-intensive? 적은 메모리 사용?
- More readable? 더 읽기 쉬운?

위의 두개가 중요하지만 읽기 쉽게할 필요도 있다.
좋은 코드를 쓴다는 것은 많은 메모리 양을 사용하지 않는 효율적인 코드를 쓰면서 읽기 쉬운 점 이 두가지를 잘 조율하는 것이 중요하다.

속도를 평가하는 방법
- 가장 쉬운 방법 : 내장 되어있는 타이밍 펑션 사용 performance.now (불편, 비교/설명하기 힘듬, 불확실)

### The Problem with Time
- Different machines will record different times
- The same machine will record different times!
- For fast algorithms, speed measurements may not be precise enough?
  빠른 알고리즘의 경우 속도 측정이 정확하지 않을 수 있다.

시간을 측정하지 않고 어느 코드가 더 좋은지 어떻게 평가할 수 있을까?
(시간을 측정하는 것이 나쁘다는 것은 아님)

If not time, then what?
Rather than counting seconds, which are so variable...
Let's count the number of simple operations the computer has to perform!
코드가 실행될때 걸리는 정확한 시간을 초로 측정하는 것보다는
대신에 컴퓨터가 처리해야하는 연산 갯수를 세면된다.
어떤 컴퓨터를 사용하든 그 갯수는 변하지 않으니까.

시간복잡도 계산 사이트 (Performance Tracker)
- 걸리는 시간과 전체적인 추세를 그래프로 보여줌
https://rithmschool.github.io/function-timer-demo/

