function solution(arr, flag) {
    const X= [];
    arr.forEach((item, index)=>{
        if(flag[index]){
            for(let i=0; i<item*2; i++){
                X.push(item);
            }
        }else{
            for(let i=0; i<item; i++){
                X.pop();
            }
        }
    })
    return X;
}