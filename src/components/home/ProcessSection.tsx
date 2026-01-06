"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BrainCircuit, Target, PenTool, Code, ShieldCheck, Megaphone } from 'lucide-react';
import { cn } from "@/lib/utils";


// Interface for individual process card props
interface ProcessCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}

// Reusable Process Card Component
const ProcessCard: React.FC<ProcessCardProps> = ({ icon: Icon, title, description, className }) => (
  <div className={cn("group relative w-full rounded-lg border bg-card p-6 transition-all cursor-pointer duration-300 hover:border-primary/60 hover:shadow-lg ", className)}>
    {/* Decorative Line - Visible on larger screens */}
    <div className="absolute -left-[1px] top-1/2 hidden h-1/2 w-px -translate-y-1/2 bg-border transition-colors group-hover:bg-primary/60 md:block" />
    <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-border transition-colors group-hover:bg-primary/60 md:hidden" />


    {/* Icon Container */}
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg duration-300 border bg-background text-primary shadow-sm transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
      <Icon className="h-6 w-6" />
    </div>

    {/* Content */}
    <div className="flex flex-col">
      <h3 className="mb-1 text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);


const processItems = [
  {
    icon: BrainCircuit,
    title: 'Discovery & Analysis',
    description: 'Analyzing requirements and defining the project technical scope.',
  },
  {
    icon: Target,
    title: 'System Architecture',
    description: 'Designing scalable database schemas and microservices architecture.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Engineering',
    description: 'Crafting aesthetic, high-performance interfaces using Tailwind CSS.',
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Building robust logic using NestJS, React, and MongoDB.',
  },
  {
    icon: ShieldCheck,
    title: 'Optimization & Testing',
    description: 'Ensuring code quality via unit tests and performance tuning.',
  },
  {
    icon: Megaphone,
    title: 'Deployment & CI/CD',
    description: 'Managing production releases and automated Git workflows.',
  },
];


export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-32 px-6 md:px-12 h-screen">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center md:text-left"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4 block"
          >
            // Process
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Development Workflow
          </h2>
          <p className="font-mono text-muted-foreground max-w-2xl text-lg">
            A structured approach to building digital solutions that deliver value and exceed expectations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3 md:col-span-4">
          {processItems.map((item, index) => (
              <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
              key={index}
            >
            <ProcessCard {...item} />
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 bg-white/5 rounded-full backdrop-blur-sm">
            <motion.div
              className="w-2 h-2 rounded-full bg-white/40"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              Iterative & Collaborative
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

