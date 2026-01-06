"use client";

import { useRef } from "react";
import { motion } from "framer-motion"
import { BlurTextEffect } from "../ui/blur-text";

export function AboutMeSection() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[150vh] flex items-center justify-center overflow-hidden "
    >
      {/* --- Content Layer --- */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 h-screen flex flex-col justify-center">
        <div className="max-w-5xl mx-auto">
          
          {/* Subtle label */}
          <motion.span
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4 block"
          >
            // About The Developer
          </motion.span>

          <motion.span
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4 block"
          >
            {/* Main Headline - Scroll Activated Stagger */}
            <div className="mb-16 mt-8">
                <div className="text-2xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white">
                    <BlurTextEffect>
                    I CRAFT FAST, SCALABLE, AND USER-FRIENDLY WEB APPLICATIONS WITH MODERN JAVASCRIPT FRAMEWORKS — COMBINING REACT ON THE FRONTEND WITH ROBUST SERVER-SIDE SOLUTIONS USING NODE.JS
                    </BlurTextEffect>
                </div>
            </div>
          </motion.span>


          {/* Secondary Text - Standard fade in when in view */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }} // Cinematic easing
            className="grid grid-cols-1 md:grid-cols-12 gap-8"
          >
            {/* Decorative line */}
            <div className="hidden md:block col-span-1 border-t border-white/30 mt-6"></div>
            
            <p className="col-span-11 md:col-span-8 text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
              <span className="text-zinc-200 font-normal">I thrive on solving real-world problems</span>, turning ideas into clean, maintainable code, and learning through experimentation. You’ll find me building side projects, diving into new tech stacks, or simply exploring web development.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}