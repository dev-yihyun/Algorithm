// [Programmers - 181897] 리스트 자르기

function solution(n, slicer, num_list) {
    var answer = [];
    var a = slicer[0]
    var b = slicer[1]
    var c = slicer[2]
    switch(n){
        case 1:
            answer = num_list.slice(0,b+1)
            break;
        case 2:
            answer = num_list.slice(a)
            break;
        case 3:
            answer = num_list.slice(a,b+1)
            break;
        case 4:
            answer = num_list.slice(a,b+1,c).filter((_,i)=>i%c===0)
            break;
    }
    return answer;
}