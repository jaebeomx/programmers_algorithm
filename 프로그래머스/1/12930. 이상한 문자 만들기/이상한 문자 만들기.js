function solution(s) {
    s= s.split(" ");
    let filter= s.map((word)=>{
        answer= "";
        for(let i=0; i<word.length; i++){
            if(i%2==0){
                answer+=word[i].toUpperCase();
            }else{
                answer+=word[i].toLowerCase();
            }
        }
        return answer;
    })
    return filter.join(" ");
}