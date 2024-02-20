# [Programmers - 120864] 숨어있는 숫자의 덧셈 (2)

def solution(my_string):
    answer = 0
    alpha = [chr(c) for c in range(97,123)]
    my_string = my_string.lower()
    for i in range(len(alpha)):
        my_string= my_string.replace(alpha[i]," ")
    line = list(my_string.split())
    for i in range(len(line)):
        answer += int(line[i])
    return answer
'''
my_string	result
"aAb1B2cC34oOp"	37
"1a2b3c4d123Z"	133
'''

'''
def solution(my_string):
    s = ''.join(i if i.isdigit() else ' ' for i in my_string)
    return sum(int(i) for i in s.split())
'''