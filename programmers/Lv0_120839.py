# [Programmers - 120839] 가위 바위 보

def solution(rsp):
    answer = ''
    line = list(rsp)
    for i in range(len(rsp)):
        if line[i] == "0":
            answer += "5"
        elif line[i] == "2":
            answer += "0"
        elif line[i] == "5":
            answer += "2"
    return answer

'''
 d = {'0':'5','2':'0','5':'2'}
    return ''.join(d[i] for i in rsp)
'''
'''
def solution(rsp):
    rsp =rsp.replace('2','s')
    rsp =rsp.replace('5','p')
    rsp =rsp.replace('0','r')
    rsp =rsp.replace('r','5')
    rsp =rsp.replace('s','0')
    rsp =rsp.replace('p','2')
    return rsp
'''