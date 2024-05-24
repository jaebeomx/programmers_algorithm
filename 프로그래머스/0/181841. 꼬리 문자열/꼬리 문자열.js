function solution(str_list, ex) {
    let newArr= str_list.filter((item)=>!item.includes(ex));
    return newArr.reduce((str, item)=>str+item, "");
}