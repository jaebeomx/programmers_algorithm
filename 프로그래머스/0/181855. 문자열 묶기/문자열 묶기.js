function solution(strArr) {
    let count= {};
    strArr= strArr.map(item=> item.length);
    strArr.forEach((item)=>{
        if(count[item]){
            count[item]++;
        }else{
            count[item]= 1;
        }
    })
    return Object.values(count).sort((a,b)=>b-a)[0];
}