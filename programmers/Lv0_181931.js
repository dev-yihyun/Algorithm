// [Programmers - 181931] 등차수열의 특정한 항만 더하기

function solution(a, d, included) {
    var answer = 0;
    var n = included.length
    var sum=a
    for(let i = 0;i<n;i++){
        if (included[i] == true){
            answer += sum
            console.log(sum)
        }
        sum = sum+d
    }
    return answer;
}

/* 
function solution(a, d, included) {
    return included.reduce((acc, flag, i) => {
        return flag ? acc + a + d * i : acc
    }, 0)
}
*/