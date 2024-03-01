function solution(emergency) {
    const copy= [...emergency];
    const answer= [];
    emergency.sort((a,b)=>a-b).reverse();
    console.log("emergency:", emergency);
    
    copy.forEach((item)=>{
        let idx= emergency.findIndex((element)=>element===item)+1;
        answer.push(idx);
    })
    return answer;
}