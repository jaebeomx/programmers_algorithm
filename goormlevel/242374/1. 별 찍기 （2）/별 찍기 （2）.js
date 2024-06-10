// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let lineCount= 0;
	
	for await (const line of rl) {
		lineCount= +line;
		for(let i=lineCount; i>=1; i--){
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
