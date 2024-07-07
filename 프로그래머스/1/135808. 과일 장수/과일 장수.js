function solution(k, m, score) {
    // 1점부터 k점 까지의 사과가 있음.
    // 한 상자에 담을 사과 갯수: m
    // 담긴 사과 중 가장 낮은 점수 p * m = 사과 한상자 가격
    // 과일장수의 최대 이익 계산 (상자단위 판매)
    // 오름차순 정렬
    score.sort((a,b)=>b-a);
    let profit= 0;
    let count= 0;
    let basket= [];
    
    for(let i=0; i<score.length; i++){
        basket.push(score[i]);
        count++;
        if(count===m){
            profit+=Math.min(...basket)*m;
            basket.length= 0;
            count= 0;
        }
    }
    
    return profit;
}