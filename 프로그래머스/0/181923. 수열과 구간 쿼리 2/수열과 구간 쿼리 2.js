function solution(arr, queries) {
    return queries.map(([s,e,k])=>{
        let newArr= arr.slice(s,e+1).filter(item=>item>k);
        if(!newArr.length) return -1;
        else return Math.min(...newArr);
    })
}