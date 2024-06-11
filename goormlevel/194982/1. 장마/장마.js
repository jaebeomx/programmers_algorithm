// Run by Node.js
// 집은 1번부터 시작!
// 배수 시스템은 장마가 시작된 지 3의 배수가 되는 날마다 비가 내린 후 작동
// 작동 날짜를 기준으로 2일 이내에 비가 내린 위치에서만 작동 && 물의 높이 -1만큼 감소


const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let houseNumber= null;
	let houseHeight= null;
	let rainyDay= null;
	// 2차원 배열
	let rainyRange= [];
	let drainCount= 0;
	
	for await (const line of rl) {
		if(houseNumber==null && rainyDay==null){
			const info= line.split(" ").map(Number);
			houseNumber= info[0];
			rainyDay= info[1];
		}else if(houseHeight==null){
			houseHeight= line.split(" ").map(Number);
		}else if(rainyRange.length<rainyDay){
			rainyRange.push(line.split(" ").map(Number));
		}else{
			rl.close();
		}
	}
	
	rainyRange.forEach(([start, end], index)=>{
		for(let i=start-1; i<=end-1; i++){
			houseHeight[i]+=1;
		}
		drainCount++;
		if(drainCount%3==0){
			drainCount= 0;
			let arr= [];
			for(let j=index-2; j<=index; j++){
				for(let k= rainyRange[j][0]; k<=rainyRange[j][1]; k++){
					arr.push(k);
				}
			}
			let set= new Set(arr);
			[...set].forEach(item=>houseHeight[item-1]-=1);
		}
	})
	
	console.log(...houseHeight);
	
	process.exit();
})();