// [Programmers - 181884] n보다 커질 때까지 더하기

function solution(numbers, n) {
    var answer = 0;
    for(let i=0;i<numbers.length;i++){
        if(answer > n){
            break;
        }
        answer+=numbers[i]
    }
    return answer;
}

/* 
function solution(numbers, n) {
    var answer = 0;
    let i = 0;
    while(answer <= n) {
        answer += numbers[i++]
    }
    return answer;
}

function solution(numbers, n) {
    return numbers.reduce((a,c,i,t)=>(a<=n)?a+c:a)
}
*/