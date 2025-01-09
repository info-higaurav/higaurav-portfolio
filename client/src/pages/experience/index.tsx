import { motion, useInView } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useRef } from "react";

export default function Experience() {
  const experiences = [
    {
      company: "Doon Project",
      role: "Full Stack Developer", 
      period: "Oct 2023 - Present",
      description: "Leading full-stack development initiatives and implementing modern web solutions.",
      responsibilities: [
        "Developing scalable web applications using React and Node.js",
        "Implementing responsive UI designs with Tailwind CSS",
        "Building RESTful APIs and managing database", 
        "Leading technical discussions"
      ]
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className=" bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      <div className="relative max-w-[1000px] mx-auto px-6 py-24">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <motion.div 
          ref={containerRef}
          className="relative before:content-[''] before:absolute before:left-1/3 before:ml-4 before:w-0.5 before:h-full before:bg-primary/20 md:before:block before:hidden"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-16 last:mb-0"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }
                }
              }}
            >
              <div className="flex flex-col md:flex-row gap-8 relative">
                {/* Left side - Timeline */}
                <div className="md:w-1/3 text-right space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{exp.company}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{exp.period}</p>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/3 ml-4 w-3 h-3 bg-primary rounded-full transform -translate-x-1.5 mt-2.5">
                  <div className="absolute w-8 h-0.5 bg-primary/20 left-full top-1/2 -translate-y-1/2" />
                </div>

                {/* Right side - Content */}
                <div className="md:w-2/3 md:pl-12">
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">{exp.role}</CardTitle>
                      <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="pl-2">{resp}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}