function solution(rsp) {
    let answer= "";
    for(let i of rsp){
        if(i=="0"){
            answer+=5;
        }
        if(i=="2"){
            answer+=0;
        }
        if(i=="5"){
            answer+=2;
        }
    }
  return answer;
}