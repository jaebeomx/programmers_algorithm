function solution(progresses, speeds) {
    let answer= [];
    
    // 우선 progrss의 첫 번째 작업이 100이 될때까지 각 progress+=개발속도(100되면 stop)
    while(progresses.length){
        let count= 0;
        
        // 이 반복문을 빠져나오게 된다면 첫 번째 progress의 진도가 100인 상황
        while(progresses[0]!=100){
            progresses.forEach((item, index)=>{
                if(item+speeds[index]<100){
                    progresses[index]+=speeds[index];
                }else{
                    progresses[index]= 100;
                }
            })
        }
        
        // 진도가 100인 모든 작업들 순차적으로 다 빼기
        while(progresses[0]===100){
            progresses.shift();
            speeds.shift();
            count++;
        }
        
        answer.push(count);
    }
    
    return answer;
   
}