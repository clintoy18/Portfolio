// components/Footer.tsx
import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-gray-200 bg-white/30 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-10 text-center">
        <p className="text-sm text-gray-600 font-light tracking-wide">
          © {new Date().getFullYear()} Clint Alonzo. Crafted with care.
        </p>

        {/* Optional: tiny social icons (uncomment if you want) */}
        <div className="mt-6 flex justify-center gap-8">
          <a href="https://github.com/clintoy18" className="text-gray-500 hover:text-gray-800 transition">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/clint-alonzo-a4737b2b1/?originalSubdomain=ph" className="text-gray-500 hover:text-gray-800 transition">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Subtle bottom gradient fade (optional luxury touch) */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    </footer>
  );
};

export default Footer;