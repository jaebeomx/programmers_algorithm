const fs = require("fs");

const [time, cookingTime] = fs.readFileSync("/dev/stdin", "utf-8").split("\n");
let [hour, minute] = time.trim().split(" ").map(Number);

minute += Number(cookingTime);
hour = (hour + parseInt(minute / 60)) % 24;
minute %= 60;

console.log(`${hour} ${minute}`);
