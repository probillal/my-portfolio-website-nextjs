"use client";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="mb-[var(--site-space-xl)] pt-16" id="skills">
      <h2 className="text-headline-lg font-headline-lg text-on-background mb-[var(--site-space-lg)]">Core Capabilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 bg-surface-container p-10 rounded-3xl border border-outline-variant shadow-sm relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container rounded-full text-primary text-label-md mb-4">
              <span className="material-symbols-outlined text-sm">laptop_mac</span>
              FRONTEND ARCHITECTURE
            </div>
            <h3 className="text-headline-md font-headline-md text-on-background mb-6">User Interface & Experience</h3>
            <ul className="grid grid-cols-2 gap-y-4">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface-variant font-medium">Responsive Design</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface-variant font-medium">State Management</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface-variant font-medium">Performance Tuning</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface-variant font-medium">Animation Flow</span>
              </li>
            </ul>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container rounded-full -mr-20 -mt-20 blur-3xl opacity-50"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 bg-surface-container p-10 rounded-3xl border border-outline-variant shadow-sm"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full text-primary text-label-md mb-4">
            <span className="material-symbols-outlined text-sm">dns</span>
            BACKEND SYSTEMS
          </div>
          <h3 className="text-headline-md font-headline-md text-on-background mb-6">Logic & Server Architecture</h3>
          <div className="space-y-4">
            <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant">
              <p className="font-bold text-on-background mb-1">API Development</p>
              <p className="text-caption text-on-surface-variant">RESTful & GraphQL design patterns for high throughput.</p>
            </div>
            <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant">
              <p className="font-bold text-on-background mb-1">Database Management</p>
              <p className="text-caption text-on-surface-variant">Schema optimization and relational data integrity.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
