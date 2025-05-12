from interpreter import draw
from chessPictures import *


print("AAAAAAAAA")

FiguraHorizontal=knightWhite.verticalMirror()
Columna1=FiguraHorizontal.verticalRepeat(4)
Columna1=Columna1.up(queenWhite)


FiguraVertical=knightBlack.horizontalMirror()
Columna2=FiguraVertical.verticalRepeat(4)
Columna2=Columna2.up(queenWhite.negative())

Columna3=Columna1.join(Columna2)


draw(Columna3)