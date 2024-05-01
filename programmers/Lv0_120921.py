# [Programmers - 120921] 문자열 밀기

def solution(A, B):
    answer = 0
    linea = list(A)
    lineb = list(B)
    if A==B:
        return 0

    for i in range(1,len(linea)+1):
        c = linea.pop()
        linea.insert(0,c)
        if str(linea) == str(lineb):
            return i
    return -1
# solution=lambda a,b:(b*2).find(a)
