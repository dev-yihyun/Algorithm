# [Programmers - 120869] 외계어 사전
def solution(spell, dic):
    line =[0 for i in range(len(spell))]

    for i in range(len(dic)):
        l = list(dic[i])
        for j in range(len(spell)):
            if spell[j] in l:
                if line[j] ==0:
                    line[j]=1
                else:
                    continue
        if line.count(0) >= 1:
            line = [0 for i in range(len(spell))]
        else:
            return 1
    return 2

'''
def solution(spell, dic):
    spell = set(spell)
    for s in dic:
        if not spell-set(s):
            return 1
    return 2
'''
'''
def solution(spell, dic):
    for d in dic:
        if sorted(d) == sorted(spell):
            return 1
    return 2
'''