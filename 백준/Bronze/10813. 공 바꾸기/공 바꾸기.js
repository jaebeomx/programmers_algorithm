const fs = require("fs");
const input = fs.readFileSync("./dev/stdin", "utf-8");
const [info, ...Methods] = input.split("\n");
const [basketCount, changeCount] = info.split(" ").map(Number);

let basketArr = [];
for (let i = 0; i <= basketCount; i++) {
  basketArr.push(i);
}

for (let i = 0; i < changeCount; i++) {
  const [basketA, basketB] = Methods[i].split(" ").map(Number);
  [basketArr[basketA], basketArr[basketB]] = [basketArr[basketB], basketArr[basketA]];
}

console.log(basketArr.slice(1).join(" "));
