// [Programmers - 181873] 특정한 문자를 대문자로 바꾸기

function solution(my_string, alp) {
    var answer = '';
    answer = my_string.replaceAll(alp,alp.toUpperCase());
    //(new RegExp(alp,'g'),alp.toUpperCase())
    return answer;
}

/* const solution=(s,a)=>s.replaceAll(a,a.toUpperCase()) */