function solution(str1, str2) {
    str1= str1.split("");
    str2= str2.split("");
    
    let answer= "";
    
    for(let i=0; i<str1.length; i++){
        answer+=str1[i];
        answer+=str2[i];
    }
    return answer;
}