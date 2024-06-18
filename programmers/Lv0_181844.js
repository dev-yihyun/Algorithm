// [Programmers - 181844] 배열의 원소 삭제하기

function solution(arr, delete_list) {
    var answer = arr.filter(a=>!delete_list.includes(a));
    return answer;
}

/* const solution = (arr, dels) => arr.filter((el) => !dels.includes(el)) */