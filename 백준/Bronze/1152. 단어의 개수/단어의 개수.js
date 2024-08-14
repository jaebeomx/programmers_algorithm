const fs = require("fs");

// const input = fs.readFileSync("./test.txt", "utf-8");
const input = fs.readFileSync("/dev/stdin", "utf-8");

let word = input.trim().split(" ");
if (word.length === 1 && word[0] === "") {
  console.log(0);
} else {
  console.log(word.length);
}
