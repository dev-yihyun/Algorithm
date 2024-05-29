# [Programmers - 120956] 옹알이 (1)
def solution(babbling):
    answer = 0
    line = ["aya", "ye", "woo", "ma"]
    for i in range(len(babbling)):
        b = str(babbling[i])
        for j in range(len(b)):
            if "aya" in b[0:3]:
                b = b.replace(b[0:3], "")
            elif "ye" in b[0:2]:
                b = b.replace(b[0:2], "")
            elif "woo" in b[0:3]:
                b = b.replace(b[0:3], "")
            elif "ma" in b[0:2]:
                b = b.replace(b[0:2], "")
            elif len(b) == 0:
                answer += 1
                break
            else:
                break
    return answer
'''
def solution(babbling):
    c = 0
    for b in babbling:
        for w in [ "aya", "ye", "woo", "ma" ]:
            if w * 2 not in b:
                b = b.replace(w, ' ')
        if len(b.strip()) == 0:
            c += 1
    return c
'''
'''
import re

def solution(babbling):
    regex = re.compile('^(aya|ye|woo|ma)+$')
    cnt=0
    for e in babbling:
        if regex.match(e):
            cnt+=1
    return cnt
'''