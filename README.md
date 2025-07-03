# 🧠 CIFAR-10 Image Classifier Web App

A simple yet powerful web application built with **Flask** that uses a trained **TensorFlow** model to classify uploaded images into one of the 10 CIFAR-10 categories:

> ✈️ **airplane**, 🚗 **automobile**, 🐦 **bird**, 🐱 **cat**, 🦌 **deer**, 🐶 **dog**, 🐸 **frog**, 🐴 **horse**, 🚢 **ship**, 🚚 **truck**

---

## 📦 Features

- 🖱️ **Drag & Drop Support** – Upload multiple images easily  
- 🔍 **Live Previews** – View uploaded images before submitting  
- 🧠 **Deep Learning Powered** – Classifies using a trained CNN on CIFAR-10  
- 📊 **Visual Feedback** – Predictions displayed with labels  
- 💡 **Mobile Responsive** – Bootstrap 5 frontend adapts across devices  
- 🔁 **Batch Processing** – Classify multiple images in one go  

---

## 🛠️ Tech Stack

| Layer        | Technology Used                      |
|--------------|---------------------------------------|
| **Frontend** | HTML5, CSS3, Bootstrap 5, JavaScript |
| **Backend**  | Python 3.9+, Flask                   |
| **Model**    | TensorFlow 2.18 (Trained on CIFAR-10)|
| **Image I/O**| Pillow (PIL)                         |

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/MayurJr/Cifar-10-Classification.git
cd Cifar-10-Classification
```
---

### 2️⃣ Set Up a Virtual Environment (Optional but Recommended)
```bash
python -m venv venv
source venv/bin/activate   
```
---

### 3️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```
---

### 4️⃣ Run the Flask App
```bash
python app.py
```
The app will run on http://localhost:5000

## 🧠 Model Information
Architecture: A custom Convolutional Neural Network trained on CIFAR-10.

Input size: 32x32 RGB images

Output: 10-class softmax

Training: Done using TensorFlow 2.18

You can find the saved model in the model/ directory. It is loaded automatically when the app starts.

### 📸 How to Use
1. Launch the app with python app.py
2. Open your browser to http://localhost:5000
3. Drag and drop one or more images (32x32 or auto-resized)
4. Click Predict
5. View predicted labels below each image 🎯
