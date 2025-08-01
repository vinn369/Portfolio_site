
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  fullDescription: string;
  githubUrl?: string;
  liveDemoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Image Captioning Generator with Audio Integration",
    description: "Built a deep learning-based system using Xception and LSTM to generate image captions and convert them to speech using gTTS for enhanced accessibility.",
    technologies: ["Python", "TensorFlow", "CNN", "LSTM", "gTTS", "NumPy", "Matplotlib"],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "This project integrates deep learning, computer vision, and speech synthesis to describe the content of an image and read it aloud. It follows an encoder-decoder architecture, where the encoder processes the image and the decoder generates the caption. The Xception CNN is used as the encoder to extract high-level features from the input image, while an LSTM (Long Short-Term Memory) network serves as the decoder to convert image features into meaningful sentences. The project uses the Flickr8k Dataset containing 8,000 images with 5 human-annotated captions per image. After generating the text caption, Google Text-to-Speech (gTTS) converts the sentence into spoken output, improving accessibility for users with visual impairments or reading challenges. This demonstrates the potential of combining vision and language AI to improve accessibility tools and reflects real-world applications like assistive technologies, smart photo albums, or narration systems.",
    githubUrl: "https://github.com",
    liveDemoUrl: "#",
  },
  {
    id: "project-2",
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my design and development skills.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2071&auto=format&fit=crop",
    fullDescription: "You are looking at it! This project was a deep dive into minimalist design, animations, and front-end best practices. I wanted to create a site that was not only visually appealing but also performant and accessible. I used Framer Motion for the animations to add a layer of polish and interactivity.",
    githubUrl: "https://github.com",
    liveDemoUrl: "#",
  },
  {
    id: "project-3",
    title: "Task Management App",
    description: "A simple and intuitive app to manage daily tasks.",
    technologies: ["Vue.js", "Firebase", "CSS3"],
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
    fullDescription: "This was a personal project to learn Vue.js and Firebase. I built a clean and simple task management application that allows users to create, update, and delete tasks. It features real-time database updates with Firebase, a drag-and-drop interface for reordering tasks, and a clean, responsive design.",
    githubUrl: "https://github.com",
    liveDemoUrl: "#",
  },
];
