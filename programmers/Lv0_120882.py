# [Programmers - 120882] 등수 매기기
def solution(score):
    answer = [0 for i in range(len(score))]
    avg = []
    rank = 1
    for i in range(len(score)):
        avg.append((score[i][0] + score[i][1]) / 2)
    for i in range(len(score)):
        if max(avg) == -1:
            break
        if avg.count(max(avg)) >= 2:
            b = avg.count(max(avg))
            for j in range(avg.count(max(avg))):
                mindex = avg.index(max(avg))
                answer[mindex] = rank
                avg[mindex] = -1

            rank += b
        else:
            mindex = avg.index(max(avg))
            answer[mindex] = rank
            rank += 1
            avg[mindex] = -1
    return answer
'''
def solution(score):
    a = sorted([sum(i) for i in score], reverse = True)
    return [a.index(sum(i))+1 for i in score]
'''
'''
def solution(score):
    rank = sorted([sum(s) / 2 for s in score], reverse=True)
    rankDict = {}
    for i, r in enumerate(rank):
        if r not in rankDict.keys():
            rankDict[r] = i + 1
    return [rankDict[sum(s) / 2] for s in score]
'''