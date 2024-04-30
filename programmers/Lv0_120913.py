# [Programmers - 120913] 잘라서 배열로 저장하기
def solution(my_str, n):
    answer = []
    #my_str = list(my_str)
    i=0
    while i!=len(my_str):
        if i >=len(my_str):
            break
        c=''
        c=my_str[i:n+i]
        answer.append(c)
        i=i+n
    return answer
#   return [my_str[i: i + n] for i in range(0, len(my_str), n)]
'''
def solution(my_str, n):
    answer = []
    for i in range(0, len(my_str), n):
        answer.append(my_str[i:i+n])
    return answer
'''