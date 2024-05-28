function solution(q, r, code) {
    return code.split("").map((item, index)=>{
        if(index%q==r){
            return item;
        }
    }).join("");
}