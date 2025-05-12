from interpreter import draw
from chessPictures import *

print("AAAAAAAAA")
Tablero=[]
for i in range(4) :
    Fila=[]
    for j in range(8) :
        if (i+j)%2==0 : 
            print(i+j)
            Fila.append(squareWhite)
        else :
            print(i+j)
            Fila.append(squareBlack)
    Tablero.append(Fila)


columnasFilas = []
# Ir uniendo las demás
for fila in Tablero :
    filaUnida= fila[0]
    for casilla in fila[1:]:
        filaUnida= filaUnida.join(casilla)
    columnasFilas.append(filaUnida)

figura=columnasFilas[0]
for fila in columnasFilas[1:] :
    figura=figura.up(fila)

draw(figura)