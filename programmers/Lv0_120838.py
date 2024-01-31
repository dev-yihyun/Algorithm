# [Programmers - 120838] 모스부호 (1)

def solution(letter):
    answer = ''
    morse = {
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    a = letter.split(' ')
    print(a)
    for i in range(len(a)):
        answer += morse.get(a[i])
    return answer
#   return ''.join([morse[i] for i in letter.split(' ')])