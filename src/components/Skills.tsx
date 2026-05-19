import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const skillCategories = [
  {
    title: "Frontend Craft",
    note: "Responsive interfaces with practical UI structure and clean Tailwind systems.",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend Systems",
    note: "Maintainable full-stack foundations using service-repository patterns.",
    skills: ["Laravel", "PHP", "C#", "ASP.NET", "MySQL", "SQL"],
  },
  {
    title: "Impact Work",
    note: "Projects shaped around public service, school workflows, and community needs.",
    skills: ["Git", "Vite", "AWS S3", "Vercel", "Clean Code"],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-zinc-300/70 pb-8 md:flex-row md:items-end">
          <div>
            <Badge>Capabilities</Badge>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-zinc-950 md:text-5xl">
              Lean stack. Strong execution.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-600">
            I focus on clean, maintainable code and useful products for
            real-world workflows, especially education, public service, and
            community impact.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="h-full p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  0{index + 1}
                </p>
                <h3 className="mt-6 text-xl font-semibold text-zinc-950">
                  {category.title}
                </h3>
                <p className="mt-3 min-h-20 text-sm leading-7 text-zinc-600">
                  {category.note}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} className="bg-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
