"use client";

import Image from "next/image";
import AboutImage from "../assets/AboutImage.png";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="mb-(--site-space-xl) pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Picture */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            <Image
              src={AboutImage}
              alt="About Me"
              width={600}
              height={500}
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
          <h2 className="text-headline-lg font-headline-lg text-green-500 mb-4">
            About Me
          </h2>
          <div className="space-y-4 text-body-lg text-on-surface-variant">
            <p>
              Hi there! I'm{" "}
              <span className="text-green-500">S M Billal Hossain</span>, a
              passionate and driven frontend developer based in Bangladesh. I'm
              at the beginning of my journey in web development, but my
              enthusiasm and dedication to learning are limitless.
            </p>
            <p>
              I'm currently mastering the art of building modern, responsive,
              and visually stunning web applications. I specialize in{" "}
              <span className="text-green-500"> HTML, CSS, JavaScript</span>,
              and frameworks like <span className="text-green-500">React</span>{" "}
              and <span className="text-green-500">Next.js</span>. My goal is to
              turn ideas into reality through clean, efficient, and beautiful
              code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or enjoying outdoor
              activities. I'm always eager to{" "}
              <span className="text-green-500">learn</span> and{" "}
              <span className="text-green-500">collaborate</span> on exciting
              projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
