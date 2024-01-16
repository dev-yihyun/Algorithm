# [Programmers - 120812] 최빈값 구하기

def solution(array):
    answer = 0
    if len(array)==1:
        return array[0]
    line=[]
    for i in range(max(array)+1):
        line.append(array.count(i))

    a = max(line)
    b = line.index(a)
    line.remove(a)
    if a in line:
        answer = -1
    else:
        answer = b
    return answer

'''
def solution(array):
    while len(array) != 0:
        for i, a in enumerate(set(array)):
            array.remove(a)
        if i == 0: return a
    return -1
'''