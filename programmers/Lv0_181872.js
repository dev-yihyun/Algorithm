// [Programmers - 181872] 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기

function solution(myString, pat) {
    var answer = '';
    var ind = myString.lastIndexOf(pat)
    answer = myString.substr(0,ind+pat.length)
    return answer;
}

/* const solution = (str, pat) => str.substring(0, str.lastIndexOf(pat)) + pat */