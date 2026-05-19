import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-zinc-300/70 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Clint Alonzo. Built with React,
          TypeScript, and care for the details.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/clintoy18"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-zinc-500 transition hover:text-zinc-950"
          >
            <Github size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/clint-alonzo-a4737b2b1/?originalSubdomain=ph"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-zinc-500 transition hover:text-zinc-950"
          >
            <Linkedin size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
