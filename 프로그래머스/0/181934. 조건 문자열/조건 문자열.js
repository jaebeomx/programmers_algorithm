function solution(ineq, eq, n, m) {
    let op= ineq+eq;
    switch (op){
        case ">=":
            return n>=m?1:0;
        case "<=":
            return n<=m?1:0;
        case ">!":
            return n>m?1:0;
        case "<!":
            return n<m?1:0;
    }
}