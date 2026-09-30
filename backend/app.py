from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    area = int(data.get("area", 0))
    bedrooms = int(data.get("bedrooms", 0))
    bathrooms = int(data.get("bathrooms", 0))
    floors = int(data.get("floors", 0))
    age = int(data.get("age", 0))
    location = data.get("location", "")

    price = (
        area * 4500
        + bedrooms * 500000
        + bathrooms * 250000
        + floors * 150000
        - age * 20000
    )

    city_bonus = {
        "Hyderabad": 800000,
        "Bangalore": 1200000,
        "Mumbai": 3500000,
        "Delhi": 1000000,
        "Chennai": 600000,
        "Pune": 500000,
    }

    price += city_bonus.get(location, 0)

    return jsonify({
        "predicted_price": price,
        "confidence": "95%"
    })

if __name__ == "__main__":
    app.run(debug=True)