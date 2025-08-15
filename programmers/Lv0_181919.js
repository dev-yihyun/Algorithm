// [Programmers - 181919] 콜라츠 수열 만들기

function solution(n) {
    var answer = [];
    var x = n
    answer.push(x)
    while(x!=1){
        if(x%2==0){
            answer.push(x/2)
            x = x/2
        }
        else{
            answer.push(3*x+1)
            x = 3*x+1
        }
    }
    return answer;
}

/* 
function solution(n, arr = []) {
    arr.push(n)
    if (n === 1) return arr
    if (n % 2 === 0) return solution(n / 2, arr)
    return solution(3 * n + 1, arr)
}
*/