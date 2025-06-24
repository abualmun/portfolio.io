# 🧠✨ Breast Cancer Classification using PyTorch

A powerful deep learning model built with **PyTorch** to classify breast cancer cases using the **Wisconsin Breast Cancer** dataset 🎗️🔬
✅ Achieves **98.25% accuracy** on the test set!

---

## 📋 Table of Contents

* [📌 Overview](#-overview)
* [⚙️ Requirements](#-requirements)
* [📁 Project Structure](#-project-structure)
* [💻 Installation](#-installation)
* [🏗️ Model Architecture](#-model-architecture)
* [🏃‍♀️ Training Process](#-training-process)
* [📊 Results](#-results)

---

## 📌 Overview

This project uses **PyTorch** to build a simple yet effective **neural network** that classifies breast cancer diagnoses 🩺🧬
Trained on the Wisconsin dataset, the model features a **feedforward architecture** with one hidden layer — fast, efficient, and accurate!

---

## ⚙️ Requirements

Make sure you have the following installed:

* 🐍 Python 3.x
* 🔥 PyTorch
* 🖼️ torchvision
* 📘 scikit-learn
* ⚡ CUDA GPU (optional but recommended!)

---

## 📁 Project Structure

🔍 Here's what the project includes:

1. **🧹 Data Preprocessing**

   * Load dataset, split (80-20), scale features, convert to tensors

2. **🧠 Model Architecture**

   * 30 input features → 128 neurons (ReLU) → 1 output (Sigmoid)

3. **⚙️ Training Pipeline**

   * Binary Cross-Entropy + Adam Optimizer
   * Optional GPU acceleration 🚀

---

## 💻 Installation

```bash
pip install torch torchvision scikit-learn
```

---

## 🏗️ Model Architecture

```python
class NeuralNetwork(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(NeuralNetwork, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_size, output_size)
        self.sigmoid = nn.Sigmoid()

    def forward(self, x):
        out = self.fc1(x)
        out = self.relu(out)
        out = self.fc2(out)
        out = self.sigmoid(out)
        return out
```

📐 **Hyperparameters**

* Input size: 30
* Hidden size: 128
* Output size: 1
* Learning rate: 0.001
* Epochs: 100

---

## 🏃‍♀️ Training Process

🛠️ The training flow includes:

* **📦 Data prep**: Load, split, scale, tensorify

* **🔁 Model loop**:

  * Forward → Loss → Backprop → Optimize
  * Log every 10 epochs

* **✅ Evaluation**:

  * Test set validation
  * Accuracy tracking

---

## 📊 Results

🚀 **Model Performance**:

* 🏋️ Training Accuracy: **98.46%**
* 📈 Test Accuracy: **98.25%**

📉 Sample Output:

```
Epoch [10/100], Loss: 0.4617 Accuracy: 90.99%
Epoch [50/100], Loss: 0.1540 Accuracy: 95.60%
Epoch [100/100], Loss: 0.0841 Accuracy: 98.46%
```

✅ Excellent generalization and real-world applicability!

---

## 📷 Visualizations

### 🔍 Mean Smoothness

![plot](./mean_smoothness.png)

### 📊 Dataset Plot

![plot](./data_plot.png)

### 📈 Data Count

![plot](./data_count.png)
