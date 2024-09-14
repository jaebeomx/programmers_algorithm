const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function getCount(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

for(let i = 0; i < input.length-1; i++) {
    console.log(getCount(input[i]))
}