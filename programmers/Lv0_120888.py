# [Programmers - 120888] 중복된 문자 제거

def solution(my_string):
    answer = ''
    line = []
    for i in range(len(my_string)):
        if line.count(my_string[i])==0:
            line.append(my_string[i])
    answer = ''.join(line)
    return answer
#   return ''.join(dict.fromkeys(my_string))
'''
def solution(my_string):
    answer = ''
    for i in my_string:
        if i not in answer:
            answer+=i
    return answer

'''