// [Programmers - 181836] 그림 확대

function solution(picture, k) {
    var answer = [];
    // for (let i=0;i<picture.length;i++){
    for (let i of picture) {
        var char = "";
        for (let j of i) {
            char += j.repeat(k);
        }
        for (let count = 0; count < k; count++) {
            answer.push(char);
        }
    }
    return answer;
}
