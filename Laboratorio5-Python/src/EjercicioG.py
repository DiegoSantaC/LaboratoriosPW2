from interpreter import draw
from chessPictures import *

print("AAAAAAAAA")
tablero = []

# Piezas en orden (torre, caballo, alfil, dama, rey, alfil, caballo, torre)
orden_piezasNegras = [rockBlack, knightBlack, bishopBlack, queenBlack, kingBlack,
                bishopBlack, knightBlack, rockBlack]
orden_piezasBlancas = [rockWhite, knightWhite, bishopWhite, queenWhite, kingWhite,
                        bishopWhite, knightWhite, rockWhite]

for i in range(8):
    fila = []
    for j in range(8):
        if (i + j) % 2 == 0:
            casilla = squareWhite
        else:
            casilla = squareBlack

        # Añadir piezas
        if i == 0:
            casilla = casilla.under(orden_piezasNegras[j])
        elif i == 1:
            casilla = casilla.under(pawnBlack)
        elif i == 6:
            casilla = casilla.under(pawnWhite)
        elif i == 7:
            casilla = casilla.under(orden_piezasBlancas[j])
        
        fila.append(casilla)

    filaUnida = fila[0]
    for casilla in fila[1:]:
        filaUnida = filaUnida.join(casilla)
    tablero.append(filaUnida)

figura = tablero[0]
for fila in tablero[1:]:
    figura = figura.up(fila)

draw(figura)