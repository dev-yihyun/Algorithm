// [Programmers - 181922] 수열과 구간 쿼리 4

function solution(arr, queries) {
    var answer = [];
    
    for(let j = 0;j<queries.length;j++){
        var s = queries[j][0];
        var e = queries[j][1];
        var k = queries[j][2];
        for(let i = s;i<=e;i++){
            if(i%k===0){
                arr[i]+=1
            }
            
        }
    }
    answer = arr
    return answer;
}