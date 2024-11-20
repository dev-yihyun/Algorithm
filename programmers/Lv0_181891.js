// [Programmers - 181891] 순서 바꾸기

function solution(num_list, n) {
    var answer = num_list.slice(n).concat( num_list.slice(0,n))

    return answer;
}

/* 
function solution(num_list, n) {
    num_list.push(...num_list.splice(0, n));
    return num_list
}
function solution(num_list, n) {
  num_list.unshift(...num_list.splice(n));
  return num_list;
}

*/