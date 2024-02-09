# [Programmers - 120849] 모음 제거

def solution(my_string):
    answer = ''
    l = ['a', 'e', 'i', 'o', 'u']
    for i in l:
        my_string = my_string.replace(i,"")
    answer=my_string
    return answer
#   return "".join([i for i in my_string if not(i in "aeiou")])