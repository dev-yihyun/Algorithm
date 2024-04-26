# [Programmers - 120911] 문자열 정렬하기 (2)

def solution(my_string):
    answer = "".join(sorted(my_string.lower()))
    return answer

'''
my_string	result
"Bcad"	"abcd"
"heLLo"	"ehllo"
"Python"	"hnopty"
'''