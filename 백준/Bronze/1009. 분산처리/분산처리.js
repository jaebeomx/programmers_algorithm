 

const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const T = input.shift('') * 1;

input.map((v) => {
    const [a,b] = v.split(' ');
    let datas = 1;
    for(let i = 1; i <= b; i++) {
        datas = (datas * a) % 10;
    }
    console.log(datas === 0 ? 10 : datas);
});