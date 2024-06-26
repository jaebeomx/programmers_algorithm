// "a".charCodeAt() = 97
// "z".charCodeAt() = 122
// "A".charCodeAt() = 65
// "Z".charCodeAt() = 90
// z나 Z 이상으로 넘어가면 -26 해주면 될 것 같음
function solution(s, n) {
    return s.split("").map((item)=>{
        const utf= item.charCodeAt()+n;
        
        if(item===" ") return item;
        if(item===item.toUpperCase()){
            // 대문자인 경우
            return utf>90?String.fromCharCode(utf-26):String.fromCharCode(utf);
        }else if(item===item.toLowerCase()){
            // 소문자인 경우
            return utf>122?String.fromCharCode(utf-26):String.fromCharCode(utf);
        }
    }).join("");
}