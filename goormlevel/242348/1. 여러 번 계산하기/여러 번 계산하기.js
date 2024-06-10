// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let lineCount= null;
	let count= 0;
	
	for await (const line of rl) {
		if(lineCount==null){
			lineCount= +line;
		}else{
			let [a, b]= line.split(" ");
			console.log((+a)+(+b));
			count++;
		}
		if(count==lineCount) rl.close();
	}
	
	process.exit();
})();
