import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Project3 = () => {
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
            Project 3 Title
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Add your project description here - one line summary of what this project does.
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['Tech1', 'Tech2', 'Tech3', 'Tech4'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop"
            alt="Project 3"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Project Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg max-w-none dark:prose-invert"
        >
          <h2>Project Overview</h2>
          <p>
            Add your detailed project overview here. Explain what the project does, why you built it, and what problems it solves.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>Feature 1 - describe what it does</li>
            <li>Feature 2 - describe what it does</li>
            <li>Feature 3 - describe what it does</li>
          </ul>

          <h2>Technical Implementation</h2>
          <p>
            Describe the technical aspects of your project. What technologies did you use and why? What was the architecture like?
          </p>

          <h2>Challenges & Solutions</h2>
          <p>
            What challenges did you face while building this project? How did you overcome them? What did you learn?
          </p>

          <h2>Results & Impact</h2>
          <p>
            What were the results of this project? How did it impact users or solve the problem you set out to address?
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Project3;
