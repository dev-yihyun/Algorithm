# [Programmers - 120848] 팩토리얼

def solution(n):
    answer = 1
    for i in range(1, 11):
        answer *= i
        if answer == n:
            return i
        if answer > n:
            return i - 1

    return answer