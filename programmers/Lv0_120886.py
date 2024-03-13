# [Programmers - 120886] A로 B 만들기

def solution(before, after):
    answer = 0
    b = sorted(before)
    a = sorted(after)

    if a == b:
        answer = 1
    else:
        answer = 0

    return answer