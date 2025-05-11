from pieces import *
from picture import *

bishop = Picture(BISHOP)
kingBlack = Picture(KING,'@')
kingWhite = Picture(KING,kingBlack._invColor('@'))
knightBlack = Picture(KNIGHT,'@')
knightWhite = Picture(KNIGHT,knightBlack._invColor('@'))
pawn = Picture(PAWN)
queen = Picture(QUEEN)
rock = Picture(ROCK)
square = Picture(SQUARE)
