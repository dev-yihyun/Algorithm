# [Programmers - 120837] 개미 군단

def solution(hp):
    answer = 0
    l5 = list(divmod(hp,5))
    answer = l5[0]
    l3 = list(divmod(l5[1],3))
    answer += l3[0]
    l1 = list(divmod(l3[1],1))
    answer+=l1[0]
    return answer
#   return hp // 5 + (hp % 5 // 3) + ((hp % 5) % 3)
'''
for ant in [5, 3, 1]:
    d, hp = divmod(hp, ant)
    answer += d
return answer
'''