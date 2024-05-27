function solution(intStrs, k, s, l) {
    return intStrs.map((item, index)=>{
        return +item.slice(s,s+l);
    }).filter((item)=>item>k);
}