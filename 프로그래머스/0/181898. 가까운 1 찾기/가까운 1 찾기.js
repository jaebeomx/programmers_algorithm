function solution(arr, idx) {
    let result= -1;
    for(let i=idx; i<arr.length; i++){
        if(arr[i]==1){
            result= i;
            break;
        }
    }
    return result;
}