"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="mb-(--site-space-xl) pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Picture */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            <Image
              src="/about-me.jpg" // Replace with your actual image path
              alt="About Me"
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </motion.div>

        {/* Right side - Description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-headline-lg font-headline-lg text-on-background mb-4">
            About Me
          </h2>
          <div className="space-y-4 text-body-lg text-on-surface-variant">
            <p>
              I'm a passionate developer with over 5 years of experience creating
              innovative web applications and user experiences. My journey in tech
              started with a curiosity about how things work behind the scenes.
            </p>
            <p>
              I specialize in modern web technologies including React, Next.js,
              and Node.js. I love turning complex problems into simple, beautiful,
              and intuitive solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or enjoying outdoor activities.
              I'm always eager to learn and collaborate on exciting projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}