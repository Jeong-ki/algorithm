function sameFrequency(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);
  if (str1.length !== str2.length) return false;
  let a = {};
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    a[char] = a[char] ? a[char] += 1 : 1; 
  }
  
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (!a[char]) return false;
    a[char] -= 1;
  }

  return true;
}

console.log(sameFrequency(22,222));

// sameFrequency(34,14)
// sameFrequency(3589578, 5879385)
// sameFrequency(22,222)