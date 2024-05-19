function solution(s) {
    let newArr= s.split("");
    let CapArr= newArr.filter((item)=>item==item.toUpperCase());
    let nonCapArr= newArr.filter((item)=>item==item.toLowerCase());
    
    return nonCapArr.sort().reverse().join("")+CapArr.sort().reverse().join("");
}