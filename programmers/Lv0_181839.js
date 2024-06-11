// [Programmers - 181839] 주사위 게임 1

function solution(a, b) {
    var answer = 0;
    if(a%2===1&&b%2===1){
        answer=a*a+b*b
    }else if(a%2!==1&&b%2!==1){
        answer=Math.abs(a-b)
        
    }else{
        answer=2*(a+b)
    }
    return answer;
}