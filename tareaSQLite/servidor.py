from flask import Flask, jsonify, send_from_directory
import sqlite3

app = Flask(__name__)

if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)