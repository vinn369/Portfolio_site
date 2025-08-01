
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// Local project data structure
const projectsData = [
  {
    id: "project-1",
    title: "Image Captioning Generator with Audio Integration",
    description: "This project uses a deep learning-based system using Xception and LSTM to generate image captions and convert them to speech using gTTS for enhanced accessibility.",
    imageUrl: "public/project1.png",
  },
  {
    id: "project-2", 
    title: "Sign Language Detection System",
    description: "This project uses a real-time system using Python, OpenCV, MediaPipe, and TensorFlow to detect and translate sign language gestures into readable text for improved accessibility.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: "project-3",
    title: "Project 3 Title", 
    description: "Add your project description here - one line summary of what this project does.",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
  },
];

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

const projectCardVariants = {
  initial: {
    scale: 1,
    y: 0,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
  },
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  }
};

const ProjectCard = ({ project, api }: { project: Project; api: CarouselApi | undefined }) => {
  const navigate = useNavigate();

  const handleViewProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigate(`/project/${project.id}`);
  };

  return (
  <motion.div
    variants={projectCardVariants}
    initial="initial"
    whileHover="hover"
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="relative overflow-hidden rounded-lg group aspect-video cursor-pointer"
    onClick={(e) => {
      e.stopPropagation();
      handleViewProject(e);
    }}
  >
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-lg"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 md:from-black/70 via-black/40 md:via-black/20 to-transparent" />

    {/* Navigation areas - Hidden on mobile to prevent conflicts with touch gestures */}
    <div 
        className="absolute left-0 top-0 h-full w-1/2 z-10 items-center justify-start p-6 group/nav cursor-arrow-left hidden md:flex"
        onClick={(e) => { e.stopPropagation(); api?.scrollPrev(); }}
    >
        <motion.div 
        >
        </motion.div>
    </div>
    <div 
        className="absolute right-0 top-0 h-full w-1/2 z-10 items-center justify-end p-6 group/nav cursor-arrow-right hidden md:flex"
        onClick={(e) => { e.stopPropagation(); api?.scrollNext(); }}
    >
        <motion.div>
        </motion.div>
    </div>

    <div className="absolute bottom-0 md:bottom-0 left-0 md:left-0 right-0 md:right-auto p-6 md:p-8 w-full z-20 flex items-end md:items-end justify-center md:justify-start" onClick={(e) => e.stopPropagation()}>
      <div className="text-center md:text-left w-full">
        <motion.h3
          variants={{ initial: { y: 0, opacity: 1 }, hover: { y: 0, opacity: 1 } }}
          className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-2 drop-shadow-lg"
        >
          {project.title}
        </motion.h3>
        <motion.p
          variants={{ initial: { y: 0, opacity: 1 }, hover: { y: 0, opacity: 1 } }}
          transition={{ delay: 0.1 }}
          className="text-white text-opacity-90 mb-4 text-sm md:text-base drop-shadow-md hidden md:block"
        >
          {project.description}
        </motion.p>
        <motion.div
          variants={{ initial: { y: 0, opacity: 1 }, hover: { y: 0, opacity: 1 } }}
          transition={{ delay: 0.2 }}
          className="hidden md:block"
        >
          <Button 
            variant="secondary" 
            size="lg" 
            className="cursor-pointer w-full sm:w-auto"
            onClick={handleViewProject}
          >
            View Project
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  </motion.div>
  );
};


const Projects = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])


  return (
    <section id="projects" className="py-16 md:py-24 pt-32 md:pt-32 container mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
  Projects/Experience
</h2>      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {projectsData.map((project) => (
            <CarouselItem key={project.id}>
              <ProjectCard project={project} api={api} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {Array.from({ length: count }).map((_, index) => (
              <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 w-8 md:w-10 rounded-full transition-colors ${index === current ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
              />
          ))}
      </div>
      <div className="text-center mt-12 md:mt-16">
        <a
          href="#skills"
          className="inline-flex items-center gap-2 font-medium text-base md:text-lg hover:text-primary transition-colors"
        >
          My Skills <ArrowDown className="h-4 w-4 md:h-5 md:w-5" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
