"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="mb-[var(--site-space-xl)] pt-16" id="contact">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-surface-container rounded-3xl p-8 md:p-16 border border-outline-variant soft-lift grid grid-cols-1 md:grid-cols-2 gap-16"
      >
        <div>
          <h2 className="text-headline-lg font-headline-lg text-on-background mb-6">Let's build something exceptional together.</h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-10">Whether you have a specific project in mind or just want to talk tech, I'm always open to new connections.</p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">alternate_email</span>
              </div>
              <div>
                <p className="text-caption text-on-surface-variant uppercase tracking-widest">Email Me</p>
                <p className="font-bold text-on-background">hello@himanshusahani.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">public</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-lg">link</span>
                </a>
                <a href="#" className="w-10 h-10 border border-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-lg">terminal</span>
                </a>
                <a href="#" className="w-10 h-10 border border-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-lg">share</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-label-md text-on-surface-variant">NAME</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full p-4 bg-surface border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-label-md text-on-surface-variant">EMAIL</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full p-4 bg-surface border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-label-md text-on-surface-variant">MESSAGE</label>
            <textarea 
              rows="5" 
              placeholder="How can I help you?" 
              className="w-full p-4 bg-surface border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
            ></textarea>
          </div>
          <motion.button 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full py-4 bg-primary text-on-primary font-bold rounded-lg hover:bg-surface-tint transition-colors"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
