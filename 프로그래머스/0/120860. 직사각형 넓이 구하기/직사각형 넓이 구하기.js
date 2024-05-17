function solution(dots) {
    dots.sort();
    let xLength= Math.abs(dots[3][0]-dots[0][0]);
    let yLength= Math.abs(dots[3][1]-dots[0][1]);
    
    
    return xLength*yLength;
}