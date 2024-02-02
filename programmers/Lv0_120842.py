# [Programmers - 120842] 2차원으로 만들기

def solution(num_list, n):
    answer = []
    tmp=[]
    while (len(num_list)!=0):
        for i in range(n):
            a = num_list.pop(0)
            tmp.append(a)
        answer.append(tmp)
        tmp=[]
    return answer
'''
for i in range(0, len(num_list), n):
        answer.append(num_list[i:i+n])
'''
#   return [num_list[ix-n:ix] for ix in range(n, len(num_list)+1, n)]