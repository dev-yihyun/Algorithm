// [Programmers - 181924] 수열과 구간 쿼리 3

function solution(arr, queries) {
    var answer = arr;
    
    for (let i = 0;i<queries.length;i++){
        var a = queries[i][0];
        var b = queries[i][1];
        
        var tmp = answer[a];
        answer[a] = answer[b];
        answer[b]=tmp;
        
        
    }
    
    return answer;
}

/* 
function solution(arr, queries) {
    queries.forEach( ([a,b]) => {
        [arr[a],arr[b]] = [arr[b],arr[a]];
    })
    return arr;
}
*/