// [Programmers - 181830] 정사각형으로 만들기
function solution(arr) {
    var answer = [...arr];
    if (arr.length > arr[0].length) {
        for (var i = 0; i < arr.length; i++) {
            while (arr[i].length < arr.length) {
                arr[i].push(0);
            }
        }
    } else if (arr.length < arr[0].length) {
        for (var i = arr.length; i < arr[0].length; i++) {
            var tmp = new Array(arr[0].length).fill(0);
            answer.push(tmp);
        }
    } else {
        answer = arr;
    }
    return answer;
}
