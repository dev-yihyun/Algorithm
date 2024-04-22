# [Programmers - 120907] OX퀴즈
def solution(quiz):
    answer = []
    for i in range(len(quiz)):
        line = list(quiz[i].split())
        if line[1] == '-':
            if int(line[0]) - int(line[2]) == int(line[4]):
                answer.append("O")
            else:
                answer.append("X")
        elif line[1] == '+':
            if int(line[0]) + int(line[2]) == int(line[4]):
                answer.append("O")
            else:
                answer.append("X")

    return answer