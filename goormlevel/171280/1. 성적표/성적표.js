// Run by Node.js
// 과목 번호는 1번 과목부터 M번과목까지! (1번 인덱스부터 시작)
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let testCount= null;
	let classCount= null;
	let testNumberCount= 0;
	let arr= [];
	
	for await (const line of rl) {
		if(testCount==null && classCount==null){
			let info= line.split(" ").map(Number);
			testCount= info[0];
			classCount= info[1];
			for(let i=0; i<=classCount; i++){
				arr.push([0,0])
			}
		}else{
			const [classNo, score]= line.split(" ").map(Number);
			arr[classNo][0]+=1;
			arr[classNo][1]+=score;
			testNumberCount++;
		}
		if(testCount===testNumberCount) rl.close();
	}
	
	
	arr= arr.map(([testCount, sum])=>{
		if(testCount===0){
			return 0;
		}else{
			return sum/testCount;
		}
	})
	
	const max= Math.max(...arr);
	console.log(arr.findIndex(item=>item===max));
	
	process.exit();
})();
