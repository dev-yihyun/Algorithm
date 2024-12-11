// [Programmers - 181908] 접미사인지 확인하기

function solution(my_string, is_suffix) {
    var answer = 0;
    for(let i = 0;i<my_string.length;i++){
        if(my_string.slice(i) === is_suffix){
            answer = 1
            break
        }else{answer = 0}
    }
    return answer;
}

/* const solution = (str, suff) => str.endsWith(suff) ? 1 : 0 */