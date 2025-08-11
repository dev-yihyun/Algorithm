// [Programmers - 181912] 배열 만들기 5

function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i = 0;i<intStrs.length;i++){
        var tmp = parseInt(intStrs[i].slice(s,s+l))
        if(k<tmp){
            answer.push(tmp)
        }
    }
    return answer;
}