document.getElementById("formularioValores").addEventListener("submit", function(event) {
  event.preventDefault();
  crearTabla();
  crearBotonSumar();
});

function crearTabla() {
  const cantidad = parseInt(document.getElementById("cantidad").value);
  let tablaContenedor = document.getElementById("tablaContenedor");
  tablaContenedor.innerHTML = ""; // Limpia el contenido anterior
  document.getElementById("resultado").textContent = ""; // Limpia el resultado anterior

  if (isNaN(cantidad) || cantidad <= 0) {
    tablaContenedor.textContent = "Por favor ingresa un numero valido";
    return;
  }

  let tabla = document.createElement("table");  
  let fila = document.createElement("tr");

  for (let i = 0; i < cantidad; i++) {
    const celda = document.createElement("td");
    const valor = Math.floor(Math.random() * 100); // Numero aleatorio entre 0 y 99
    celda.textContent = valor;
    fila.appendChild(celda);
  }

  tabla.appendChild(fila);
  tablaContenedor.appendChild(tabla);
}

function crearBotonSumar() {
  let tablaContenedor = document.getElementById("tablaContenedor");
  let botonSumar = document.createElement("button");
  botonSumar.textContent = "Calcular suma";
  botonSumar.onclick = calcularSuma;
  tablaContenedor.appendChild(botonSumar);
}

function calcularSuma() {
  let celdas = document.querySelectorAll("table td");
  let suma =0;
  for (let i = 0; i < celdas.length; i++) {
    suma += parseInt(celdas[i].textContent);
  }
  document.getElementById("resultado").textContent = "La suma de los valores es: " + suma;
}