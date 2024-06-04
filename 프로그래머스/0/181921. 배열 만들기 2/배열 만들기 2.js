function solution(l, r) {
    let arr= [];
    for(let i=l; i<=r; i++){
        arr.push(i);
    }
    let filterArr= arr.filter((item)=>{
        let split= String(item).split("");
        for(let i=0; i<split.length; i++){
            if(split[i]=="0" || split[i]=="5"){
                continue;
            }else{
                return false;
            }
        }
        return true;
    })
    return filterArr.length?filterArr:[-1];
}