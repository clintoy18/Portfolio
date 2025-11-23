import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = ["Developer", "Builder", "Problem Solver", "Creator"]; // Add/remove as you like

const Hero: React.FC = () => {
  const [typed, setTyped] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && typed.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at full word
      } else if (isDeleting && typed.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        const nextCharCount = isDeleting ? typed.length - 1 : typed.length + 1;
        setTyped(currentRole.slice(0, nextCharCount));
      }
    }, isDeleting ? 80 : 120); // Faster delete, natural typing speed

    return () => clearTimeout(timer);
  }, [typed, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [-120, 120, -120],
            y: [-80, 100, -80],
          }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [100, -140, 100],
            y: [60, -100, 60],
          }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I’m Clint
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700">
              Full-Stack{" "}
              <span className="text-blue-600 font-bold relative">
                {typed}
                <span className="animate-pulse">|</span>
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
              I build fast, meaningful, and human-centered web applications that solve real problems — from disaster response to sustainable living.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                See My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-gray-800 text-gray-800 font-semibold rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/path-to-your-photo.jpg" // Replace with your actual photo
                  alt="Clint Alonzo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Optional subtle ring animation */}
              <div className="absolute inset-0 -m-4 rounded-full border-4 border-blue-500/20 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;