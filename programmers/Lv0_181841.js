// [Programmers - 181841] 꼬리 문자열

function solution(str_list, ex) {
    var answer = '';
    for(let i=0;i<str_list.length;i++){
        if(str_list[i].includes(ex)){
            continue;
        }
        else{
            answer+=str_list[i]
        }
    }
    return answer;
}

/* 
2
const solution = (str_list, ex) => str_list.filter(v => !v.includes(ex)).join('') */