"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, Twitter, Code, Rocket, LucideIcon } from "lucide-react";

const icons = [
  { icon: Github, label: "GitHub", color: "text-white" },
  { icon: Linkedin, label: "LinkedIn", color: "text-blue-400" },
  { icon: Mail, label: "Email", color: "text-green-400" },
  { icon: Twitter, label: "Twitter", color: "text-sky-400" },
  { icon: Code, label: "Code", color: "text-purple-400" },
  { icon: Rocket, label: "Projects", color: "text-orange-400" },
];

interface AnimatedIconProps {
  icon: LucideIcon;
  label: string;
  color: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}

function AnimatedIcon({ icon: IconComponent, label, color, index, scrollYProgress }: AnimatedIconProps) {
  const iconDelay = index * 0.1;
  
  const iconY = useTransform(
    scrollYProgress,
    [0.4 + iconDelay * 0.05, 0.7 + iconDelay * 0.05],
    [30, 0]
  );
  const iconOpacity = useTransform(
    scrollYProgress,
    [0.4 + iconDelay * 0.05, 0.6 + iconDelay * 0.05, 0.8 + iconDelay * 0.05],
    [0, 0.5, 1]
  );
  const iconScale = useTransform(
    scrollYProgress,
    [0.4 + iconDelay * 0.05, 0.7 + iconDelay * 0.05],
    [0.3, 1]
  );
  const iconRotate = useTransform(
    scrollYProgress,
    [0.4 + iconDelay * 0.05, 0.7 + iconDelay * 0.05],
    [-180, 0]
  );
  const labelOpacity = useTransform(
    scrollYProgress,
    [0.6 + iconDelay * 0.05, 0.8 + iconDelay * 0.05],
    [0, 1]
  );

  return (
    <motion.div
      className="flex flex-col items-center justify-center"
      style={{
        y: iconY,
        opacity: iconOpacity,
        scale: iconScale,
        rotate: iconRotate,
      }}
    >
      <motion.div
        className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center ${color} transition-colors duration-300 pointer-events-auto cursor-pointer`}
        whileHover={{
          scale: 1.1,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderColor: "rgba(255, 255, 255, 0.3)",
        }}
      >
        <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
      </motion.div>
      <motion.span
        className="mt-2 text-xs md:text-sm font-mono text-muted-foreground"
        style={{
          opacity: labelOpacity,
        }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

interface AnimatedImageSectionProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function AnimatedImageSection({ 
  imageSrc = "/placeholder-image.jpg",
  imageAlt = "Portfolio Image"
}: AnimatedImageSectionProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Image reveal from bottom (0 to 0.5 scroll progress)
  const imageY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0.5, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  // Parallax effect for icons container (they move slower than image)
  const iconsParallax = useTransform(scrollYProgress, [0.4, 1], [0, -30]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 md:px-12 overflow-hidden bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full" style={{ height: "600px" }}>
          {/* Icons Container - Reveals from behind on further scroll */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
            style={{
              y: iconsParallax,
            }}
          >
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-3xl">
              {icons.map((item, index) => (
                <AnimatedIcon
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  color={item.color}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </motion.div>

          {/* Image Container - Reveals from bottom */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-20"
            style={{
              y: imageY,
              opacity: imageOpacity,
              scale: imageScale,
            }}
          >
            <div className="relative w-full max-w-2xl h-full rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              {/* Image with gradient fallback */}
              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 relative">
                {imageSrc && imageSrc !== "/placeholder-image.jpg" ? (
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority
                    onError={(e) => {
                      // Hide image on error, show gradient fallback
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : null}
                {/* Fallback gradient - always visible */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-blue-900/30" />
              </div>
              
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          {/* </motion.div> */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-3xl">
              {icons.map((item, index) => (
                <AnimatedIcon
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  color={item.color}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
