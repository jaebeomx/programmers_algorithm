function solution(myStr) {
    let arr= [];
    myStr.split(/[abc]/).forEach((item)=>{
        if(!item.length==0){
            arr.push(item);
        }
    })
    return arr.length?arr:["EMPTY"];
}