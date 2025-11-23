// components/Skills.tsx
import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const skills = [
    { name: "React", level: 60 },
    { name: "TypeScript", level: 60 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Laravel", level: 80 },
    { name: "ASP.Net", level: 75 },
    { name: "PHP", level: 90 },

  ];

  return (
    <section id="skills" className="py-24 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light text-center text-gray-800 mb-16">Skills</h2>

        <div className="max-w-3xl mx-auto space-y-10">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-gray-600 to-gray-800"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 