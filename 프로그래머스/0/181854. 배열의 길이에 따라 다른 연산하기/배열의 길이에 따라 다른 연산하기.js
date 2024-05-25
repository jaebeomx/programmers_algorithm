function solution(arr, n) {
    return arr.map((item, index)=>{
        if(arr.length%2==0){
            if(index%2==1){
                return item+n;
            }else{
                return item;
            }
        }else{
            if(index%2==0){
                return item+n;
            }else{
                return item;
            }
        }
    })
}