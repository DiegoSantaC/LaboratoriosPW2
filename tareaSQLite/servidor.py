from flask import Flask, request, jsonify, send_from_directory
import sqlite3

app = Flask(__name__)

def inicializar_bd():
    with sqlite3.connect("imdb.db") as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS Pelicula (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo TEXT NOT NULL,
                anio INTEGER NOT NULL
            )
        """)

@app.route("/")
def index():
    return send_from_directory('.', 'index.html')

@app.route("/script.js")
def js():
    return send_from_directory('.', 'script.js')

@app.route("/peliculas", methods=["GET"])
def obtener_peliculas():
    with sqlite3.connect("imdb.db") as conn:
        peliculas = conn.execute("SELECT * FROM Pelicula").fetchall()
    return jsonify([{"id": p[0], "titulo": p[1], "anio": p[2]} for p in peliculas])

@app.route("/peliculas", methods=["POST"])
def agregar_pelicula():
    datos = request.get_json()
    titulo = datos.get("titulo")
    anio = datos.get("anio")
    with sqlite3.connect("imdb.db") as conn:
        conn.execute("INSERT INTO Pelicula (titulo, anio) VALUES (?, ?)", (titulo, anio))
    return jsonify({"mensaje": "Película agregada correctamente"})

@app.route("/peliculas/<int:id>", methods=["DELETE"])
def eliminar_pelicula(id):
    with sqlite3.connect("imdb.db") as conn:
        conn.execute("DELETE FROM Pelicula WHERE id = ?", (id,))
    return jsonify({"mensaje": "Película eliminada"})

if __name__ == "__main__":
    inicializar_bd()
    app.run(debug=True, host="localhost", port=3000)