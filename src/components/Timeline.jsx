"use client";

import { motion } from "framer-motion";

export default function Timeline() {
  const experiences = [
    {
      period: "2021 - PRESENT",
      title: "Senior Full Stack Developer",
      company: "TechNova Solutions",
      description: "Leading a team of 5 developers to modernize legacy architecture, resulting in a 40% increase in platform speed."
    },
    {
      period: "2018 - 2021",
      title: "Software Engineer",
      company: "Global Innovate Corp",
      description: "Developed core customer-facing features using React and Node.js for a platform serving 1M+ users."
    }
  ];

  const education = [
    {
      type: "Academic",
      icon: "school",
      title: "M.S. in Computer Science",
      institution: "University of Engineering",
      description: "Focus on Distributed Systems and Artificial Intelligence."
    },
    {
      type: "Certification",
      icon: "workspace_premium",
      title: "AWS Solutions Architect",
      institution: "Amazon Web Services",
      description: ""
    }
  ];

  return (
    <section className="mb-[var(--site-space-xl)] pt-16" id="quals">
      <h2 className="text-headline-lg font-headline-lg text-on-background mb-[var(--site-space-lg)]">Experience & Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Experience */}
        <div className="space-y-10 relative">
          <div className="absolute left-4 top-2 bottom-0 w-px bg-outline-variant"></div>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12"
            >
              <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center border-4 border-surface">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <span className="text-label-md text-primary font-bold">{exp.period}</span>
              <h4 className="text-headline-md font-headline-md text-on-background mt-1">{exp.title}</h4>
              <p className="text-body-md text-on-surface-variant mt-2 font-medium">{exp.company}</p>
              <p className="text-caption text-on-surface-variant mt-2 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div className="space-y-10 relative">
          <div className="absolute left-4 top-2 bottom-0 w-px bg-outline-variant"></div>
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12"
            >
              <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border-4 border-surface">
                <span className="material-symbols-outlined text-sm text-on-surface-variant">{edu.icon}</span>
              </div>
              <span className="text-label-md text-on-surface-variant font-bold uppercase">{edu.type}</span>
              <h4 className="text-headline-md font-headline-md text-on-background mt-1">{edu.title}</h4>
              <p className="text-body-md text-on-surface-variant mt-2 font-medium">{edu.institution}</p>
              {edu.description && <p className="text-caption text-on-surface-variant mt-2 leading-relaxed">{edu.description}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
