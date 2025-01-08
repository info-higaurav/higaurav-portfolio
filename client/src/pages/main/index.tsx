import { motion } from "framer-motion";

export default function Main() {
  return (
    <section id="home" className="min-h-[calc(100vh-5rem)] w-full bg-background relative"> 
      {/* Hero Section */}
      <section className="h-[calc(100vh-5rem)] w-full flex items-center justify-center px-6 relative z-10"> 
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
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-6 w-full relative z-10"> 
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