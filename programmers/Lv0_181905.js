// [Programmers - 181905] 문자열 뒤집기

function solution(my_string, s, e) {
    var answer = '';
    answer =my_string.slice(0,s) +[...my_string.slice(s,e+1)].reverse().join('')+my_string.slice(e+1)
    
    return answer;
}

/* 
function solution(my_string, s, e) {
    var answer = '';
    var str = my_string.substring(s,e+1);
    var newStr = str.split('').reverse().join('');

    answer = my_string.replace(str,newStr);
    return answer;
}
*/