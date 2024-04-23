# [Programmers - 120908] 문자열안에 문자열

def solution(str1, str2):
    answer = 0
    if str1.count(str2):
        answer=1
    else:
        answer=2
    return answer