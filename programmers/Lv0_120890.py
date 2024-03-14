# [Programmers - 120890] 가까운 수

def solution(array, n):
    answer = 0
    line = list()
    tmp=[]
    for i in range(len(array)):
        if n == array[i]:
            return array[i]
        if n >array[i]:
            line.append(n-array[i])
        else:
            line.append(array[i]-n)
    if line.count(min(line))>1:
        for i in range(len(line)):
            if min(line) == line[i]:
                tmp.append(array[i])
        answer = min(tmp)
    else:
        answer = array[line.index(min(line))]
    return answer

#   solution=lambda a,n:sorted(a,key=lambda x:(abs(x-n),x))[0]
'''
def solution(array, n):
    array.sort(key = lambda x : (abs(x-n), x-n))
    answer = array[0]
    return answer
'''
'''
def solution(array, n):
    array.sort()
    temp = []

    for i in array :
        temp.append( abs(n-i) )

    return array[temp.index(min(temp))]
'''