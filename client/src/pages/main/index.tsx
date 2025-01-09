import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Main() {
  return (
    <section id="home" className="min-h-screen w-full bg-background relative"> 
      {/* Hero Section */}
      <section className="min-h-[90vh] w-full flex items-center justify-center px-6 relative z-10"> 
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center w-full"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-light tracking-tight mb-8 w-full select-text" 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Software Engineering
            <span className="block mt-2 text-muted-foreground select-text">& Architecture</span> */}
             Full Stack Developer
             <span className="block mt-2 text-muted-foreground select-text">& Designer</span>
          </motion.h1>
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed w-full select-text" 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Specialized in building scalable enterprise applications 
            with modern technologies and best practices
          </motion.p>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-6 w-full relative z-10"> 
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Add your expertise content here */}
        </motion.div>
      </section>
    </section>
  );
}