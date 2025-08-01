import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Project1 = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    // Use browser's back button to return to exact previous position
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-8 md:py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button variant="ghost" onClick={handleBackClick} className="flex items-center gap-2 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Image Captioning Generator with Audio Integration
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl">
            Built a deep learning-based system using Xception and LSTM to generate image captions and convert them to speech using gTTS for enhanced accessibility.
          </p>
          
          {/* Tech Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start"
          >
            {['Python', 'TensorFlow', 'CNN', 'LSTM', 'gTTS', 'NumPy', 'Matplotlib'].map((tech, index) => (
              <motion.span 
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-full text-sm font-medium transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </a>
            </Button>
            <Button variant="secondary" asChild size="lg" className="w-full sm:w-auto">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/proj1.png"
              alt="Image Captioning Generator"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>

        {/* Project Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-12"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                This project integrates deep learning, computer vision, and speech synthesis to describe the content of an image and read it aloud. It follows an encoder-decoder architecture, where the encoder processes the image and the decoder generates the caption.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">🧠 Model Architecture</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Xception CNN</strong> is used as the encoder to extract high-level features from the input image.</li>
                <li><strong className="text-foreground">LSTM (Long Short-Term Memory)</strong> network serves as the decoder to convert image features into meaningful sentences.</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">📁 Dataset Used</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Flickr8k Dataset</strong> — Contains 8,000 images with 5 human-annotated captions per image.</li>
                <li>Captions are preprocessed and tokenized before being fed into the LSTM model.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">🔊 Audio Integration</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>After generating the text caption, Google Text-to-Speech (gTTS) is used to convert the sentence into spoken output.</li>
                <li>This improves accessibility for users with visual impairments or reading challenges.</li>
              </ul>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">🛠️ Tech Stack</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold mb-2">Languages & Libraries</h3>
                <p className="text-muted-foreground">Python, TensorFlow, gTTS, NumPy, Matplotlib</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools</h3>
                <p className="text-muted-foreground">Google Colab, VS Code</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Concepts</h3>
                <p className="text-muted-foreground">CNN, LSTM, Tokenization, Speech Synthesis</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">🎯 Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              This project demonstrates the potential of combining vision and language AI to improve accessibility tools. It also reflects real-world applications like assistive technologies, smart photo albums, or narration systems.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project1;