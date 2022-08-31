// 빈도 카운터

// same 함수 만들기
// 왼쪽 배열을 제곱한 값들이 있는 오른쪽 배열 -> true
// same([1, 2, 3], [4, 1, 9]) -> true
// same([1, 2, 3], [4, 4, 1]) -> false, 빈도가 같아야함

// 1. O(n^2) 중첩 배열, 순진한 방법
function sameBad(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if(correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// 2. O(n) O(3n)임, 사실상 O(n), good way
// 두 개의 배욜을 객체로 세분화하여 각 배열의 요소들을 분류한 다음 비교
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (const key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// console.log(same([2, 1, 2, 3], [9, 1, 4, 4]));

// 애너그램 문제풀이
function validAnagram(arg1, arg2) {
  if (arg1.length !== arg2.length) return false;

  const argObj1 = {};
  const argObj2 = {};

  for (const char of arg1) {
    argObj1[char] = (argObj1[char] ? argObj1[char] += 1 : 1);
  }
  for (const char of arg2) {
    argObj2[char] = (argObj2[char] ? argObj2[char] += 1 : 1);
  }
  
  for (const key in argObj1) {
    if (argObj1[key] !== argObj2[key]) return false;
  }
  return true;
}

// console.log(validAnagram('abbcaaa', 'baabaac'));

// 다른 방법
function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;    
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}


console.log(validAnagram2('abbcaaa', 'baabaac'));