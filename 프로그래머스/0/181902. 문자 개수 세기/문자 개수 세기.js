// 26을 더해야함. 소문자로 넘어갈때는
function solution(my_string) {
    const alphaArr= new Array(52).fill(0);
    my_string.split("").forEach((item)=>{
        if(item===item.toLowerCase()){
            alphaArr[item.toUpperCase().charCodeAt()-65+26]++;
        }else if(item===item.toUpperCase()){
            alphaArr[item.charCodeAt()-65]++;
        }
    })
    return alphaArr;
}