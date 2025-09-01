// [Programmers - 181925] 수 조작하기 2
function solution(numLog) {
    var answer = '';
    for(let i = 1;i<numLog.length;i++){
        switch(numLog[i]-numLog[i-1]){
            case 1:
                answer+='w'
                break;
            case -1:
                answer+="s"
                break;
                
            case 10:
                answer+="d"
                break;
                
            case -10:
                answer+="a"
                break;
                
        }
    }
    return answer;
}

/* 
function solution(numLog) {
    const convert = {
        '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
    };

    return numLog.slice(1).map((v, i) => {
        return convert[v - numLog[i]]
    }).join('')
}
*/