from flask import Flask, render_template, request
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
import numpy as np
from PIL import Image
import base64
import io
import os

app = Flask(__name__)

# Load the model
model = load_model("models/model_cifar10.h5", compile=False)

# CIFAR-10 class names
class_names = ["airplane", "automobile", "bird", "cat", "deer", 
               "dog", "frog", "horse", "ship", "truck"]

@app.route("/", methods=["GET", "POST"])
def index():
    predictions = []

    if request.method == "POST":
        uploaded_files = request.files.getlist("images")
        for file in uploaded_files:
            # Read and preprocess image
            image = Image.open(file).convert("RGB").resize((32, 32))
            array = img_to_array(image)
            array = np.expand_dims(array, axis=0) / 255.0

            # Predict
            result = model.predict(array)
            label = class_names[np.argmax(result)]

            # Convert image to base64
            buffered = io.BytesIO()
            image.save(buffered, format="PNG")
            encoded_image = base64.b64encode(buffered.getvalue()).decode("utf-8")

            predictions.append({
                "image": encoded_image,
                "label": label
            })

    return render_template("index.html", predictions=predictions)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5001))
    app.run(debug=True, host='0.0.0.0', port=port)
