# [Programmers - 120893] 대문자와 소문자

def solution(my_string):
    answer = ''
    for i in range(len(my_string)):
        if my_string[i].isupper():
            answer+=my_string[i].lower()
        else:
            answer+=my_string[i].upper()

    return answer

#   return my_string.swapcase()
'''
for i in my_string:
        if i.isupper():
            answer+=i.lower()
        else:
            answer+=i.upper()
'''