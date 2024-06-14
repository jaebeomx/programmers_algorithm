const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count= null;

rl.on('line', function (line) {
    count= Number(line);
    rl.close();
}).on('close', function () {
    for(let i=0; i<count; i++){
        let answer= "";
        for(let j=0; j<=i; j++){
            answer+="*";
        }
        console.log(answer);
    }
    process.exit();
});