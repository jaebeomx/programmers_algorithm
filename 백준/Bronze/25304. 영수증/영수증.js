const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8");

const [receiptPrice, itemCount, ...list] = input.split("\n");

let sum = 0;
for (let i = 0; i < Number(itemCount); i++) {
  const [price, count] = list[i].split(" ").map(Number);
  sum += price * count;
}

const answer = Number(receiptPrice) - sum == 0 ? "Yes" : "No";
console.log(answer);
