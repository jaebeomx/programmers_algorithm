function solution(spell, dic) {
    spell= spell.sort().join("");
    return dic.some((item)=>[...item].sort().toString()===[...spell].sort().toString())?1:2;
} 