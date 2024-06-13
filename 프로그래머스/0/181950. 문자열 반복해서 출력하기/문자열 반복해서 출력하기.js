const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let str= null;
let count= null;

rl.on('line', function (line) {
    const info= line.split(" ");
    str= info[0];
    count= Number(info[1]);
}).on('close', function () {
    console.log(str.repeat(count));
});