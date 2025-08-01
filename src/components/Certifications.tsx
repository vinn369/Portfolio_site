
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const certifications = [
    {
        title: "Google AI-ML Virtual Internship",
        description: "Certified for completing the AI-ML Virtual Internship by Google through Eduskills-AICTE.",
        year: "2024",
        url: "https://drive.google.com/file/d/1skkD5kk-ttHXRvWlyRtJmDn4gsa5TAn6/view?usp=drive_link"
    },
    {
        title: "AWS Essentials: Exploring Cloud Fundamentals",
        description: "Internship completion certificate on Amazon Web Services by National Small Industries Corporation (NSIC).",
        year: "2023",
        url: "https://drive.google.com/file/d/1yfnZH5__BfxpatZoG5f0lmFn1hvPuMHF/view?usp=drive_link"
    },
    {
        title: "Python for Data Science",
        description: "Earned NPTEL certification for completing the Data Science using Python course",
        year: "2023",
        url: "https://drive.google.com/file/d/1pbIwHevFe_WFL4a1jRQ4bCoOahd2KLzJ/view?usp=drive_link"
    },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 pt-32 md:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Certifications</h2>
        <div className="max-w-5xl mx-auto grid gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-4 md:p-6 rounded-lg border bg-card">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div className="flex items-start gap-3 md:gap-4 flex-1">
                        <Award className="h-5 w-5 md:h-6 md:w-6 text-primary mt-1 flex-shrink-0" />
                        <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-semibold text-card-foreground">{cert.title}</h3>
                            <p className="text-muted-foreground mt-1 text-sm md:text-base">{cert.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 sm:gap-2 flex-shrink-0 w-full sm:w-auto">
                        <Badge variant="secondary" className="text-xs md:text-sm">{cert.year}</Badge>
                        <Button asChild size="sm" variant="outline" className="flex-1 sm:flex-initial">
                          <a href={cert.url} target="_blank" rel="noopener noreferrer">
                            View
                            <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                          </a>
                        </Button>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* More Button */}
        <div className="text-center mt-6 md:mt-8">
          <Button asChild variant="outline" size="lg">
            <Link to="/certifications" className="inline-flex items-center gap-2">
              More...
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
