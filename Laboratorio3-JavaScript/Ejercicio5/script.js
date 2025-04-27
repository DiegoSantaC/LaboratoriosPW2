document.getElementById("formularioValores").addEventListener("submit", function(event) {
  event.preventDefault();

  const cantidad = parseInt(document.getElementById("cantidad").value);
  const tablaContenedor = document.getElementById("tablaContenedor");
  tablaContenedor.innerHTML = ""; // Limpia el contenido anterior
  document.getElementById("resultado").textContent = ""; // Limpia el resultado anterior

  if (isNaN(cantidad) || cantidad <= 0) {
    tablaContenedor.textContent = "Por favor ingresa un numero valido";
    return;
  }

  const tabla = document.createElement("table");
  const fila = document.createElement("tr");

  for (let i = 0; i < cantidad; i++) {
    const celda = document.createElement("td");
    const valor = Math.floor(Math.random() * 100); // Numero aleatorio entre 0 y 99
    celda.textContent = valor;
    fila.appendChild(celda);
  }

  tabla.appendChild(fila);
  tablaContenedor.appendChild(tabla);

  // Crear boton de suma
  const botonSumar = document.createElement("button");
  botonSumar.textContent = "Calcular suma";
  botonSumar.onclick = calcularSuma;
  tablaContenedor.appendChild(botonSumar);
});

function calcularSuma() {
  const celdas = document.querySelectorAll("table td");
  let suma = 0;
  for (let i = 0; i < celdas.length; i++) {
    suma += parseInt(celdas[i].textContent);
  }
  document.getElementById("resultado").textContent = "La suma de los valores es: " + suma;
}