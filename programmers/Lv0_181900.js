// [Programmers - 181900] 글자 지우기

function solution(my_string, indices) {
    var answer = '';
    var ms = my_string.split("")
    for(let i = 0;i<indices.length;i++){
        delete ms[indices[i]]
    }
    answer = ms.join('')
    return answer
}

/* 
function solution(m, a) {
    var answer = '';

    for(let i = 0; i<m.length; i++){
        if(!a.includes(i)){
            answer += m[i]
        }
    }

    return answer;
}
*/