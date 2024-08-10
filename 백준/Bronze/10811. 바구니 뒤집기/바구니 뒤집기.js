const fs = require("fs");
// "/dev/stdin"
const input = fs.readFileSync("/dev/stdin", "utf-8");
const [info, ...methods] = input.split("\n");
const [basketCount, count] = info.split(" ").map(Number);

let basketArr = [];
for (let i = 1; i <= basketCount; i++) {
  basketArr.push(i);
}

for (let i = 0; i < count; i++) {
  let [from, to] = methods[i].split(" ").map(Number);
  from -= 1;
  to -= 1;
  const tempArr = basketArr.slice(from, to + 1).reverse();
  for (let j = from; j <= to; j++) {
    basketArr[j] = tempArr[j - from];
  }
}

console.log(basketArr.join(" "));
