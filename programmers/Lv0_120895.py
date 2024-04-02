# [Programmers - 120895] 인덱스 바꾸기


def solution(my_string, num1, num2):
    answer = ''
    line = list(my_string)
    tmp = line[num1]
    line[num1] = line[num2]
    line[num2] = tmp
    answer = "".join(line)
    return answer

'''
def solution(my_string, num1, num2):
    s = list(my_string)
    s[num1],s[num2] = s[num2],s[num1]
    return ''.join(s)
'''