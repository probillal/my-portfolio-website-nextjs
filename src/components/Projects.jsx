"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      title: "Digitools platform modern website",
      description:
        "DigiTools Platform is a modern tools-based web application that provides a collection of useful digital utilities in a clean and user-friendly interface. ",
      image: "/digitools.jpg",
      tags: ["React.js", "Tailwind", "JavaScript(ES6+) "],
      gitHubLink: "https://github.com/probillal/digiTools-platform",
      liveLink: "https://digitools-platform-modern-website.netlify.app/",
    },
    {
      title: "AI Model Hub",
      description:
        "Futuristic data visualization platform using advanced AI models to predict market trends.",
      image: "/Ai.jpg",
      tags: ["React", "Tailwind Css", "DOM Manipulation"],
      gitHubLink: "https://github.com/probillal/ai-model-hub",
      liveLink: "https://ai-model-hub-subscription-website.netlify.app/",
    },
    {
      title: "Social Networking App",
      description:
        "A minimalist social media experience focused on privacy and user-to-user connections.",
      image: "/project-3.png",
      tags: ["React Native", "Firebase", "Node.js"],
      gitHubLink: "#",
      liveLink: "#",
    },
    {
      title: "Task Management System",
      description:
        "A collaborative project management tool with real-time updates and team collaboration features.",
      image: "/project-4.png",
      tags: ["Vue.js", "Express", "MongoDB"],
      gitHubLink: "#",
      liveLink: "#",
    },
    {
      title: "Weather Analytics App",
      description:
        "Advanced weather forecasting application with historical data analysis and predictive modeling.",
      image: "/project-5.png",
      tags: ["React", "D3.js", "Weather API"],
      gitHubLink: "#",
      liveLink: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing creative work and professional achievements.",
      image: "/project-6.png",
      tags: ["Next.js", "Framer Motion", "Tailwind"],
      gitHubLink: "#",
      liveLink: "#",
    },
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section id="projects" className="mb-(--site-space-xl) pt-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-headline-lg font-headline-lg text-green-500 mb-4">
            Featured Projects
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            A selection of my recent work, ranging from complex enterprise
            systems to elegant consumer applications.
          </p>
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-primary font-bold hover:underline flex items-center gap-2"
        >
          {showAll ? "Show Less Projects" : "View All Projects"}{" "}
          <span className="material-symbols-outlined">
            {showAll ? "expand_less" : "arrow_forward"}
          </span>
        </button>
      </div>

      <div
        className={`grid gap-8 ${showAll ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-3"}`}
      >
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-surface-container rounded-3xl border border-outline-variant overflow-hidden soft-lift"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <button className="bg-white text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                  View Case Study{" "}
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </button>
              </div>
            </div>
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-secondary-container text-primary rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-headline-md font-headline-md text-on-background mb-3">
                {project.title}
              </h3>
              <p className="text-caption text-on-surface-variant leading-relaxed">
                {project.description}
              </p>
              <div className="mt-6 flex gap-4 justify-between">
                <a
                  href={project.gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-primary font-bold hover:underline">
                    Github
                  </button>
                </a>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-primary font-bold hover:underline">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
