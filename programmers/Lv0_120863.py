# [Programmers - 120863] 다항식 더하기
def solution(polynomial):
    answer = ''
    pn = polynomial.replace(" ", "").split("+")
    a = [s for s in pn if s.count('x') >= 1]
    b = [s for s in pn if s.count('x') == 0]
    x = 0
    d = 0

    if len(a) == 0:
        for i in range(len(b)):
            d += int("".join(b[i]))
        return str(d)

    for i in range(len(a)):
        c = list(a[i])
        c.pop()
        if len(c) == 0:
            x += 1
        else:
            x += int("".join(c))

    for i in range(len(b)):
        d += int("".join(b[i]))
    if x == 0:
        answer = str(d)
    elif x == 1 and d == 0:
        answer = 'x'
    elif d == 0:
        answer = str(x) + 'x'
    elif x == 1 and d != 0:
        answer = 'x + ' + str(d)
    else:
        answer = str(x) + 'x' + ' + ' + str(d)
    return answer
'''
def solution(polynomial):
    xnum = 0
    const = 0
    for c in polynomial.split(' + '):
        if c.isdigit():
            const+=int(c)
        else:
            xnum = xnum+1 if c=='x' else xnum+int(c[:-1])
    if xnum == 0:
        return str(const)
    elif xnum==1:
        return 'x + '+str(const) if const!=0 else 'x'
    else:
        return f'{xnum}x + {const}' if const!=0 else f'{xnum}x'
'''