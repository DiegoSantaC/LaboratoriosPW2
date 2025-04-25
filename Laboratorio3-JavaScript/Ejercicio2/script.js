function invertirTexto() {
    let textoEntrada = document.getElementById("textoEntrada").value;
    let textoAlReves = textoEntrada.split("").reverse().join("");
    document.getElementById("resultado").textContent = textoAlReves;
  } 