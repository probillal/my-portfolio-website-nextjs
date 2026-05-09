"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
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

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home", icon: "home" },
    { name: "Skills", href: "#skills", id: "skills", icon: "psychology" },
    { name: "Tech", href: "#tech", id: "tech", icon: "code" },
    { name: "Quals", href: "#quals", id: "quals", icon: "history_edu" },
    { name: "Contact", href: "#contact", id: "contact", icon: "alternate_email" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-3 pb-safe z-50 flex justify-around items-center shadow-[0_-4px_10px_-1px_rgba(16,185,129,0.05)] rounded-t-2xl transition-colors duration-300">
      {navLinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={`flex flex-col items-center justify-center px-4 py-1 rounded-xl transition-all duration-300 ${
            activeSection === link.id
              ? "text-primary bg-emerald-50 dark:bg-emerald-950/30"
              : "text-slate-400 dark:text-slate-500"
          }`}
        >
          <span className="material-symbols-outlined">{link.icon}</span>
          <span className="text-[10px] font-semibold uppercase tracking-wider font-plus-jakarta">{link.name}</span>
        </Link>
      ))}
    </nav>
  );
}
