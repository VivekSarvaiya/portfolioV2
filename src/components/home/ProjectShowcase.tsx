"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "RappidDox",
    industry: "Business Intelligence", // Inferred from Tableau/Power BI
    subtitle: "Enterprise Documentation Engine",
    description: "Multi-platform documentation tool that generates visual reports from Tableau and Power BI workbooks in multiple formats",
    achievements: [
      "Mitigated critical security vulnerabilities in dependencies",
      "Optimized data extraction workflows, improving processing speed by 30%",
      "Reduced system load and ensured data safety across enterprise environments"
    ],
    tech: ["TypeScript", "Node.js", "Commander.js", "Socket.io", "Linux", "MySQL"],
    image: "/rapiddox.png"
  },
  {
    id: "02",
    title: "FlexeApp",
    industry: "Enterprise SaaS", // Inferred from business process automation
    subtitle: "Process Automation Platform",
    description: "Scalable enterprise platform for business process automation with role-based access control",
    achievements: [
      "Led a team of developers in building scalable platform",
      "Reduced API latency by 40% with high-performance backend",
      "Enhanced delivery timelines by 15% through stakeholder feedback",
      "Developed audit logging and activity tracking modules"
    ],
    tech: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS"],
    image: "/flexeapp.png",
    links: {}
  },
  {
    id: "03",
    title: "Samvad",
    industry: "Communications", // Inferred from Chat App
    subtitle: "Real-Time Collaboration Suite",
    description: "Real-time messaging platform with instant chats, typing indicators, and online/offline presence",
    achievements: [
      "Built real-time messaging with Socket.io",
      "Implemented secure JWT-based authentication",
      "Designed modern, responsive UI with React and Tailwind CSS",
      "Scalable REST APIs with Node.js and Express"
    ],
    tech: ["React", "Node.js", "Express.js", "JWT", "Socket.io", "Tailwind CSS"],
    image: "/samvad.png",
    links: {
      github: "https://github.com/VivekSarvaiya/samvad"
    }
  },
  {
    id: "04",
    title: "TheMovieBase",
    industry: "Media & Entertainment", // Inferred from TMDB
    subtitle: "Content Discovery Engine",
    description: "Responsive web application for exploring, searching, and filtering movies and TV shows",
    achievements: [
      "Integrated TMDB API for comprehensive movie database",
      "Implemented dynamic routing and optimized API calls",
      "Clean, modern UI with React and Tailwind CSS",
      "Seamless navigation and faster content loading"
    ],
    tech: ["React", "Vite", "JavaScript", "TMDB API", "Tailwind CSS", "Redux"],
    image: "/moviebase.png",
    links: {
      site: "https://moviebase7.netlify.app/",
      github: "https://github.com/VivekSarvaiya/moviebase"
    }
  },
  {
    id: "05",
    title: "ERP System",
    industry: "Supply Chain & Retail", // Inferred from Inventory/Sales
    subtitle: "Resource Management System",
    description: "Enterprise resource planning system for managing inventory, sales, and purchases",
    achievements: [
      "Built ERP system for managing inventory, sales, and purchases with role-based access control",
      "Designed modern, responsive UI with React and Tailwind CSS",
      "Dynamic charts for dashboards visualizations",
      "Role-based access control for managing inventory, sales, and purchases"
    ],
    tech: ["React", "Node.js", "Express.js", "JWT", "Socket.io", "Tailwind CSS", "MongoDB"],
    image: "/erp.png",
    links: {
      github: "https://github.com/VivekSarvaiya/erp-systems"
    }
  }
];

export function ProjectShowcase() {

  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            // Projects
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Portfolio Projects
          </h2>
          <p className="font-mono text-muted-foreground max-w-2xl text-lg">
            Full-stack applications built with modern technologies and best practices
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center`}
            >
              {/* Visual Card */}
              <motion.div
                className={`flex-1 w-full aspect-square md:aspect-video rounded-lg relative group overflow-hidden`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >

                <div className="h-full flex flex-col justify-between relative z-10">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>

              </motion.div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center space-y-6">
                {/* Header with Links */}
                <div className="space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-2">
                      {project.title}
                    </h3>
                    {/* <p className="text-lg md:text-xl text-muted-foreground font-mono mb-4">
                      {project.subtitle}
                    </p> */}
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="inline-flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/10"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">
                        Industry: {project.industry}
                      </span>
                    </motion.div>
                  </div>

                  {/* Links */}
                  {(project.links?.site || project.links?.github) && (
                    <div className="flex gap-3">
                      {project.links.site && (
                        <motion.a
                          href={project.links.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 border border-white/10 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                          aria-label="Visit live site"
                        >
                          <ExternalLink className="w-4 h-4 text-white/60" />
                        </motion.a>
                      )}
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 border border-white/10 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github className="w-4 h-4 text-white/60" />
                        </motion.a>
                      )}
                    </div>
                  )}
                </div>
                </div>
                {/* Description */}
                <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-white/80 mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                        className="font-mono text-xs md:text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-white/40">▹</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 border-white/10">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * techIndex }}
                      className="px-3 py-1.5 text-xs font-mono bg-white/5 border border-white/10 rounded-md text-white/70 hover:bg-white/10 hover:border-white/20 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
