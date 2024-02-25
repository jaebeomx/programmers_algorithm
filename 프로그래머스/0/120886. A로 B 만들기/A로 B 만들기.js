function solution(before, after) {
    let arr_before= Array.from(before);
    let arr_after= Array.from(after);
    arr_after.forEach((item)=>{
        if(arr_before.includes(item)){
            let index= arr_before.findIndex((x)=>x==item);
            arr_before.splice(index, 1);
        }
    })
    return arr_before.length==0?1:0;
}