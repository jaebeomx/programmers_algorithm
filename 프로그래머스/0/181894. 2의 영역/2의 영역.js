function solution(arr) {
    let firstIndex= arr.findIndex(item=>item==2);
    let lastIndex;
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i]===2){
            lastIndex= i;
            break;
        }
    }
    
    if(firstIndex==-1){
        return [-1];
    }else if(firstIndex === lastIndex){
        return [2];
    }else{
        return arr.slice(firstIndex,lastIndex+1);
    }
}