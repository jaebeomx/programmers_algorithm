function solution(arr) {
    let i=0;
    
    while(1){
        if(arr.length <= Math.pow(2,i)){
            break;
        }else{
            i++;
        }
    }
    
    let addCount= Math.pow(2,i)-arr.length;
    
    for(let i=1; i<=addCount; i++){
        arr.push(0);
    }
    
    return arr;
}