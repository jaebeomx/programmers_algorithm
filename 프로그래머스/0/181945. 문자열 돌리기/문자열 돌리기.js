const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = null;

rl.on('line', function (line) {
    input= line;
    rl.close();
}).on('close',function(){
    input.split("").forEach(item=>console.log(item));
});