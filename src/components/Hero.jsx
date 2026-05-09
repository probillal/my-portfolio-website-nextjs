"use client";

import Image from "next/image";
import HeroImage from "../assets/hero.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between gap-12 mb-(--site-space-xl) pt-2"
    >
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
        <h1 className="text-headline-xl italic font-headline-xl text-on-background max-w-2xl leading-tight">
          Hi, I'm <span className="text-primary">S M Billal Hossain</span>.
        </h1>
        <h4 className=" text-2xl italic text-on-background max-w-2xl leading-tight">
          <span className="text-primary">Frontend</span> Developer
        </h4>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
          I build modern, responsive, and user-friendly web applications with
          clean design, smooth animations, and interactive experiences using
          React, Next.js, Tailwind CSS, and modern frontend technologies.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-primary-container text-white rounded-lg font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-emerald-500/20 inline-block"
          >
            View Projects
          </a>
          <a
            href="../assets/S M Billal_Hossain_CV (1).pdf"
            download="S M Billal_Hossain_CV.pdf"
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
            src={HeroImage}
            alt="S M Billal Hossain"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
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
            <div className="text-headline-md font-headline-md text-primary">
              01+
            </div>
            <div className="text-caption font-caption text-on-surface-variant">
              Years Exp
            </div>
          </div>
          <div className="h-10 w-px bg-outline-variant self-center"></div>
          <div className="text-center">
            <div className="text-headline-md font-headline-md text-primary">
              10+
            </div>
            <div className="text-caption font-caption text-on-surface-variant">
              Projects
            </div>
          </div>
          <div className="h-10 w-px bg-outline-variant self-center"></div>
          <div className="text-center">
            <div className="text-headline-md font-headline-md text-primary">
              0
            </div>
            <div className="text-caption font-caption text-on-surface-variant">
              Clients
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
