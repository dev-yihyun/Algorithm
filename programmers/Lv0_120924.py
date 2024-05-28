# [Programmers - 120924] 다음에 올 숫자
def solution(common):
    answer = 0
    if common[-1]-common[-2] == common[-2]-common[-3]:
        return common[0]+(len(common)+1-1)*(common[1]-common[0])
    else:
        return (common[-1])*(common[-1]//common[-2])
'''
def solution(common):
    answer = 0
    a,b,c = common[:3]
    if (b-a) == (c-b):
        return common[-1]+(b-a)
    else:
        return common[-1] * (b//a)
    return answer
'''
'''
def solution(common):

    if common[2]-common[1]==common[1]-common[0]:
        return common[-1]+common[2]-common[1]
    elif common[2]/common[1]==common[1]/common[0]:
        return common[-1]*common[2]/common[1]
'''