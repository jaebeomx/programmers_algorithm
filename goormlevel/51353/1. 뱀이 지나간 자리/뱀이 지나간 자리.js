// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let width= null;
	let height= null;
	let arr= [];
	let direction= "right";
	
	for await (const line of rl) {
		const info= line.split(" ").map(Number);
		height= info[0];
		width= info[1];
		rl.close();
	}
	
	// 배열 초기화
	for(let i=0; i<height; i++){
		let tempArr= [];
		for(let j=0; j<width; j++){
			tempArr.push(".");
		}
		arr.push(tempArr);
	}
	
	
	for(let i=0; i<height; i+=2){
		for(let j=0; j<width; j++){
			arr[i][j]= "#";
		}
		if(direction=="right" && i+1<=height-1){
			arr[i+1][width-1]= "#";
			direction="left";
		}else if(direction=="left" && i+1<=height-1){
			arr[i+1][0]= "#";
			direction="right";
		}
	}
	
	for(item of arr){
		console.log(item.join(""));
	}
	
	process.exit();
})();
