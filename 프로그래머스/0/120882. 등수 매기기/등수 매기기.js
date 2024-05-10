function solution(score) {
    let sumArr= score.map(v=>v[0]+v[1]);
    let copy= [...sumArr];
    
    // 내림차순 정렬
    let sortedSumArr= copy.sort((a,b)=>b-a);
    let result= sumArr.map((v)=>(sortedSumArr.indexOf(v)+1));
    
    return result;
}