function extraerCodigo(){
    let url=document.getElementById("urlMeet").value;
    let expresionRegular = /https:\/\/meet\.google\.com\/([a-z0-9]+)-([a-z0-9]+)-([a-z0-9]+)/;
    let lista= url.match(expresionRegular); 

    if (lista!=null) {
        let codigo = lista[1]+lista[2]+lista[3];
        document.getElementById("resultado").textContent = "Codigo de sesion: "+codigo;
      } else {
        document.getElementById("resultado").textContent = "Enlace invalido. Asegurate de pegar un enlace valido de Google Meet.";
      }
}