function solution(sides) {
    let answer= [];
    const [small,big]= sides.sort((a,b)=>a-b);
    for(let i=big-small+1; i<=big; i++){
        answer.push(i);
    }
    for(let i=big+1;i<small+big;i++){
        answer.push(i);
    }
    answer= [...new Set(answer)];
    return answer.length;
}