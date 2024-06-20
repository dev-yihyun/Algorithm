// [Programmers - 181847] 0 떼기

function solution(n_str) {
    var answer = n_str.replace(/^0+/,"");
    return answer;
}