// [Programmers - 181939] 더 크게 합치기

function solution(a, b) {
    var answer = a.toString()+b.toString() > b.toString()+a.toString()? Number(a.toString()+b.toString()):Number(b.toString()+a.toString() );

    return answer;
}

/* 
function solution(a, b) {
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}
*/