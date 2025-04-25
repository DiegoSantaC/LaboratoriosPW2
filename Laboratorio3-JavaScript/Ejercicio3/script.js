function calcularDiasParaArequipa() {
    const hoy = new Date();
    const anioActual = hoy.getFullYear();
    let proximo15Agosto = new Date(anioActual, 7, 15); // Dia de Arequipa
  
    // Verificamos si hoy es el dia de Arequipa
    if (hoy.getDate()===15 && hoy.getMonth()===7) {
        document.getElementById("contador").textContent =
          `HOY ES EL DIA DE AREQUIPA`;
        return; 
    }
    // Si ya paso el 15 de agosto este año entonces usamos el proximo año
    if(hoy>proximo15Agosto){
        proximo15Agosto = new Date(anioActual + 1, 7, 15);
    }
    
    let unDiaEnMilisegundos = 1000 * 60 * 60 * 24;
    let diferencia = proximo15Agosto - hoy;
    let diasFaltantes = Math.ceil(diferencia / unDiaEnMilisegundos);
  
    document.getElementById("contador").textContent =
      `Faltan ${diasFaltantes} dia(s) para el Dia de Arequipa`;
}