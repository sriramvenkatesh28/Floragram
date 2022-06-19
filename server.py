from flask import Flask
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app, resources={r'/api/*': {'origins': 'http://localhost:3000'}})

@app.route("/api/city-data", methods=["GET"])
def helloWorld():
    response = flask.jsonify({'some': 'data'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == "__main__":
    app.run(debug=True)

# import json
# from flask import Flask, request, jsonify, make_response
# from flask_cors import CORS, cross_origin
# from json import load
# from tensorflow import keras
# from keras.models import load_model
# import pandas as pd
# import numpy as np

# app = Flask(__name__)
# cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

# @app.route("/city-data", methods=["POST"])
# @cross_origin()
# def home():
#     N = request.json.get("N")
#     print(N)
#     ann = load_model('C:/project/best_model.h5')
#     data = json.load('C:/project/floragram/soil-data.json')
#     for i in data:
#         print(i)
#         for j in data[i]:
#             print(j)

#     a = [27.0, 120.0, 200.0, 21.4527, 90.74, 6.11, 116.703]
#     result = np.array(ann.predict([a]))
#     print(result)
#     return "Hello"

# if __name__ == "__main__":
#     app.run(debug=True)

