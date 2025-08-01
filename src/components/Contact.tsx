import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-16 container mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-12 md:mb-16 hidden md:block">
<h2 className="text-4xl md:text-6xl font-bold tracking-tight">
  Get in touch
</h2>      </div>
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Let's Connect!</h2>
          <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-md mx-auto lg:mx-0">
           I'm always eager to connect with like-minded professionals and explore new opportunities. As a passionate and motivated fresher, I'm open to roles where I can contribute, learn, and grow with you people. I'd love to be a part of your team.
          </p>
          <div className="mt-8">
            <h3 className="text-lg md:text-xl font-bold">Connect with me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
              <a href="https://www.linkedin.com/in/sai-vignesh-nemali-a912492bb/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground hover:text-foreground transition-colors p-3 rounded-lg hover:bg-muted/50">
                <Linkedin size={20} className="md:w-6 md:h-6" />
                <span className="text-sm md:text-base">Sai Vignesh Nemali</span>
              </a>
              <a href="mailto:namalivignesh15@gmail.com" className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground hover:text-foreground transition-colors p-3 rounded-lg hover:bg-muted/50">
                <Mail size={20} className="md:w-6 md:h-6" />
                <span className="text-sm md:text-base">namalivignesh15@gmail.com</span>
              </a>
              <a href="https://github.com/vinn369" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground hover:text-foreground transition-colors p-3 rounded-lg hover:bg-muted/50">
                <Github size={20} className="md:w-6 md:h-6" />
                <span className="text-sm md:text-base">vinn369</span>
              </a>
              <a href="tel:+919849371756" className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground hover:text-foreground transition-colors p-3 rounded-lg hover:bg-muted/50">
                <Phone size={20} className="md:w-6 md:h-6" />
                <span className="text-sm md:text-base">+91 9849371756</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form
  action="https://formspree.io/f/meokkrkl" // <-- replace with your Formspree endpoint
  method="POST"
  className="space-y-6"
>
  <div className="space-y-2">
    <Label htmlFor="name">Name</Label>
    <Input id="name" name="name" type="text" placeholder="Your name" className="h-12" required />
  </div>
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" name="email" type="email" placeholder="your.email@gmail.com" className="h-12" required />
  </div>
  <div className="space-y-2">
    <Label htmlFor="message">Message</Label>
    <Textarea id="message" name="message" placeholder="Tell me about your project or just say hello..." className="min-h-[120px] resize-none" required />
  </div>
  <Button type="submit" className="w-full h-12" size="lg">Send Message</Button>
</form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
