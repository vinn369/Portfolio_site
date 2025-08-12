
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-4 right-4 z-50"
      style={{ position: 'fixed' }} // Ensure it stays fixed on mobile
    >
      <div className="bg-background/45 backdrop-blur-md border rounded-2xl shadow-lg px-6 sm:px-8 lg:px-12 mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-6 md:py-8">
          <a href="#" className="text-xl font-bold" style={{ fontFamily: 'Geostar, serif' }}>NSV</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.a 
              href="#about" 
              className="text-muted-foreground hover:text-foreground transition-colors origin-center"
              whileHover={{ 
                scale: 1.2,
                y: -2,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#projects" 
              className="text-muted-foreground hover:text-foreground transition-colors origin-center"
              whileHover={{ 
                scale: 1.2,
                y: -2,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.a>
            <motion.a 
              href="#skills" 
              className="text-muted-foreground hover:text-foreground transition-colors origin-center"
              whileHover={{ 
                scale: 1.2,
                y: -2,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Skills
            </motion.a>
            <motion.a 
              href="#certifications" 
              className="text-muted-foreground hover:text-foreground transition-colors origin-center"
              whileHover={{ 
                scale: 1.2,
                y: -2,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Certifications
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-muted-foreground hover:text-foreground transition-colors origin-center"
              whileHover={{ 
                scale: 1.2,
                y: -2,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </nav>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-6 border-t rounded-b-2xl"
          >
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#certifications" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Certifications
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
