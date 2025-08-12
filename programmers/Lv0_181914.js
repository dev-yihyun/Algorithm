// [Programmers - 181914] 9로 나눈 나머지

function solution(number) {
    var answer = 0;
    var c = number+""
    var tmp=0
    for(let i = 0;i<c.length;i++){
        tmp+=Number(c[i])
    }
    answer = tmp%9
    return answer;
}

/* const solution=n=>BigInt(n)%9n */