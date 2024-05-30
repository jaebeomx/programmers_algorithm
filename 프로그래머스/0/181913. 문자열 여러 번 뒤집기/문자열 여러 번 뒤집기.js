function solution(my_string, queries) {
    my_string= my_string.split("");
    queries.forEach(([s,e])=>{
        let slice= my_string.slice(s,e+1).reverse();
        my_string.splice(s,e-s+1,...slice);
    })
    return my_string.join("");
}