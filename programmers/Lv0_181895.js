// [Programmers - 181895] 배열 만들기 3

function solution(arr, intervals) {
    var answer = [];
    var a = arr.slice(intervals[0][0],intervals[0][1]+1)
    var b = arr.slice(intervals[1][0],intervals[1][1]+1)
    answer = a.concat(b)
    return answer;
}

/* 
function solution(arr, intervals) {
    const [[a,b],[c,d]] = intervals;

    return [...arr.slice(a, b+1), ...arr.slice(c, d+1)];
}
*/