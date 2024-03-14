 # [Programmers - 120889] 삼각형의 완성조건 (1)
def solution(sides):
    answer = 0
    sides = sorted(sides)
    return 1 if sides[2] < sides[0] + sides[1] else 2
