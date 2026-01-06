"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  {
    id: 1,
    name: "Languages",
    category: "Core",
    icon: "💻",
    desc: "Proficient in modern programming languages with strong fundamentals in JavaScript, TypeScript, and system-level programming",
    tech: ["JavaScript", "TypeScript", "HTML", "CSS", "C/C++"]
  },
  {
    id: 2,
    name: "Frontend Frameworks",
    category: "Frontend",
    icon: "⚛️",
    desc: "Building modern, responsive user interfaces with React ecosystem and cutting-edge build tools",
    tech: ["React", "Next.js", "Vite", "Tailwind CSS", "Motion", "Framer"]
  },
  {
    id: 3,
    name: "Backend Development",
    category: "Backend",
    icon: "⚡",
    desc: "Creating scalable server-side applications with Node.js, Express, and enterprise-grade frameworks",
    tech: ["Node.js", "Express", "Nest.js"]
  },
  {
    id: 4,
    name: "State Management",
    category: "Frontend",
    icon: "📦",
    desc: "Managing complex application state with modern libraries and patterns for optimal performance",
    tech: ["Redux", "Zustand", "Context API"]
  },
  {
    id: 5,
    name: "Authentication & APIs",
    category: "Security",
    icon: "🔐",
    desc: "Implementing secure authentication flows and seamless API integrations",
    tech: ["JWT", "OAuth", "API Integration"]
  },
  {
    id: 6,
    name: "Database & Storage",
    category: "Database",
    icon: "🗄️",
    desc: "Working with relational databases and cloud storage solutions for data persistence",
    tech: ["MongoDB", "Firebase", "PostgreSQL", "MySQL"]
  },
  {
    id: 7,
    name: "DevOps & Cloud",
    category: "DevOps",
    icon: "☁️",
    desc: "Deploying and managing applications on cloud infrastructure with modern DevOps practices",
    tech: ["AWS", "Vercel", "Netlify"]
  },
  {
    id: 8,
    name: "Development Tools",
    category: "Tools",
    icon: "🛠️",
    desc: "Leveraging AI-powered development tools and testing platforms for efficient workflows",
    tech: ["Git", "GitHub", "NPM", "Postman", "Cursor", "Windsurf", "ChatGPT", "Claude", "Figma"]
  },
  {
    id: 9,
    name: "Web Optimization",
    category: "Performance",
    icon: "🚀",
    desc: "Optimizing web applications for performance, responsiveness, and exceptional user experience",
    tech: ["Performance Optimization", "Responsive Design", "SEO"]
  },
];

const categoryColors: Record<string, string> = {
  Core: "from-yellow-500/20 to-amber-500/20",
  Frontend: "from-purple-500/20 to-pink-500/20",
  Backend: "from-blue-500/20 to-cyan-500/20",
  Security: "from-red-500/20 to-rose-500/20",
  Database: "from-emerald-500/20 to-teal-500/20",
  DevOps: "from-indigo-500/20 to-violet-500/20",
  Tools: "from-orange-500/20 to-amber-500/20",
  Performance: "from-green-500/20 to-emerald-500/20",
};

export function SkillsGraph() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center md:text-left"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4 block"
          >
            // Skills
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Tools & Technologies
          </h2>
          <p className="font-mono text-muted-foreground max-w-2xl text-lg">
            Full-stack development with modern technologies, AI-powered workflows, and cloud infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                className={`relative h-full min-h-[320px] border border-white/10 rounded-lg bg-gradient-to-br ${categoryColors[skill.category]} backdrop-blur-sm p-6 flex flex-col cursor-pointer overflow-hidden transition-all duration-300`}
                onMouseEnter={() => setActiveSkill(skill.id)}
                onMouseLeave={() => setActiveSkill(null)}
                whileHover={{ scale: 1.03, borderColor: "rgba(255, 255, 255, 0.2)" }}
                style={{
                  boxShadow: activeSkill === skill.id
                    ? "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                    : "0 4px 6px rgba(0, 0, 0, 0.1)"
                }}
              >
                {/* Animated background glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${categoryColors[skill.category]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  animate={{
                    opacity: activeSkill === skill.id ? 0.3 : 0,
                  }}
                />

                {/* Header */}
                <div className="relative z-10 flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <motion.span
                      className="text-3xl"
                      animate={{
                        scale: activeSkill === skill.id ? [1, 1.2, 1] : 1,
                        rotate: activeSkill === skill.id ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.span>
                    <span className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                      {skill.category}
                    </span>
                  </div>
                  <motion.div
                    className="w-2 h-2 rounded-full bg-white/40"
                    animate={{
                      opacity: activeSkill === skill.id ? 1 : 0.3,
                      scale: activeSkill === skill.id ? [1, 1.5, 1] : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>

                  <motion.p
                    className="font-mono text-xs text-muted-foreground mb-4 leading-relaxed flex-1"
                    animate={{
                      opacity: activeSkill === skill.id ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.desc}
                  </motion.p>

                  {/* Tech stack tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 mt-auto"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: activeSkill === skill.id ? 1 : 0.4,
                      y: activeSkill === skill.id ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-sm font-mono bg-white/5 border border-white/10 rounded text-white/60 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                    {/* {skill.tech.length > 3 && (
                      <span className="px-2 py-1 text-[10px] font-mono bg-white/5 border border-white/10 rounded text-white/40">
                        +{skill.tech.length - 3}
                      </span>
                    )} */}
                  </motion.div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 rounded-tl-lg" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 rounded-br-lg" />

                {/* Hover effect line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: activeSkill === skill.id ? "100%" : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
