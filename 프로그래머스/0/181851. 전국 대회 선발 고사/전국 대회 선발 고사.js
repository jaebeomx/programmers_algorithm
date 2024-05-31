function solution(rank, attendance) {
    let attendStudent= rank.filter((item, index)=> attendance[index]==true).sort((a,b)=>a-b);
    return (rank.findIndex(item=>item==attendStudent[0])*10000)+(rank.findIndex(item=>item==attendStudent[1])*100)+(rank.findIndex(item=>item==attendStudent[2]));
    
    
}