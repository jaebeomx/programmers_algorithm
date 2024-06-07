// 명예의 전당은 k명까지만 가능. 명예의전당 최하위 점수 발표
function solution(k, score) {
    let honor= [];
    let result= [];
    for(let i=0; i<score.length; i++){
        if(honor.length<k){
            honor.push(score[i]);
        }else{
            let idx= honor.findIndex(item => item==Math.min(...honor));
            if(honor[idx]<score[i]){
                honor.splice(idx,1);
                honor.push(score[i]);
            }
        }
        result.push(Math.min(...honor));
    }
    return result;
}