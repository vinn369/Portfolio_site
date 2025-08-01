import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink, ArrowLeft, Calendar, Building } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const allCertifications = [
  {
    title: "Google AI-ML Virtual Internship",
    description: "Certified for completing the AI-ML Virtual Internship by Google through Eduskills-AICTE. Gained hands-on experience with machine learning algorithms, neural networks, and AI model development.",
    year: "2024",
    organization: "Google (via Eduskills-AICTE)",
    skills: ["Machine Learning", "Neural Networks", "AI Development", "Python"],
    url: "https://drive.google.com/file/d/1skkD5kk-ttHXRvWlyRtJmDn4gsa5TAn6/view?usp=drive_link"
  },
  {
    title: "AWS Essentials: Exploring Cloud Fundamentals",
    description: "Internship completion certificate on Amazon Web Services by National Small Industries Corporation (NSIC). Covered cloud computing fundamentals, AWS services, and cloud architecture principles.",
    year: "2023",
    organization: "National Small Industries Corporation (NSIC)",
    skills: ["AWS", "Cloud Computing", "Infrastructure", "DevOps"],
    url: "https://drive.google.com/file/d/1yfnZH5__BfxpatZoG5f0lmFn1hvPuMHF/view?usp=drive_link"
  },
  {
    title: "Python for Data Science",
    description: "Earned NPTEL certification for completing the Data Science using Python course. Comprehensive coverage of data analysis, visualization, and statistical computing using Python libraries.",
    year: "2023",
    organization: "NPTEL",
    skills: ["Python", "Data Science", "Pandas", "NumPy", "Matplotlib"],
    url: "https://drive.google.com/file/d/1pbIwHevFe_WFL4a1jRQ4bCoOahd2KLzJ/view?usp=drive_link"
  },
  // Add more certifications here as needed
  {
    title: "Additional Certification Example",
    description: "Add more certifications as you earn them. This is just a placeholder to show the expanded view format.",
    year: "2024",
    organization: "Example Organization",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    url: "#"
  }
];

const CertificationsPage = () => {
  const navigate = useNavigate();
  
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
            Back 
          </Button>
        </motion.div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Certifications & Achievements
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive collection of my professional certifications, courses, and learning achievements
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid gap-8 md:gap-10"
        >
          {allCertifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {/* Left: Main Content */}
                <div className="md:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-card-foreground mb-2">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-4 text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          <span className="text-sm">{cert.organization}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-3">Skills & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Action & Year */}
                <div className="flex flex-col justify-between">
                  <div className="text-center md:text-right mb-4">
                    <Badge variant="outline" className="text-lg font-bold px-4 py-2">
                      {cert.year}
                    </Badge>
                  </div>
                  
                  <Button asChild className="w-full">
                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                      View Certificate
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 p-8 bg-secondary/20 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always expanding my skills and knowledge. Check back regularly for new certifications and achievements as I continue my professional development journey.
          </p>
          <Button asChild size="lg">
            <Link to="/#contact">
              Get in Touch
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificationsPage;
