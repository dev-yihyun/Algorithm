// [Programmers - 181832] 정수를 나선형으로 배치하기
function solution(n) {
    if (n === 1) {
        return [[1]];
    }
    var answer = Array.from({ length: n }, () => Array(n).fill(0));
    var x = 0;
    var y = 0;
    var dir = "right";

    for (let i = 0; i < n * n; i++) {
        answer[x][y] = i + 1;

        if (dir === "right") {
            y += 1;
            //맨 끝에 도달 or 가려는 곳에 이미 값이 있다면 방향 전환
            if (y === n - 1 || answer[x][y + 1] !== 0) {
                dir = "down";
            }
        } else if (dir === "down") {
            x += 1;
            if (x === n - 1 || answer[x + 1][y] !== 0) {
                dir = "left";
            }
        } else if (dir === "left") {
            y -= 1;
            if (y === 0 || answer[x][y - 1] !== 0) {
                dir = "up";
            }
        } else if (dir === "up") {
            x -= 1;
            if (x === 0 || answer[x - 1][y] !== 0) {
                dir = "right";
            }
        }
    }
    return answer;
}
