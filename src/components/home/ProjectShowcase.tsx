"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "RappidDox",
    subtitle: "Automated Documentation Tool",
    description: "CLI tool that generates visual reports from Tableau and Power BI workbooks in multiple formats",
    achievements: [
      "Mitigated critical security vulnerabilities in dependencies",
      "Optimized data extraction workflows, improving processing speed by 30%",
      "Reduced system load and ensured data safety across enterprise environments"
    ],
    tech: ["TypeScript", "Node.js", "Commander.js", "Socket.io", "Linux", "MySQL"],
    category: "CLI Tool",
    icon: "📊",
    gradient: "from-blue-500/20 to-cyan-500/20",
    image: "/projects/rappiddox.jpg" // Add your project image path
  },
  {
    id: "02",
    title: "FlexeApp",
    subtitle: "Flexible Enterprise Solutions",
    description: "Scalable enterprise platform for business process automation with role-based access control",
    achievements: [
      "Led a team of developers in building scalable platform",
      "Reduced API latency by 40% with high-performance backend",
      "Enhanced delivery timelines by 15% through stakeholder feedback",
      "Developed audit logging and activity tracking modules"
    ],
    tech: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS"],
    category: "Enterprise Platform",
    icon: "🏢",
    gradient: "from-purple-500/20 to-pink-500/20",
    image: "/projects/flexeapp.jpg", // Add your project image path
    links: {
      // Add links if available
    }
  },
  {
    id: "03",
    title: "Samvad",
    subtitle: "Full-Stack Real-Time Chat Application",
    description: "Real-time messaging platform with instant chats, typing indicators, and online/offline presence",
    achievements: [
      "Built real-time messaging with Socket.io",
      "Implemented secure JWT-based authentication",
      "Designed modern, responsive UI with React and Tailwind CSS",
      "Scalable REST APIs with Node.js and Express"
    ],
    tech: ["React", "Node.js", "Express.js", "JWT", "Socket.io", "Tailwind CSS"],
    category: "Real-Time Application",
    icon: "💬",
    gradient: "from-green-500/20 to-emerald-500/20",
    image: "/projects/samvad.jpg", // Add your project image path
    links: {
      github: "https://github.com" // Update with actual GitHub link
    }
  },
  {
    id: "04",
    title: "TheMovieBase",
    subtitle: "Movies & TV Shows Discovery Platform",
    description: "Responsive web application for exploring, searching, and filtering movies and TV shows",
    achievements: [
      "Integrated TMDB API for comprehensive movie database",
      "Implemented dynamic routing and optimized API calls",
      "Clean, modern UI with React and Tailwind CSS",
      "Seamless navigation and faster content loading"
    ],
    tech: ["React", "Vite", "JavaScript", "TMDB API", "Tailwind CSS", "Redux"],
    category: "Web Application",
    icon: "🎬",
    gradient: "from-orange-500/20 to-red-500/20",
    image: "/projects/themoviebase.jpg", // Add your project image path
    links: {
      site: "https://example.com", // Update with actual site link
      github: "https://github.com" // Update with actual GitHub link
    }
  }
];

export function ProjectShowcase() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-background border-t border-white/5 relative overflow-hidden">
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
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center`}
            >
              {/* Visual Card */}
              <motion.div
                className={`flex-1 w-full aspect-square md:aspect-video bg-gradient-to-br ${project.gradient} border border-white/10 rounded-lg relative p-8 md:p-12 group overflow-hidden`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  animate={{
                    opacity: hoveredProject === index ? 0.3 : 0,
                  }}
                />

                <div className="h-full flex flex-col justify-between relative z-10">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-7xl md:text-9xl font-bold text-white/5 select-none">
                      {project.id}
                    </span>
                    <motion.span
                      className="text-4xl md:text-5xl"
                      animate={{
                        scale: hoveredProject === index ? [1, 1.2, 1] : 1,
                        rotate: hoveredProject === index ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {project.icon}
                    </motion.span>
                  </div>

                  <div className="mt-auto">
                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/10 inline-block">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/20 rounded-tl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/20 rounded-br-lg" />
              </motion.div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center space-y-6">
                {/* Header with Links */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground font-mono mb-4">
                      {project.subtitle}
                    </p>
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
                        <span className="text-white/40 mt-1.5">▹</span>
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
