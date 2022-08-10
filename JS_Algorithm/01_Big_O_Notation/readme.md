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

## Big O 소개
- Big O Notation is a way to formalize fuzzy counting
  빅오는 대략적으로 숫자를 세는 것에 붙인 공식적인 표현이다.
- It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
  정식으로 입력된 내용이 늘어날수록 알고리즘에 실행 시간이 어떻게 변하는지 설명하는 공식적인 방식이다.

빅오는 어떤 펑션의 입력 값이 늘어나는 것과 펑션 실행 시간이 변하는 관계를 의미한다.
입력의 크기와 실행시간의 관계를 말한다.

O(1)
O(n)
O(n^2)
different types~

O(n)이 두개 있어도 (ex. for문 2개) O(n)이다. O(2n) 아님
중첩루프 -> O(n^2)

### 빅오 표현식의 단순화하기
5n + 2라는 식을 n으로 단순화
n이 커질수록 실행 시간도 비례하게 늘어날 것이고 n 곱하기 2든 곱하기 9,10,1000이든 크게 중요하지 않다는 것
추세가, 그래프에 선이 n의 값과 비례하다는 것!

### 쉽게 따를 수 있는 빅오 표현식
가장 중요하게 생각하는 것은 대략적으로 정확한 큰 그림이다. (크게 보기)
그래서 상수는 중요하지 않다.
O(2n)이 있다면 O(n)으로 단순하게 표기할 수 있다.
O(500)이 있다면 O(1)로 단순하게 표기할 수 있다.
O(13n^2) 도 O(n^2)로 표기!

예시)
O(n + 10) => O(n)
O(1000n + 50) => O(n)
O(n^2 + 5n + 8) => O(n^2)

### Big O Shorthands
- 명심해야할 몇가지는 빅오의 복잡도를 분석할 때, 매우 복잡해진다.
- 쉽게 적용할 수 있는 규칙이 있다. 항상 맞지는 않지만
1. 산수는 상수다. - 덧셈, 뺄셈, 곱셈, 나눗셈을 포함한다.
2. 변수 배정도 상수다.
3. 인덱스를 사용해서 배열 엘리먼트를 접근하는 것
  첫번째 아이템을 찾으나 10번째 아이템을 찾으나 인덱스를 사용하면 똑같은 시간이 걸린다.
  객체를 다루고 데이터를 접근하기 위해 키가 있다면 그것도 실행시간이 상수다.
4. 루프가 있으면 복잡도가 루프의 길이 곱하기 루프안에 있는 연산들이 된다.

루프(반복문)이어도 반복되는 횟수가 정해져있으면 O(1)이라고 할 수 있다.