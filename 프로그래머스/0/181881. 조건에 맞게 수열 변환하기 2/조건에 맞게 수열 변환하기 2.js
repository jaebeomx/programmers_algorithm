function solution(arr) {
    let idx= 0;
    let beforeArr= [...arr];
    while(1){
        let afterArr= beforeArr.map((item)=>{
            if(item>=50 && item%2==0){
                return item/2;
            }else if(item<50 && item%2==1){
                return (item*2)+1;
            }else{
                return item;
            }
        })
        
        if(JSON.stringify(beforeArr)===JSON.stringify(afterArr)){
            return idx;
        }else{
            idx++;
            beforeArr= [...afterArr];
        }
    }
}