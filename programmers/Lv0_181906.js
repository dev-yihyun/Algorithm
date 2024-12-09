// [Programmers - 181906] 접두사인지 확인하기

function solution(my_string, is_prefix) {
    var answer = 0;
    if(my_string.startsWith(is_prefix)){
        answer = 1
    }
    //어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환
    return answer;
}

/* 
function solution(my_string, is_prefix) {
  return +my_string.startsWith(is_prefix);
}

function solution(my_string, is_prefix) {
    return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0
}
*/