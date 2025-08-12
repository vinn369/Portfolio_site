
import { motion } from "framer-motion";
import { Send, FileText, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center container mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-12 overflow-x-hidden max-w-full">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center md:text-left order-2 md:order-1"
        >
           <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6" font-family="Merriweather, sans-serif">
            Hi, I am
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-bold tracking-tighter mb-4">
            Nemali Sai Vignesh 
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6">
            Tech Enthusiast & Aspiring software Engineer
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#contact">
                Connect With Me
                <Send className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <a href="https://drive.google.com/file/d/1yUWk2VgfqVw_y6rUHjTuPQTGliLWK9qU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                My Resume
                <FileText className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          
          <div className="mt-8 mb-16 md:mb-8 text-center md:text-left">
            <a
              href="#about"
              className="inline-flex items-center gap-2 font-medium text-base md:text-lg hover:text-primary transition-colors"
            >
              Know More About Me <ArrowDown className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative">
            <img
              src="/photopfp.png"
              alt="Sai Vignesh"
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-contain max-w-[90vw]"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 md:h-40 lg:h-48 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-t from-background via-background/60 via-background/30 via-background/10 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
