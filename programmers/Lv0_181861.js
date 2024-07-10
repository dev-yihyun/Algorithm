// [Programmers - 181861] 배열의 원소만큼 추가하기

function solution(arr) {
    var answer = [];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i];j++){
            answer.push(arr[i])
        }
    }
    return answer;
}

/* 
function solution(arr) {
    return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}
*/