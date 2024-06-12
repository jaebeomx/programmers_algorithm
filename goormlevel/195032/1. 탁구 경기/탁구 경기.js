// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let round= null;
	let roundCount= 0;
	let predict= [];
	let D= 0;
	let P= 0;
	
	for await (const line of rl) {
		if(round==null){
			round= Number(line);
		}else{
			predict.push(line);
			roundCount++;
		}
		if(roundCount==round)
			rl.close();
	}
	for(let i=0; i<predict.length; i++){
		if(predict[i]=="D"){
			D+=1;
		}else if(predict[i]=="P"){
			P+=1;
		}
		if(Math.abs(D-P)==2) break;
	}
	console.log(`${D}:${P}`)
	
	process.exit();
})();
