function solution(arr) {
    // arr로 주어지는 숫자들 중 가장 큰 값을 공통 기준으로 두기
    let commonNumber= Math.max(...arr);
    
    // while문 안에서 idx를 commonNumber로 지정하고, arr의 각 숫자들을 idx로 나눈 나머지가 0이 아니라면 배수가 아님
    // 그럴때마다 idx에 commonNumber를 더해서 조건 검사
    let idx= commonNumber;
    while(1){
        let find= true;
        for(let num of arr){
            if(idx%num!==0){
                find= false;
                idx+=commonNumber;
                break;
            }
        }
        if(find) break;
    }
    return idx;
}