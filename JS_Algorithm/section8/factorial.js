function factorial(a){
  if (a === 0) return 1;
  return a * factorial(--a);
}

console.log(factorial(4)); // 24