from colors import *
class Picture:
  def __init__(self, img, colorInterno=None, colorExterno=None):
    self.img = img

    if colorInterno:
        self.img = self.reemplazar('.', colorInterno).img
    if colorExterno:
        self.img = self.reemplazar('#', colorExterno).img

  def __eq__(self, other):
    return self.img == other.img

  def _invColor(self, color):
    if color not in inverter:
      return color
    return inverter[color]

  def verticalMirror(self):
    """ Devuelve el espejo vertical de la imagen """
    vertical = []
    for fila in self.img:
        vertical.append(fila[::-1])
    return Picture(vertical) 

  def horizontalMirror(self):
    """ Devuelve el espejo horizontal de la imagen """
    return Picture(self.img[::-1])

  def negative(self):
    """ Devuelve la figura con su color inverso"""
    nueva_img = []
    for fila in self.img:
        nueva_fila = []
        for c in fila:
            nuevo = inverter.get(c, c) 
            nueva_fila.append(nuevo)
        nueva_img.append(''.join(nueva_fila))  
    return Picture(nueva_img)

  def join(self, otra_figura):
    """ Une una figura con otra de manera horizontal """
    nueva_img = []
    for fila1, fila2 in zip(self.img, otra_figura.img):
        nueva_img.append(fila1 + fila2)
    return Picture(nueva_img)

  def up(self, otra_figura):
    """Devuelve una nueva figura poniendo la figura 'otra_figura' abajo de la actual"""
    nueva_img = self.img + otra_figura.img
    return Picture(nueva_img)
  
  """ Devuelve una nueva figura poniendo la figura p sobre la
        figura actual """
  def under(self, p):
    nueva_img = []
    for fila_self, fila_p in zip(self.img, p.img):
        nueva_fila = []
        for c_p, c_self in zip(fila_p, fila_self):
            if c_p == ' ':  
                nueva_fila.append(c_self)  
            else:
                nueva_fila.append(c_p)  
        nueva_img.append(''.join(nueva_fila))
    return Picture(nueva_img)
  
  def horizontalRepeat(self, n):
    resultado = self
    for i in range(n-1):
        resultado = resultado.join(self)
    return resultado

  def verticalRepeat(self, n):
    resultado = self
    for i in range(n-1):
        resultado = resultado.up(self)
    return resultado

  #Extra: Sólo para realmente viciosos 
  def rotate(self):
    """Devuelve una figura rotada en 90 grados, puede ser en sentido horario
    o antihorario"""
    rotada = [''.join(fila) for fila in zip(*self.img[::-1])]
    return Picture(rotada)
  
  #Adicional
  def reemplazar(self, colorViejo, colorNuevo):
    """Devuelve una nueva imagen donde se cambia el colorViejo por un colorNuevo"""
    nueva_imagen = []
    for fila in self.img:
        nueva_fila = []
        for c in fila:
            if c == colorViejo:
                nueva_fila.append(colorNuevo)
            else:
                nueva_fila.append(c)
        nueva_imagen.append(nueva_fila)
    return Picture(nueva_imagen)

