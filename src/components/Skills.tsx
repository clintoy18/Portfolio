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

const timeline = [
  {
    title: "Full Stack Software Engineer",
    organization: "Full Scale",
    year: "Soon",
  },
  {
    title: "Software Engineer Intern",
    organization: "Full Scale Teams PH",
    year: "Current",
  },
  {
    title: "Jumpstart Program",
    organization: "UC & Alliance Software Inc.",
    year: "2025",
  },
  {
    title: "ServiceNow Training",
    organization: "UC & ROCOCO Global Tech",
    year: "2025",
  },
  {
    title: "Introduction to Penetration Testing",
    organization: "Street Level Ministry",
    year: "2025",
  },
  {
    title: "BS Information Technology",
    organization: "University of Cebu",
    year: "BSIT",
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="px-6 pb-12 pt-24 sm:px-8">
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

        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
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
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
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

          <Card className="p-6 sm:p-8">
            <h3 className="text-3xl font-semibold tracking-normal text-zinc-950">
              Experience
            </h3>

            <div className="relative mt-8">
              <div className="absolute bottom-3 left-2.5 top-3 w-px bg-zinc-200" />

              <div className="grid gap-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={`${item.title}-${item.organization}`}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="relative grid grid-cols-[1.75rem_1fr_auto] gap-3"
                  >
                    <span
                      className={`mt-1.5 h-3.5 w-3.5 border border-zinc-300 bg-white ${
                        index === 0 ? "bg-zinc-950" : ""
                      }`}
                    />
                    <div>
                      <h4 className="text-base font-semibold leading-6 text-zinc-950 sm:text-lg">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-zinc-600">
                        {item.organization}
                      </p>
                    </div>
                    <span className="mt-1 h-fit rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600">
                      {item.year}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
