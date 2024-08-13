const fs = require("fs");

// const input = fs.readFileSync("./test.txt", "utf-8");
const input = fs.readFileSync("/dev/stdin", "utf-8");

const [count, ...arr] = input.split("\n");

for (let i = 0; i < Number(count); i++) {
  let str = "";
  const [repeatCount, char] = arr[i].trim().split(" ");
  for (let ch of char) {
    str += ch.repeat(Number(repeatCount));
  }
  console.log(str);
}
