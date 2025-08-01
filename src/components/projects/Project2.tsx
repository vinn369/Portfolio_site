import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Project2 = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    // Use browser's back button to return to exact previous position
    window.history.back();
  };

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button variant="ghost" onClick={handleBackClick} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sign Language Detection System
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            A computer vision-based system for real-time detection and classification of hand gestures representing sign language words using deep learning.
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['Python 3.x', 'OpenCV', 'CVZone', 'NumPy', 'Keras/TensorFlow', 'Computer Vision'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="#" target="_blank" rel="noopener noreferrer">
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
              src="https://images.unsplash.com/photo-1594736797933-d0b22ce8f9bb?q=80&w=2071&auto=format&fit=crop"
              alt="Sign Language Detection System"
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
                This system provides real-time sign language gesture recognition using computer vision techniques. 
                The project includes both data collection capabilities for training new gestures and a live detection 
                system that can classify common sign language words like "Hello", "I love you", "No", "Okay", 
                "Please", "Thank you", and "Yes".
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">🤖 Detection Features</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Real-time hand gesture detection</strong> using webcam input</li>
                <li><strong className="text-foreground">Visual feedback</strong> of detected gestures overlaid on camera input</li>
                <li><strong className="text-foreground">Classification</strong> of 7 common sign language words</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">🔧 System Components</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">datacollection.py</strong> — Script for collecting gesture data from webcam and saving processed images for model training</li>
                <li><strong className="text-foreground">test.py</strong> — Main script for running live gesture detection and classification</li>
                <li><strong className="text-foreground">keras_model.h5</strong> — Pre-trained Keras model for gesture classification</li>
                <li><strong className="text-foreground">labels.txt</strong> — List of gesture labels/classes supported by the model</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">⚡ Installation & Usage</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Install dependencies:</strong></p>
                <code className="block bg-secondary/50 p-2 rounded text-sm">pip install opencv-python cvzone numpy</code>
                <p><strong className="text-foreground">Run data collection:</strong></p>
                <code className="block bg-secondary/50 p-2 rounded text-sm">python datacollection.py</code>
                <p><strong className="text-foreground">Start real-time detection:</strong></p>
                <code className="block bg-secondary/50 p-2 rounded text-sm">python test.py</code>
              </div>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">🛠️ Tech Stack</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold mb-2">Languages & Libraries</h3>
                <p className="text-muted-foreground">Python 3.x, OpenCV, CVZone, NumPy</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">AI/ML Framework</h3>
                <p className="text-muted-foreground">Keras/TensorFlow, Deep Learning</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Concepts</h3>
                <p className="text-muted-foreground">Computer Vision, Hand Tracking, Gesture Recognition</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">🎯 Challenges & Solutions</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Hand Detection Accuracy:</strong> Implemented CVZone's hand tracking module for robust detection in various lighting conditions</li>
                <li><strong className="text-foreground">Gesture Classification:</strong> Used deep learning with Keras to achieve high accuracy in gesture recognition</li>
                <li><strong className="text-foreground">Real-time Performance:</strong> Optimized the model and processing pipeline for smooth real-time detection</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">🔄 Extensibility</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Data Collection:</strong> Easy gesture data collection using datacollection.py</li>
                <li><strong className="text-foreground">Model Training:</strong> Retrain with new gesture data for additional signs</li>
                <li><strong className="text-foreground">Label Management:</strong> Update labels.txt to include new gesture labels</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">🎯 Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              This project demonstrates practical application of computer vision in accessibility technology. Successfully recognizes 7 different sign language gestures with high accuracy, providing real-time feedback that makes it useful for sign language learning and communication assistance.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project2;
