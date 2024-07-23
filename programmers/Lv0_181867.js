// [Programmers - 181867] x 사이의 개수
function solution(myString) {
    var answer = [];
    var tmp=myString.split('x')
    for(let i=0;i<tmp.length;i++){
        answer.push(tmp[i].length)
    }
    return answer;
}

/* 
function solution(myString) {
    return myString.split('x').map(v => v.length);
}
*/
/* map을 잘 쓰자 */