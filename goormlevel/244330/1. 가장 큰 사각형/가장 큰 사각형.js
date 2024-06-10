// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin, output: process.stdout });
	let arr= [];
	let T= null;
	
	rl.on("line", (line)=>{
		if(T===null){
			T=parseInt(line);
		}else{
			const [width, height]= line.split(" ").map(item => Number(item));
			arr.push(width*height);
			
			if(arr.length===T){
				const maxArea= Math.max(...arr);
				console.log(maxArea);
				rl.close();
			}
		}
	});
	
	rl.on("close", ()=>{
		process.exit(0);
	})
})();
