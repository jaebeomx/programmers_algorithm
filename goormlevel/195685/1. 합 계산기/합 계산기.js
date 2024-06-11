const readline = require('readline');

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let count= null;
let lineCount= 0;
let sum= 0;

rl.on('line', (line) => {
	if(count==null){
		count= line;
	}else{
		const calc= line.split(" ");
		switch(calc[1]){
			case "+":
				sum+=(+calc[0])+(+calc[2]);
				break;
			case "-":
				sum+=(+calc[0])-(+calc[2]);
				break;
			case "/":
				sum+=Math.floor((+calc[0])/(+calc[2]));
				break;
			case "*":
				sum+=(+calc[0])*(+calc[2]);
				break;
		}
		lineCount++;
	}
	if(lineCount==count) rl.close();
});

rl.on('close', () => {
	console.log(sum);
	process.exit();
})