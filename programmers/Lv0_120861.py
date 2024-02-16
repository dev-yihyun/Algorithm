# [Programmers - 120861] 캐릭터의 좌표
def solution(keyinput, board):
    answer = [0, 0]
    x1, x2 = board[0] // 2, -(board[0] // 2);
    y1, y2 = board[1] // 2, -(board[1] // 2);

    for i in range(len(keyinput)):
        c = keyinput[i]
        if c == "left":
            if (answer[0] - 1) < x2:
                continue
            answer[0] -= 1
        elif c == "right":
            if (answer[0] + 1) > x1:
                continue
            answer[0] += 1
        elif c == "up":
            if (answer[1] + 1) > y1:
                continue
            answer[1] += 1
        elif c == "down":
            if (answer[1] - 1) < y2:
                continue
            answer[1] -= 1
    print(answer)
    return answer

'''
def solution(keyinput, board):
    x_lim,y_lim = board[0]//2,board[1]//2
    move = {'left':(-1,0),'right':(1,0),'up':(0,1),'down':(0,-1)}
    x,y = 0,0
    for k in keyinput:
        dx,dy = move[k]
        if abs(x+dx)>x_lim or abs(y+dy)>y_lim:
            continue
        else:
            x,y = x+dx,y+dy

    return [x,y]
'''