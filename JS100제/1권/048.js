let inp = "AAABBBcccddd";
let result = "";

for (let i = 0; i < inp.length; i++) {
  if(inp[i] === inp[i].toUpperCase()) {
    result += inp[i].toLowerCase();
  } else {
    result += inp[i].toUpperCase();
  }
}

console.log(result);