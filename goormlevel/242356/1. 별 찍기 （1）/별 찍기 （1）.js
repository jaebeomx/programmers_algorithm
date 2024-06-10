// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let starLine= 0;
	
	for await (const line of rl) {
		starLine= +line;
		for(let i=1; i<=starLine; i++){
			let str= "";
			for(let j=1; j<=i; j++){
				str+="*";
			}
			console.log(str);
		}
		rl.close();
	}
	
	process.exit();
})();
