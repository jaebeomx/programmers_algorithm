function solution(n, words) {
    // 탈락자 번호= n으로 나눈 나머지 + 1 
    // 몇 번째 차례= n으로 나눈 정수 몫 + 1
    let wordHistory= [];
    let isValid= true;
    // 이전 단어의 끝 문자로 시작하지 않거나, 이미 존재하는 단어를 또 말하면 아웃
    for(let i=0; i<words.length; i++){
        if(wordHistory.includes(words[i])) isValid= false;
        if(wordHistory.length>0){
            let lastWord= wordHistory[wordHistory.length-1];
            if(!(words[i].startsWith(lastWord[lastWord.length-1]))){
                isValid= false;
            }
        }
        if(isValid){
            wordHistory.push(words[i]);
        }else{
            return [i%n+1, Math.floor(i/n)+1];
        }
    }

    return [0,0];
}