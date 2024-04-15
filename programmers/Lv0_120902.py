# [Programmers - 120902] 문자열 계산하기
def solution(my_string):
    answer = 0
    line = list(my_string.split(' '))
    answer = int(line[0])
    for i in range(1,len(line)):
        if line[i] == '-':
            answer -= int(line[i + 1])
        elif line[i] == '+':
            answer += int(line[i + 1])
    return answer
#     return sum(int(i) for i in my_string.replace(' - ', ' + -').split(' + '))
#    solution=eval
#   간단하게 문제를 해결하기 위해 eval을 사용했지만 실제 서비스에서는 심각한 보안취약점이 발생할 수 있으니까 혹시라도 초보분들은 절대 사용하셔서는 안됩니다.