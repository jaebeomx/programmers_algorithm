// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let category= null;
	let budget= 0;
	let lineCount= 0;
	
	for await (const line of rl) {
		if(category==null){
			const info= line.trim().split(" ");
			category= +info[0];
			budget= +info[1];
		}else{
			let [price, count]= line.trim().split(" ");
			budget-=(+price)*(+count);
		}
		lineCount++;
		if(budget<0){
			console.log("No");
			rl.close();
			process.exit();
		}
		if(lineCount==category) rl.close();
	}
	console.log(budget);
	process.exit();
})();
