from flask import Flask, jsonify, send_from_directory
import sqlite3

app = Flask(__name__)

@app.route("/")
def index():
    return send_from_directory('.', 'index.html')

@app.route("/script.js")
def js():
    return send_from_directory('.', 'script.js')

@app.route("/peliculas")
def obtener_peliculas():
    try:
        conn = sqlite3.connect("imdb.db")
        cursor = conn.cursor()
        cursor.execute("SELECT Title, Year FROM Movie LIMIT 5")
        resultados = cursor.fetchall()
        conn.close()
        return jsonify([{"titulo": r[0], "año": r[1]} for r in resultados])
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)