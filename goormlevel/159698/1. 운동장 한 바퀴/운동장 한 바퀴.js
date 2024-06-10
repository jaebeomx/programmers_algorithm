// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let rectWidth= 0;
	let rectHalfHeight= 0;
	let lineCount= 0;
	let sum= 0;
	const PI= 3.141592;
	
	// width 먼저, 그리고 원 반지름
	for await (const line of rl) {
		if(lineCount==0){
			rectWidth= +line;
			lineCount++;
		}else if(lineCount==1){
			rectHalfHeight= +line;
			lineCount++;
		}else if(lineCount==2) rl.close();
	}
	sum= (2*rectWidth)+(2*rectHalfHeight*PI);
	
	console.log(sum.toFixed(6));
	process.exit();
})();
