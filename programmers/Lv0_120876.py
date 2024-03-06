# [Programmers - 120876] 겹치는 선분의 길이
def solution(lines):
    answer = 0
    line = [0 for _ in range(200)]
    for i in range(3):
        start = lines[i][0]
        end = lines[i][1]
        for j in range(start,end):
            line[j+100]+=1
    for i in line:
        if i>=2:
            answer+=1
    return answer

'''
def solution(lines):
    sets = [set(range(min(l), max(l))) for l in lines]
    return len(sets[0] & sets[1] | sets[0] & sets[2] | sets[1] & sets[2])
'''
'''
def solution(lines):
    s1 = set(i for i in range(lines[0][0], lines[0][1]))
    s2 = set(i for i in range(lines[1][0], lines[1][1]))
    s3 = set(i for i in range(lines[2][0], lines[2][1]))
    return len((s1 & s2) | (s2 & s3) | (s1 & s3))

'''