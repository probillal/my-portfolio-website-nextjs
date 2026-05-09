"use client";

import { motion } from "framer-motion";

const techItems = [
  { name: "React", icon: "code" },
  { name: "Node.js", icon: "terminal" },
  { name: "PostgreSQL", icon: "database" },
  { name: "AWS", icon: "cloud" },
  { name: "GraphQL", icon: "schema" },
  { name: "TypeScript", icon: "javascript" },
];

export default function TechStack() {
  return (
    <section className="mb-[var(--site-space-xl)] pt-16" id="tech">
      <div className="text-center mb-[var(--site-space-lg)]">
        <h2 className="text-headline-lg font-headline-lg text-on-background mb-4">Technology Stack</h2>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl mx-auto">
          The tools and frameworks I use to bring complex ideas to life, ensuring performance and maintainability.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {techItems.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-surface-container p-6 rounded-xl border border-outline-variant soft-lift flex flex-col items-center gap-3"
          >
            <span className="material-symbols-outlined text-4xl text-primary">{tech.icon}</span>
            <span className="font-bold text-on-background">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
