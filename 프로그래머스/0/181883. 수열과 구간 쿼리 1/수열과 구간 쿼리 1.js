function solution(arr, queries) {
    queries.forEach((item)=>{
        for(let i=item[0]; i<=item[1]; i++){
            arr[i]+=1;
        }
    })
    return arr;
}