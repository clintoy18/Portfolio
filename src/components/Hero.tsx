import React, { useEffect, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Hero: React.FC = () => {
  const roles = [
    "Laravel and PHP developer",
    "C# and ASP.NET builder",
    "full-stack developer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 sm:px-8"
    >
      <div className="absolute inset-0 -z-10 opacity-80">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-8 right-8 h-80 w-80 rounded-full bg-zinc-300/50 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="mb-6 bg-white/70 text-zinc-700">
            Cebu City, Philippines - open for collaboration
          </Badge>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-normal text-zinc-950 sm:text-6xl lg:text-7xl">
            Clint Alonzo builds clean full-stack systems for real community
            impact.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
            A Cebu-based {roles[roleIndex]} focused on Laravel, PHP, C#,
            ASP.NET, MySQL, SQL, Tailwind CSS, and maintainable
            service-repository architecture.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects">
              <Button>
                View selected work <ArrowUpRight size={16} />
              </Button>
            </a>
            <a href="mailto:aicsalonzo@gmail.com">
              <Button variant="secondary">
                <Mail size={16} /> Email me
              </Button>
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/clintoy18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-zinc-500 transition hover:text-zinc-950"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/clint-alonzo-a4737b2b1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-zinc-500 transition hover:text-zinc-950"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-white/80 bg-[linear-gradient(135deg,#f8fafc,#a1a1aa_45%,#18181b)] p-2 shadow-[0_30px_90px_rgba(24,24,27,0.25)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.75)_38%,transparent_58%)] opacity-60" />
          <img
            src="https://thriftit-bucket-s3.s3.ap-southeast-1.amazonaws.com/alonzo8r.JPG"
            alt="Portrait of Clint Alonzo"
            className="relative h-full w-full rounded-md object-cover grayscale"
          />
          <div className="absolute bottom-4 left-4 right-4 rounded-md border border-white/30 bg-white/70 p-4 text-sm text-zinc-700 shadow-xl backdrop-blur-xl">
            <p className="font-semibold text-zinc-950">Public-service tech</p>
            <p className="mt-1">
              Clean code, practical workflows, community-minded products.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
