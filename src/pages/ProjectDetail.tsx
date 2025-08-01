import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Project1 from "@/components/projects/Project1";
import Project2 from "@/components/projects/Project2";
import Project3 from "@/components/projects/Project3";

const ProjectDetail = () => {
  const { id } = useParams();

  const renderProject = () => {
    switch (id) {
      case "project-1":
        return <Project1 />;
      case "project-2":
        return <Project2 />;
      case "project-3":
        return <Project3 />;
      default:
        return (
          <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/" className="text-primary hover:underline flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Go back to homepage
            </Link>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {renderProject()}
    </motion.div>
  );
};

export default ProjectDetail;
