const candidate = Array(45).fill().map((v, i) => i + 1);

function shuffle(array) { 
  array.sort(() => Math.random() - 0.5); 
}
shuffle(candidate);

console.log(candidate); 