// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let countLine= 0;
	let money= 0;
	
	for await (const line of rl) {
		let trade= line.trim().split(" ");
		let [category, amount]= trade;
		if(category=="in"){
			money+=(+amount);
		}else if(category=="out"){
			money-=(+amount);
		}
		if(money<0){
			console.log("fail");
			process.exit();
		}
		
		if(countLine==5) rl.close();
	}
	console.log("success");
	process.exit();
})();
