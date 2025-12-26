"use client";

import { useRef } from "react";
import { Spotlight } from "../ui/spotlight";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-background"
    >
      <Spotlight
        title="VIVEK SARVAIYA"
        subtitle="Building scalable and efficient software solutions, Designing for scale, ambiguity, and impact."
        titleClassName="text-5xl md:text-6xl font-extrabold"
        subtitleClassName="text-lg md:text-xl max-w-[600px]"
        actionsClassName="mt-8"
      />

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-0 right-0 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent"
          />
          <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
            Initialize
          </span>
        </div>
      </motion.div> */}
    </section>
  );
}
