// [Programmers - 181910] 문자열의 뒤의 n글자

function solution(my_string, n) {
    var answer = '';
    answer = my_string.slice(my_string.length-n,my_string.length)
    return answer;
}

/* 
function solution(my_string, n) {
    var answer = my_string.slice(-1*n);
    return answer;
}

function solution(my_string, n) {
    return my_string.substring(my_string.length - n);
}

function solution(my_string, n) {
    return my_string.slice(-n)
}
*/