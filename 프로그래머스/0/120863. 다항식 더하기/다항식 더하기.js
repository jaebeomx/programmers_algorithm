function solution(polynomial) {
    let x = 0;
    let con = 0;
    
    let arr = polynomial.split(" + ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("x")) {
            let split = arr[i].split("x");
            if (split[0] === "") {
                // "x"인 경우
                x += 1;
            } else {
                // "3x"처럼 계수가 있는 경우
                x += parseInt(split[0], 10);
            }
        } else {
            con += parseInt(arr[i], 10);
        }
    }
    
    let result = [];
    
    if (x > 0) {
        if (x === 1) {
            result.push("x");
        } else {
            result.push(x + "x");
        }
    }
    if (con > 0) {
        result.push(con.toString());
    }
    
    return result.join(" + ");
}
