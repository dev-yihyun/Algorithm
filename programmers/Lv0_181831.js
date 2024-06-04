// [Programmers - 181831] 특별한 이차원 배열 2
function solution(arr) {
    var answer = 1;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]===arr[j][i]){
                continue;
            }
            else{
                return 0;
            }
        }
    }
    return answer;
}

/* 
function solution(arr) {
    return arr.every((r, i) => r.every((_, j) => arr[i][j] === arr[j][i])) ? 1 : 0;
}
*/