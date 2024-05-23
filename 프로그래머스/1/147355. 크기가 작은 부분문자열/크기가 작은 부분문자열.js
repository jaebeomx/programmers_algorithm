function solution(t, p) {
    let count= 0;
    t= t.split("");
    for(let i=0; i<(t.length-p.length)+1; i++){
        if(+t.slice(i,i+p.length).join("")<=(+p)){
            count+=1;
        }
    }
    return count;
}