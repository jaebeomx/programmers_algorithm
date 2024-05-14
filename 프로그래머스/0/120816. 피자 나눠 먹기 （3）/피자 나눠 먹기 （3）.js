function solution(slice, n) {
    if(n-slice<0){
        return 1;
    }
    let count= 0;
    count+=parseInt(n/slice);
    if(n%slice!=0) count+=1;
    
    return count;
}