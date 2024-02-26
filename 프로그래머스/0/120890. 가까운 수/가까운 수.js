function solution(array, n) {
    let closer_num= array[0];
    let min_abs= Math.abs(n-array[0]);
    
    for(let i=1;i<array.length;i++){
        if(Math.abs(n-array[i])<min_abs){
            min_abs= Math.abs(n-array[i]);
            closer_num= array[i];
        }else if(Math.abs(n-array[i])==min_abs){
            closer_num= closer_num<array[i]?closer_num:array[i];
        }
    }
    return closer_num;
}