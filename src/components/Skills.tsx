import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML + CSS", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Laravel", "PHP", "ASP.NET", "Node.js"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "MySQL", "SQL", "Prisma"],
    },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // Animation variants for individual cards
  // Animation variants for individual cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring", // TypeScript now sees this as the literal "spring"
        stiffness: 100,
        damping: 12,
      },
    },
  } as const; // <--- Add this right here

  return (
    <section
      id="skills"
      className="relative py-24 bg-[#FCFCFC] overflow-hidden"
    >
      {/* Decorative subtle background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gray-200 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-slate-100 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900"
          >
            Tech Stack
          </motion.h2>
          <div className="mt-4 h-1 w-12 bg-gray-900 mx-auto rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-auto"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-3xl border border-gray-200/60 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-2xl hover:shadow-gray-200/40 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                  {category.title}
                </h3>
                <div className="h-[1px] flex-grow ml-4 bg-gray-100" />
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-5 py-2.5 bg-white border border-gray-100 rounded-2xl text-[13px] font-semibold text-gray-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-gray-900 hover:text-gray-900 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Minimalist dot pattern for texture */}
              <div className="absolute bottom-4 right-4 grid grid-cols-2 gap-1 opacity-20">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-gray-400 rounded-full" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
