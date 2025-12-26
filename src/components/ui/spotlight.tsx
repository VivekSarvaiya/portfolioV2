"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SplineScene } from "./slite"

type HeroProps = React.HTMLAttributes<HTMLElement> & {
  gradient?: boolean
  blur?: boolean
  title?: React.ReactNode
  subtitle?: React.ReactNode
  actions?: React.ReactNode
  titleClassName?: string
  subtitleClassName?: string
  actionsClassName?: string
}

const Spotlight = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      gradient = true,
      blur = true,
      title,
      subtitle,
      actions,
      titleClassName,
      subtitleClassName,
      actionsClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative z-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background",
          className,
        )}
        {...props}
      >
        {gradient && (
          <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center">
            {blur && (
              <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur" />
            )}

            {/* Main glow */}
            <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-primary/60 opacity-80 blur-3xl" />

            {/* Lamp effect */}
            <motion.div
              initial={{ width: "8rem" }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 2, duration: 2 }}
              whileInView={{ width: "16rem" }}
              className="absolute top-0 z-30 h-36 -translate-y-[20%] rounded-full bg-primary/60 blur-2xl"
            />

            {/* Top line */}
            <motion.div
              initial={{ width: "15rem" }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 2, duration: 2 }}
              whileInView={{ width: "30rem" }}
              className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-primary/60"
            />

            {/* Left gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{
                delay: 2,
                duration: 2,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-primary/60 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
            >
              <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
              <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
            </motion.div>

            {/* Right gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{
                delay: 2,
                duration: 2,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-primary/60 [--conic-position:from_290deg_at_center_top]"
            >
              <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
              <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            </motion.div>
          </div>
        )}

        <div className="relative w-full h-screen overflow-hidden ">
          {/* The 3D Scene Layer */}
          <div className="absolute inset-0 z-0">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>

          {/* The Text Content Layer */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.215, 0.61, 0.355, 1], delay: 3, duration: 2 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="relative z-10 container mx-auto flex h-full flex-col items-center justify-center px-5 md:px-10 pointer-events-none"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <h1
                className={cn(
                  "text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-2xl",
                  titleClassName,
                )}
              >
                {title}
              </h1>

              {subtitle && (
                <p
                  className={cn(
                    "text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed",
                    subtitleClassName,
                  )}
                >
                  {subtitle}
                </p>
              )}

              {/* Optional: Add a pointer-events-auto button if you need one to be clickable */}
              <div className="pointer-events-auto mt-4">
                {/* Your Button Here */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  },
)
Spotlight.displayName = "Spotlight"

export { Spotlight }
