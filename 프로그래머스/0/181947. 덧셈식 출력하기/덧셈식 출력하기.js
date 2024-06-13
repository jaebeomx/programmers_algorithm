const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let left= null;
let right= null;

rl.on('line', function (line) {
    const info= line.split(" ").map(Number);
    left= info[0];
    right= info[1];
}).on('close', function () {
    console.log(`${left} + ${right} = ${left+right}`);
});