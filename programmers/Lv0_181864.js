// [Programmers - 181864] 문자열 바꿔서 찾기

function solution(myString, pat) {
    var answer = myString.includes(pat.replaceAll('A','X').replaceAll('B','A').replaceAll('X','B'))?1:0;
    
    return answer;
}

/* const solution = (myString, pat) => [...myString].map(v => v === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0 */