const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input= null;

rl.on('line', function (line) {
    input= line;
}).on('close',function(){
    let toggle= input.split("").map(item=>{
        if(item===item.toUpperCase()){
            return item.toLowerCase();
        }else{
            return item.toUpperCase();
        }
    })
    console.log(toggle.join(""));
});