// [Programmers - 181871] 문자열이 몇 번 등장하는지 세기

function solution(myString, pat) {
    var answer = 0;
    const patLength = pat.length;
    console.log(patLength)
    for(let i = myString.length-1;i>=0;i--){
        const tmp = myString.slice(i,i+patLength);
        if(tmp === pat){
            answer++;
        }
    }
    return answer;
}

/* 
function solution(myString, pat) {
    const reg = new RegExp(`(?=${pat})`, "g")
    return myString.match(reg)?.length || 0;
}

function solution(myString, pat) {
    let count = 0;
    for (let i = 0; i <= myString.length - pat.length; i++) {
        if (myString.slice(i, i + pat.length) === pat) {
            count++;
        }
    }

    return count;
}
*/