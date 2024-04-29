# [Programmers - 120912] 7의 개수

def solution(array):
    answer = 0
    for i in range(len(array)):
        a = list(str(array[i]))
        answer += a.count('7')
    return answer

'''
array	result
[7, 77, 17]	4
[10, 29]	0
'''
#    return str(array).count('7')
