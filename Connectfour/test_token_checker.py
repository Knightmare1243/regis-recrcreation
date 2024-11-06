games = [   [[1,2,3,4],[6,7,32,23]],
            [[6,7,32,23],[1,2,3,4]],
            [[6,7,8,9],[1,2,33,4]],
            [[37,40,4,12,30,28],[14,30,45,5,26]],
            [[41,47,33,1],[7,13,19,25]],
            [[24,31,38,45],[5,5,5,5]],
            [[7,24,31,38,45],[5,5,5,5]],
        ]

def winner(proof):
    for i in proof:
        accumulation = []
        for j in i:
            print(accumulation) 
            #total = i[0]+7
            #total2 = total+7
            #total3 = total2+7
            accumulation.append(j)
            if len(accumulation)>1 and j != accumulation[-1]+7:
                accumulation = []
                accumulation.append(j)
            
            if len(accumulation) == 4:
                print("you win")
            #if j == [i[0],total,total2,total3]:
               # print(i[0])
                #print("you win")

for i in games:
    print(winner(i))
