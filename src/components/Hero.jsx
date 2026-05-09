"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between gap-12 mb-(--site-space-xl) pt-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 space-y-6"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-label-md font-label-md">
          AVAILABLE FOR NEW PROJECTS
        </div>
        <h1 className="text-headline-xl font-headline-xl text-on-background max-w-2xl leading-tight">
          Engineering digital excellence with <span className="text-primary">Himanshu Sahani</span>.
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
          A seasoned developer focused on building scalable, user-centric applications. Bridging the gap between robust backend logic and fluid frontend experiences.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-primary-container text-on-primary rounded-lg font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-emerald-500/20 inline-block"
          >
            View Projects
          </a>
          <a
            href="/cv-himanshu-sahani.pdf"
            download="Himanshu_Sahani_CV.pdf"
            className="px-8 py-4 bg-transparent border border-outline-variant text-primary rounded-lg font-bold hover:bg-surface-variant transition-colors inline-block"
          >
            Download CV
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full md:w-1/2 relative"
      >
        <div className="w-full aspect-square rounded-3xl bg-surface-container overflow-hidden relative soft-lift">
          <Image
            src="/profile-hero.png"
            alt="Himanshu Sahani"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
        </div>
        
        {/* Stat-Block Component */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-6 -left-6 bg-surface p-6 rounded-2xl soft-lift border border-outline-variant flex gap-8"
        >
          <div className="text-center">
            <div className="text-headline-md font-headline-md text-primary">08+</div>
            <div className="text-caption font-caption text-on-surface-variant">Years Exp</div>
          </div>
          <div className="h-10 w-px bg-outline-variant self-center"></div>
          <div className="text-center">
            <div className="text-headline-md font-headline-md text-primary">20+</div>
            <div className="text-caption font-caption text-on-surface-variant">Projects</div>
          </div>
          <div className="h-10 w-px bg-outline-variant self-center"></div>
          <div className="text-center">
            <div className="text-headline-md font-headline-md text-primary">05+</div>
            <div className="text-caption font-caption text-on-surface-variant">Clients</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
