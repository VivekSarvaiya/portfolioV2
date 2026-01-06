"use client";

import { motion } from "framer-motion";

const experience = [
  {
    year: "May 2024 - Present",
    role: "MERN Stack Developer",
    company: "Pixerfect Solutions LLP · Surat, GJ",
    impact: "Built and scaled production-ready web applications by owning frontend architecture, API integrations, and performance optimization — cutting release cycles by 25% and improving real-world user experience."
  },
  {
    year: "July 2022 - May 2024",
    role: "Frontend Developer",
    company: "DayDreamSoft LLP · Surat, GJ",
    impact: "Delivered high-performance, modular React applications by collaborating across teams and optimizing rendering, resulting in faster load times and a more maintainable codebase."
  },
  {
    year: "Jan 2022 – June 2022",
    role: "Frontend Developer Intern",
    company: "DayDreamSoft LLP · Surat, GJ",
    impact: "Contributed to live client projects by shipping responsive UI components and learning production-grade development workflows under senior mentorship."
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
