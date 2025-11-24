// components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Preload sections (only for links that have them)
const preloadTechStack = () => import("./Skills"); // make sure these match your actual filenames
const preloadProjects = () => import("./Projects");
const preloadContact = () => import("./Contact");

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#skills", label: "Tech Stack", preload: preloadTechStack },
    { href: "#projects", label: "Projects", preload: preloadProjects },
    { href: "#contact", label: "Contact", preload: preloadContact },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const element = document.querySelector(href);
    if (!element) return;

    // Close mobile menu AFTER a short delay to allow scroll to start
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);

      // Small delay so the menu closes smoothly AFTER scroll begins
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Desktop: scroll immediately
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/60 backdrop-blur-2xl border-b border-white/30 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-4 py-3 sm:px-6 sm:py-5 lg:px-10 lg:py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="text-2xl font-semibold text-gray-800 hover:text-gray-900 transition"
          >
            Clint Alonzo
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-white/30 transition"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden overflow-hidden mt-4"
        >
          <div className="bg-white/70 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/40 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-8 py-4 text-gray-800 hover:text-blue-600 hover:bg-white/40 font-medium transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
