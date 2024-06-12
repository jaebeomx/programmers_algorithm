// Run by Node.js
// 1분에 크기가 2배로 커지고 세포끼리 만나면 합체됨
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let needSize= null;
	
	for await (const line of rl) {
		needSize= Number(line);
		rl.close();
	}
	
	let answer= [];
	const bin= needSize.toString(2).split("").reverse();
	for(let i=0; i<=bin.length; i++){
		if(bin[i]=="1") answer.push(i);
	}
	console.log(answer.length);
	console.log(answer.join(" "));
	
	process.exit();
})();
