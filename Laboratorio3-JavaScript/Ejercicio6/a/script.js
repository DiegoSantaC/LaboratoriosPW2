document.getElementById("botonAumentar").addEventListener("click", aumentarTamaño);
document.getElementById("botonDisminuir").addEventListener("click", disminuirTamaño);
document.getElementById("botonColorRojo").addEventListener("click", cambiarColorRojo);
document.getElementById("botonColorAzul").addEventListener("click", cambiarColorAzul);
document.getElementById("botonColorNegro").addEventListener("click", cambiarColorNegro); 


function aumentarTamaño() {
    let texto = document.getElementById("texto");
    let tamanioActual = parseInt(window.getComputedStyle(texto).fontSize);
    texto.style.fontSize = (tamanioActual + 2) + "px";
}

function disminuirTamaño() {
    let texto = document.getElementById("texto");
    let tamanioActual = parseInt(window.getComputedStyle(texto).fontSize);
    texto.style.fontSize = (tamanioActual - 2) + "px";
}

function cambiarColorRojo() {
    let texto = document.getElementById("texto");
    texto.style.color = "red";
}

function cambiarColorAzul() {
    let texto = document.getElementById("texto");
    texto.style.color = "blue";
}

function cambiarColorNegro() {
    let texto = document.getElementById("texto");
    texto.style.color = "black";
}