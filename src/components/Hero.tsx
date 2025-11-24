import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Hero: React.FC = () => {
  const role = "Developer";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let index = 0;
    let forward = true;

    const interval = setInterval(() => {
      if (forward) {
        setTyped(role.slice(0, index + 1));
        index++;
        if (index === role.length) forward = false;
      } else {
        index--;
        setTyped(role.slice(0, index));
        if (index === 0) forward = true;
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Animated Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [-100, 100, -100], y: [-50, 80, -50] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-5 w-72 h-72 sm:w-96 sm:h-96  bg-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [100, -100, 100], y: [50, -80, 50] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-5 w-64 h-64 sm:w-80 sm:h-80 bg-purple-400/5 rounded-full blur-3xl"
        />
      </div>

      {/* Main layout */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 sm:px-6 md:px-12">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I’m Clint
          </h1>

          <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Full-Stack <span className="text-blue-500">{typed}</span>
          </h2>

          <p className="text-lg sm:text-lg md:text-xl text-gray-600 mb-8">
            Passionate about building modern applications and digital solutions
            that make a real impact.
          </p>

          {/* 🔥 Button + Socials grouped */}
          <div className="flex flex-col items-center md:items-start gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-block px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-all duration-300"
            >
              View Work
            </a>

            <div className="flex gap-6">
              <a
                href="https://github.com/clintoy18"
                target="_blank"
                className="text-gray-500 hover:text-gray-800 transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/clint-alonzo-a4737b2b1"
                target="_blank"
                className="text-gray-500 hover:text-gray-800 transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center mb-8 md:mb-0"
        >
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg flex items-center justify-center bg-gray-50">
            <img
              src="https://thriftit-bucket-s3.s3.ap-southeast-1.amazonaws.com/alonzo8r.JPG"
              alt="Clint Alonzo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
