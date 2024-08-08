const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8");
// const input = fs.readFileSync("./test.txt", "utf-8");

const [info, ...methods] = input.split("\n");

const [basketCount, count] = info.split(" ").map(Number);
const basket = new Array(basketCount).fill(0);

methods.forEach((item) => {
  const [from, to, num] = item.split(" ").map(Number);
  for (let i = 0; i < count; i++) {
    for (let j = from - 1; j <= to - 1; j++) {
      basket[j] = num;
    }
  }
});

console.log(basket.join(" "));
