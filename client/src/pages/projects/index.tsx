import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const projects = [
    {
      title: "ProjectFlow",
      description: "To simplify project management while delivering powerful tools that transform how teams collaborate, plan, and achieve goals.",
      tech: ["React", "Node Js", "MongoDb", "Express Js"],
      github: "https://github.com/info-higaurav/project-management.git",
      demo: "https://projectflow-nu.vercel.app/",
      image: "./assets/projects/test2.jpg"
    },
    {
      title: "The Prime Infra",
      description: "At The Prime Infra, we're dedicated to revolutionizing the real estate industry through innovation, transparency, and exceptional service.",
      tech: ["React", "Node Js", "MongoDb", "Express Js"],
      github: "https://github.com/info-higaurav/theprimeinfra.git",
      demo: "https://theprimeinfra.vercel.app/",
      image: "./assets/projects/test1.jpg"
    }
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen bg-background py-24 overflow-hidden">
      <motion.div 
        className="max-w-[1400px] mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Showcasing innovative solutions and technical excellence
          </p>
        </motion.div>

        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-32"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`flex flex-col gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center`}
            >
              <motion.div 
                className="w-full lg:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="relative rounded-xl w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>
              </motion.div>

              <motion.div 
                className="w-full lg:w-1/2 space-y-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span 
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium
                               hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <Button 
                    variant="default"
                    className="hover:scale-105 transition-transform duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    View Code
                  </Button>
                  <Button 
                    variant="outline"
                    className="hover:scale-105 transition-transform duration-300"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    Live Demo
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
          >
            View All Projects
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
