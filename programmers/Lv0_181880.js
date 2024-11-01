// [Programmers - 181880] 1로 만들기
function solution(num_list) {
    var answer = 0;
    var arrLength = num_list.length;
    for(var i=0;i<arrLength;i++){
        while(num_list[i]!==1){
            if(num_list[i]%2==0){
                num_list[i]=num_list[i]/2;
            }else{
                num_list[i]=(num_list[i]-1)/2;
            }
                answer++;
        }
    }
    return answer;
}

/* 
function solution(num_list) {
    return num_list.map(v => v.toString(2).length - 1).reduce((a, c) => a + c);
}
*/