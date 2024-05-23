function solution(my_strings, parts) {
    let answer= "";
    
    my_strings.forEach((item, index)=>{
        answer+=item.split("").slice(parts[index][0],parts[index][1]+1).join("");
    })
    return answer;
}