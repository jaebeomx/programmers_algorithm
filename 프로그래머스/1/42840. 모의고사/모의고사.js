function solution(answers) {
    const patterns= [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    const scores= new Array(patterns.length).fill(0);
    answers.forEach((answer, idx)=>{
        patterns.forEach((pattern, j)=>{
            if(answer===pattern[idx%pattern.length]){
                scores[j]++;
            }
        })
    })
    
    const maxScore= Math.max(...scores);
    const result= [];
    scores.forEach((score, idx)=>{
        if(score===maxScore){
            result.push(idx+1);
        }
    })
    
    return result;
}