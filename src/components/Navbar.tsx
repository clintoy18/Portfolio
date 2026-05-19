import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

const preloadProjects = () => import("./Projects");
const preloadContact = () => import("./Contact");

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Work", preload: preloadProjects },
  { href: "#contact", label: "Contact", preload: preloadContact },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-lg border px-4 py-3 transition",
          isScrolled
            ? "border-zinc-200/80 bg-white/75 shadow-[0_18px_60px_rgba(24,24,27,0.12)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="text-sm font-semibold tracking-[0.22em] text-zinc-950"
        >
          CLINT
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={link.preload}
              onFocus={link.preload}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-950 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden md:inline-flex"
        >
          <Button className="h-9 px-4">Start a project</Button>
        </a>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 bg-white/70 text-zinc-900 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-lg border border-zinc-200 bg-white/90 p-2 shadow-2xl backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={link.preload}
              onFocus={link.preload}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block rounded-md px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
