function power(a, b) {
  if (b === 0) return 1;
  return a * power(a, --b);
}

power(2, 0); // 1
console.log(power(2, 4)); // 16