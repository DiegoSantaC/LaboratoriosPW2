function mostrarPeliculas(){
    fetch("/peliculas")
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById("lista");
            lista.innerHTML = "";  // limpiar lista
            data.forEach(p => {
                const li = document.createElement("li");
                li.textContent = `${p.titulo} (${p.anio})`;
                lista.appendChild(li);
            });
        })
        .catch(error => console.error("Error AJAX:", error));
}