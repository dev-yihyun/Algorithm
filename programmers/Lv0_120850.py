# [Programmers - 120850] 문자열 정렬하기 (1)

def solution(my_string):
    answer = []
    for i in my_string:
        if i.islower():
            pass
        else:
            answer.append(int(i))
    answer = sorted(answer)
    return answer
#   return sorted([int(c) for c in my_string if c.isdigit()])