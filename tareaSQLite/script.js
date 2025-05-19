function cargarPeliculas() {
    fetch("/peliculas")
        .then(res => res.json())
        .then(data => {
            const lista = document.getElementById("lista");
            lista.innerHTML = "";
            data.forEach(p => {
                const li = document.createElement("li");
                li.textContent = `${p.titulo} (${p.anio}) `;
                const btnEliminar = document.createElement("button");
                btnEliminar.textContent = "❌";
                btnEliminar.onclick = () => eliminarPelicula(p.id);
                li.appendChild(btnEliminar);
                lista.appendChild(li);
            });
        });
}

function agregarPelicula(evento) {
    evento.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const anio = document.getElementById("anio").value;

    fetch("/peliculas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, anio })
    })
    .then(() => {
        document.getElementById("formulario").reset();
        cargarPeliculas();
    });
}

function eliminarPelicula(id) {
    fetch(`/peliculas/${id}`, { method: "DELETE" })
        .then(() => cargarPeliculas());
}

document.getElementById("formulario").addEventListener("submit", agregarPelicula);

window.onload = cargarPeliculas;