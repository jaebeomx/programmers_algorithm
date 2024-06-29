function solution(k, tangerine) {
    let count= 0;
    let map= new Map();
    for(const size of tangerine){
        map.set(size, (map.get(size)||0)+1);
    }
    // 크기별 갯수 내림차순
    let arr= [...map].sort((a,b)=>b[1]-a[1]);
    
    for(const [size, number] of arr){
        if(number>=k){
            count++;
            break;
        }else{
            k-=number;
            count++;
        }
    }
    
    return count;
}