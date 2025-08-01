# Image Captioning Generator with Audio Integration

## Description
Built a deep learning-based system using Xception and LSTM to generate image captions and convert them to speech using gTTS for enhanced accessibility.

## Technologies
- Python
- TensorFlow
- CNN
- LSTM
- gTTS
- NumPy
- Matplotlib

## Project Overview
This project integrates deep learning, computer vision, and speech synthesis to describe the content of an image and read it aloud. It follows an encoder-decoder architecture, where the encoder processes the image and the decoder generates the caption.

## Model Architecture
- Xception CNN is used as the encoder to extract high-level features from the input image.
- LSTM (Long Short-Term Memory) network serves as the decoder to convert image features into meaningful sentences.

## Dataset Used
- Flickr8k Dataset — Contains 8,000 images with 5 human-annotated captions per image.
- Captions are preprocessed and tokenized before being fed into the LSTM model.

## Audio Integration
- After generating the text caption, Google Text-to-Speech (gTTS) is used to convert the sentence into spoken output.
- This improves accessibility for users with visual impairments or reading challenges.

## Tech Stack
- Languages & Libraries: Python, TensorFlow, gTTS, NumPy, Matplotlib
- Tools: Google Colab, VS Code
- Concepts: CNN, LSTM, Tokenization, Speech Synthesis, Caption Generation

## Impact
This project demonstrates the potential of combining vision and language AI to improve accessibility tools. It also reflects real-world applications like assistive technologies, smart photo albums, or narration systems.

## Links
- GitHub: [Add your GitHub link here]
- Live Demo: [Add your demo link here]
- Image: [Add your project image path here, e.g., /project1-image.jpg]
