# [Programmers - 120883] 로그인 성공?
def solution(id_pw, db):
    answer = ''
    id = id_pw[0]
    pw = id_pw[1]
    for i in range(len(db)):
        if id == db[i][0]:
            if pw == db[i][1]:
                return "login"
            else:
                return "wrong pw"
    return "fail"
    return answer

'''
def solution(id_pw, db):
    if db_pw := dict(db).get(id_pw[0]):
        return "login" if db_pw == id_pw[1] else "wrong pw"
    return "fail"
'''