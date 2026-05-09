"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Detect active section on scroll
    const sections = ["home", "skills", "tech", "quals", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    // Theme initialization
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Tech", href: "#tech", id: "tech" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Quals", href: "#quals", id: "quals" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-slate-100 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary-container">
            <Image
              src="/profile-nav.png"
              alt="Himanshu Sahani Profile"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">
            DevPortfolio
          </span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              prefetch={false}
              className={`${
                activeSection === link.id
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-slate-600 dark:text-slate-400 font-medium hover:text-primary dark:hover:text-primary transition-colors"
              } transition-all duration-200`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="material-symbols-outlined text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {theme === "light" ? "dark_mode" : "light_mode"}
        </motion.button>
      </div>
    </header>
  );
}
