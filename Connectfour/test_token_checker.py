def check(accumulateion: list, incroment: int, edge_detect: bool) -> list:
    if len(accumulateion) == 1 and edge_detect(accumulateion[-1]): 
        accumulateion = []

    if len(accumulateion)>1 and accumulateion[-1] != accumulateion[-2]+incroment: 
        accumulateion = [accumulateion[-1]]

    return accumulateion


def winner(proof):
    accumulations = {1:[],6:[],7:[],8:[]}
    funcs = (lambda a: (a -1)%7 > 3, lambda a: (a -1)%7 < 3, lambda _: False, lambda a: (a -1)%7 > 3)
    for j in proof:
        for index, value in enumerate(accumulations):
            #value = accumulations[index]
            accumulations[value].append(j)
            accumulations[value] = check(accumulations[value], value, funcs[index])
            if len(accumulations[value]) == 4:
                return True
    return False

winner([8,9,10,11])
    #    D_accumulation = [] # down
    #    R_accumulation = [] # right
    #    DR_accumulation = [] # diagonale right
    #    DF_accumulation = [] # diagonale left
    #    for j in i:
    #        D_accumulation.append(j)
    #        R_accumulation.append(j)
    #        DR_accumulation.append(j)
    #        DF_accumulation.append(j)

#            if len(R_accumulation) ==1 and (j -1)%7 > 3: 
 #               R_accumulation = []
  #          if len(DR_accumulation) ==1 and (j -1)%7 > 3: 
   #             DR_accumulation = []
    #        if len(DF_accumulation) ==1 and (j -1)%7 < 3: 
     #           DF_accumulation = []
#
 #           if len(D_accumulation)>1 and j != D_accumulation[-2]+7: 
  #              D_accumulation = []
   #             D_accumulation.append(j)
#
 #           if len(R_accumulation)>1 and j != R_accumulation[-2]+1:
  #              R_accumulation = []
   #             R_accumulation.append(j)
#
 #           if len(DR_accumulation)>1 and j != DR_accumulation[-2]+8:
  #              DR_accumulation = []
   #             DR_accumulation.append(j)
#
 #           if len(DF_accumulation)>1 and j != DF_accumulation[-2]+6:
  #              DF_accumulation = []
   #             DF_accumulation.append(j)
#
 #           if len(D_accumulation) == 4 or len(R_accumulation) == 4 or len(DR_accumulation) == 4 or len(DF_accumulation) == 4:
  #              print("Down results", D_accumulation, "right results", R_accumulation, "Diagonale right", DR_accumulation, "Diagonale left",DF_accumulation)
   #             print("you win")
