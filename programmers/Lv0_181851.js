// [Programmers - 181851] 전국 대회 선발 고사
function solution(rank, attendance) {
    var answer = 0;
    var a = 0,
        b = 0,
        c = 0;
    var arr = [];
    for (let i = 1; i <= rank.length; i++) {
        if (attendance[rank.indexOf(i)]) {
            arr.push(rank.indexOf(i));
        }
        if (arr.length === 3) break;
    }
    answer = 10000 * arr[0] + 100 * arr[1] + arr[2];
    return answer;
}

/*
function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => [r, i])
    .filter(([_, i]) => attendance[i])
    .sort(([a], [b]) => a - b);
  return 10000 * a[1] + 100 * b[1] + c[1];
}
*/
