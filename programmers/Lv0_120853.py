# [Programmers - 120853] 컨트롤 제트

def solution(s):
    answer = 0
    a = s.split(" ")
    line = list(a)

    tmp = 0
    for i in range(len(line)):
        if line[i] == 'Z':
            answer = answer - tmp
        else:
            answer = answer + int(line[i])
            tmp = int(line[i])
    return answer
'''
def solution(s):
    answer = 0
    for i in range(len(s := s.split(" "))):
        answer += int(s[i]) if s[i] != "Z" else -int(s[i-1])
    return answer
'''