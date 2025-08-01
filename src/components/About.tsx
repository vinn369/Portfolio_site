
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const About = () => {
  return (
    <>
      <section id="about" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1 order-2 md:order-1 hidden md:block"
            >
              <img
                src="/aboutpic.jpeg"
                alt="Sai Vignesh"
                className="rounded-lg w-full h-auto object-cover max-w-md mx-auto md:max-w-none"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-full md:col-span-2 order-1 md:order-2 text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I’m Nemali Sai Vignesh, a B.Tech graduate in Information Technology with a strong foundation in software development, machine learning, and web technologies. I have hands-on experience in Python, Java, SQL, HTML, CSS, and JavaScript, and have built real-world projects involving machine learning, computer vision, and full-stack systems using tools like TensorFlow, OpenCV, MySQL, and Git. From developing an image captioning system with speech output to building a smart school management portal and a real-time sign language detection tool, I bring a passion for building impactful tech solutions. I’m now actively seeking opportunities to apply my skills in dynamic and collaborative development environments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="text-center py-12 md:py-16">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 font-medium text-base md:text-lg hover:text-primary transition-colors"
        >
          My Projects <ArrowDown className="h-4 w-4 md:h-5 md:w-5" />
        </a>
      </div>
    </>
  );
};

export default About;
