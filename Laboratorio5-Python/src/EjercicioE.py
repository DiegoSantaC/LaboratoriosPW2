from interpreter import draw
from chessPictures import *

print("AAAAAAAAA")
Fila=[]
for i in range(8) :
    if i%2==0 :
        Fila.append(squareWhite)
    else :
        Fila.append(squareBlack)

figura = Fila[0]

# Ir uniendo las demás
for casilla in Fila[1:]:
    figura = figura.join(casilla)

draw(figura.negative())