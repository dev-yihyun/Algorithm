# [Programmers - 120825] 문자 반복 출력하기
def solution(my_string, n):
    answer = ''
    for i in range(len(my_string)):
        for j in range(n):
            answer = answer + my_string[i]

    return answer
#    return ''.join(i*n for i in my_string)