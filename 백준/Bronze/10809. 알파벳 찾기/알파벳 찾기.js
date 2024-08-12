const fs = require("fs");

// const input = fs.readFileSync("./test.txt", "utf-8").split("");
const input = fs.readFileSync("/dev/stdin", "utf-8").split("");
const alphabet = "abcdefghijklmnopqrstuvwxyz";

const alphabetArr = alphabet.split("").map((char) => {
  return input.findIndex((item) => item === char);
});

console.log(alphabetArr.join(" "));
