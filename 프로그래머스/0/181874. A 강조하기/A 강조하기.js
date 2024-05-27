function solution(myString) {
    return myString.split("").map((item) =>{
        if(item=="a"){
            return item.toUpperCase();
        }else if((item==item.toUpperCase())&&item!=="A"){
            return item.toLowerCase();
        }else{
            return item;
        }
    }).join("");
}