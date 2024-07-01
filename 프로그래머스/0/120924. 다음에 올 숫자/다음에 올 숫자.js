function solution(common) {
    // 등차수열이라고 가정. 만약 등차수열 조건에 어긋나면 등비수열
    let rule= "plus";
    let diff= common[1]-common[0];
    for(let i=0; i<common.length-1; i++){
        if(common[i+1]-common[i]!==diff){
            rule= "multiple"
            break;
        }
    }
    if(rule==="plus"){
        return common[common.length-1]+=diff;
    }else if(rule==="multiple"){
        diff= common[1]/common[0];
        return common[common.length-1]*diff;
    }
}