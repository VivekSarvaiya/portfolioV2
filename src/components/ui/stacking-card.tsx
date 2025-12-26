'use client';

import { ReactLenis } from 'lenis/react';
import { MoveRight } from 'lucide-react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, forwardRef } from 'react';

interface ProjectData {
  title: string;
  description: string;
  link: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  url,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0 z-10'
    >
      <motion.div
        style={{
          backgroundColor: "#000",
          border: `1px solid #282C35`,
          scale,
          top: `calc(10vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] sm:h-[450px] w-full 2xl:w-[75%] rounded-md p-10 origin-top`}
      >
        <div className={`flex h-full mt-5 gap-10`}>
          <div className={`sm:w-[40%] relative top-[10%]`}>
            <h2 className='text-2xl font-semibold font-display mb-2'>{title}</h2>
            <p className='font-display'>{description}</p>
            <a href={'#'} target='_blank' className='flex w-fit items-center gap-2 pt-2 underline-offset-4 underline group'>
              <span className='cursor-pointer'>Hire Me</span>
              <MoveRight className='group-hover:rotate-0 -rotate-45 cursor-pointer transition-all duration-300' />
            </a>
          </div>

          <div className={`relative w-[60%] h-full rounded-lg overflow-hidden hidden sm:block`}>
            <motion.div className={`w-full h-full`} style={{ scale: imageScale }}>
              <img src={url} alt='image' className='absolute inset-0 w-full h-full object-cover' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  projects: ProjectData[];
}

const Component = forwardRef<HTMLElement, ComponentRootProps>(({ projects }, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <main ref={container}>
        <section className='text-white w-full relative'>

          <div className="max-w-7xl mx-auto z-10 sticky top-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 text-center md:text-left"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4 block"
              >
                // Services
              </motion.h2>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                End-to-End Web Development Services
              </h2>
            </motion.div>
          </div>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
});

Component.displayName = 'Component';

export default Component;