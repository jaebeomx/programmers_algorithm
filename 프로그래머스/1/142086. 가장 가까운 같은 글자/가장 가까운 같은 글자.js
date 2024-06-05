function solution(s) {
    let itemArr= [];
    let answer= [];
    for(let i=0; i<s.length; i++){
        if(!itemArr.includes(s[i])){
            answer.push(-1);
            itemArr.push(s[i]);
        }else{
            let slice= s.slice(0,i);
            // s[i]의 마지막 인덱스값 찾고 현재 내 인덱스와의 차이를 result에
            for(let j=slice.length-1; j>=0; j--){
                if(slice[j]==s[i]){
                    answer.push(i-j);
                    break;
                }
            }
        }
    }
    return answer;
}