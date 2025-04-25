function obtenerNombreDelDia(numeroDelDia) {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return dias[numeroDelDia];
  }

  const hoy = new Date();
  const numeroDelDia = hoy.getDay(); 
  const nombreDelDia = obtenerNombreDelDia(numeroDelDia);

  document.getElementById("resultado").textContent = "El dia de hoy es " + nombreDelDia;
