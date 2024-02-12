# [Programmers - 120851] 숨어있는 숫자의 덧셈 (1)

import re
def solution(my_string):
    answer = 0
    my_string = re.sub('[a-zA-Z]','',my_string)
    li = list(my_string)
    for i in li:
        answer+=int(i)
    return answer
#   return sum(int(i) for i in my_string if i.isdigit())