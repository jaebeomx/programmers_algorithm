function solution(strings, n) {
    return strings.sort((a,b)=>{
        const result= a[n].localeCompare(b[n]);
        if(result===0){
            return a.localeCompare(b);
        }else{
            return result;
        }
    })
}