// [Programmers - 181904] 세로 읽기

function solution(my_string, m, c) {
    var answer = '';
    for(let i =c-1;i<my_string.length;i+=m){
        answer+=my_string[i]
    }
    return answer;
}

/* 
function solution(my_string, m, c) {
    return [...my_string].filter((_, i) => i % m === c - 1).join('');
}
*/