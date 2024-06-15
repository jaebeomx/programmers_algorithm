const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input= null;

rl.on('line', function (line) {
    input= line;
}).on('close',function(){
    console.log(input);
});