function solution(myString, pat) {
    for(let i=myString.length; i>=0; i--){
        if(myString.slice(0,i).endsWith(pat)){
            return myString.slice(0,i);
        }
    }
}