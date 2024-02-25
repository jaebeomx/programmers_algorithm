function solution(my_string) {
    let noDuplicate= [];
    my_string.split("").forEach((item)=>{
        if(noDuplicate.includes(item)){
            return;
        }
        noDuplicate.push(item);
    })
    return noDuplicate.join("");
}