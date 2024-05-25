function solution(myString, pat) {
    myString= myString.replaceAll("A","T");
    myString= myString.replaceAll("B","A");
    myString= myString.replaceAll("T","B");
    
    return myString.includes(pat)?1:0;
}