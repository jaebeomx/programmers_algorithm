// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let num= null;
	let toNum= null;
	
	for await (const line of rl) {
		const info= line.split(" ");
		num= Number(info[0]);
		toNum= info[1];
		rl.close();
	}
	
	for(let i=2; i<=16; i++){
		if(num.toString(i).toUpperCase()==toNum){
			console.log(i);
			break;
		}
	}
	
	process.exit();
})();
