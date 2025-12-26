"use client";

import { motion } from "framer-motion";

const experience = [
  {
    year: "2023 - Present",
    role: "Staff Engineer",
    company: "TechCorp",
    impact: "Led migration of monolith to micro-frontends. Reduced build times by 60%."
  },
  {
    year: "2020 - 2023",
    role: "Senior Developer",
    company: "StartUp Inc",
    impact: "Scaled payment infrastructure from $1M to $50M ARR processing."
  },
  {
    year: "2018 - 2020",
    role: "Software Engineer",
    company: "Agency",
    impact: "Delivered 15+ production apps for Fortune 500 clients."
  }
];

export function ExperienceStream() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-background relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-20">TRAJECTORY</h2>
        
        <div className="relative border-l border-white/10 pl-8 md:pl-16 space-y-16">
          {experience.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[41px] md:-left-[73px] top-2 w-4 h-4 bg-background border border-white rounded-full" />
              
              <span className="font-mono text-xs text-muted-foreground mb-2 block">
                {item.year}
              </span>
              <h3 className="text-2xl font-display font-bold">
                {item.role} <span className="text-muted-foreground font-normal">@ {item.company}</span>
              </h3>
              <p className="mt-4 font-mono text-sm md:text-base text-muted-foreground max-w-xl">
                {item.impact}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
