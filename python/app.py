from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route("/")
def home():
    return jsonify({"message": "Halo ini test api"})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
