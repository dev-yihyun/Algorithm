// [Programmers - 181838] 날짜 비교하기

function solution(date1, date2) {
    var answer = 0;
    if(date1[0]<date2[0]){
        answer=1;
    }else if(date1[0]>date2[0]){
        answer=0;
    }else if(date1[1]<date2[1]){
        answer=1;
    }else if(date1[1]>date2[1]){
        answer=0;
    }else if(date1[2]<date2[2]){
        answer=1;
    }else{
        answer=0
    }
    
    return answer;
}

/* const solution = (date1, date2) => new Date(date1) < new Date(date2) ? 1 : 0 */