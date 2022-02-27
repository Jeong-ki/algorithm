const nationWidth = {
	'korea': 220877,
	'Rusia': 17098242,
	'China': 9596961,
	'France': 543965,
	'Japan': 377915,
	'England' : 242900,
};

let nation;
let num = Number.MAX_SAFE_INTEGER;

for (const x in nationWidth) {
  if(x == "korea") continue;
  if(Math.abs(nationWidth["korea"]-nationWidth[x]) < num) {
    num = Math.abs(nationWidth["korea"]-nationWidth[x]);
    nation = x;
  }
}

console.log(nation, num);