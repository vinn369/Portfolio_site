# Sign Language Detection System

## Description
A computer vision-based system for real-time detection and classification of hand gestures representing sign language words. This project uses a trained deep learning model to recognize several common sign language gestures and display their meaning through live webcam input.

## Technologies
- Python 3.x
- OpenCV (cv2)
- CVZone (Hand Tracking & Classification)
- NumPy
- Keras/TensorFlow
- Computer Vision

## Project Overview
This system provides real-time sign language gesture recognition using computer vision techniques. The project includes both data collection capabilities for training new gestures and a live detection system that can classify common sign language words like "Hello", "I love you", "No", "Okay", "Please", "Thank you", and "Yes".

## Key Features
- **Real-time hand gesture detection** using webcam input
- **Classification of sign language gestures** for 7 common words
- **Visual feedback** of detected gestures overlaid on camera input
- **Data collection script** to generate training images for new gestures
- **Easily extendable** to support additional gestures

## Technical Details
The system consists of several key components:

- **datacollection.py**: Script for collecting gesture data from webcam and saving processed images for model training
- **test.py**: Main script for running live gesture detection and classification
- **keras_model.h5**: Pre-trained Keras model for gesture classification
- **labels.txt**: List of gesture labels/classes supported by the model

### Installation & Usage
```bash
# Install dependencies
pip install opencv-python cvzone numpy

# Data Collection
python datacollection.py

# Real-time Detection
python test.py
```

## Challenges & Solutions
- **Hand Detection Accuracy**: Implemented CVZone's hand tracking module for robust hand detection in various lighting conditions
- **Gesture Classification**: Used deep learning with Keras to achieve high accuracy in gesture recognition
- **Real-time Performance**: Optimized the model and processing pipeline for smooth real-time detection

## Impact/Results
- Successfully recognizes 7 different sign language gestures with high accuracy
- Provides real-time feedback making it useful for sign language learning
- Extensible architecture allows for easy addition of new gestures
- Demonstrates practical application of computer vision in accessibility technology

## Links
- GitHub: [Add your GitHub link here]
- Live Demo: [Add your demo link here]
- Image: [Add your project image path here, e.g., /project2-image.jpg]
