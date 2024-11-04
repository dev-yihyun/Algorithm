// [Programmers - 181883] 수열과 구간 쿼리 1
function solution(arr, queries) {
    var answer = [];
    var s=0,e=0;
    for(let i=0;i<queries.length;i++){
        s = queries[i][0]
        e = queries[i][1]
        for(let j=s;j<=e;j++){
            arr[j]++
        }
    }
    answer = arr
    return answer;
}