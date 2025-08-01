
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Server,
  GitBranch,
  Github,
  Sigma,
  BrainCircuit,
  Table,
  Camera,
  Volume2,
  Users,
  Lightbulb,
  Repeat,
  ArrowDown,
} from "lucide-react";

const skills = [
  { name: "Python", icon: Code },
  { name: "SQL", icon: Database },
  { name: "HTML", icon: Code },
  { name: "CSS", icon: Code },
  { name: "JavaScript", icon: Code },
  { name: "React.js", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
  { name: "Numpy", icon: Sigma },
  { name: "TensorFlow", icon: BrainCircuit },
  { name: "Pandas", icon: Table },
  { name: "OpenCV", icon: Camera },
  { name: "gTTS", icon: Volume2 },
  { name: "Team Collaboration", icon: Users },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Adaptable", icon: Repeat },
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 pt-32 md:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills</h2>
          <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of the technologies and skills I work with:
          </p>
        </div>
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, zIndex: 10, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Badge variant="secondary" className="px-3 py-2 md:px-4 md:py-3 text-sm md:text-base flex items-center gap-2 cursor-default shadow-sm">
                <skill.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <span className="font-medium">{skill.name}</span>
              </Badge>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12 md:mt-16">
          <a
            href="#certifications"
            className="inline-flex items-center gap-2 font-medium text-base md:text-lg hover:text-primary transition-colors"
          >
            Certifications <ArrowDown className="h-4 w-4 md:h-5 md:w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
