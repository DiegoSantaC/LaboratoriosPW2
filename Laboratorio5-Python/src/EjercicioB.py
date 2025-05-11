from interpreter import draw
from chessPictures import *


print("AAAAAAAAA")

Fila1=knightWhite.join(knightBlack)
Fila2=knightBlack.verticalMirror().join(knightWhite.verticalMirror())
nuevaFigura=Fila1.up(Fila2)


draw(nuevaFigura)