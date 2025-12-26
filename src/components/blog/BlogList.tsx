"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { ArrowRight } from "lucide-react";

export function BlogList() {
  return (
    <section id="blog" className="py-32 px-6 md:px-12 border-t border-white/10 bg-background relative overflow-hidden">
      {/* Background Grid for Lab Feel */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4 block"
            >
              /var/log/thoughts
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold"
            >
              THE LAB
            </motion.h2>
          </div>
          <p className="font-mono text-sm text-muted-foreground max-w-xs mt-6 md:mt-0 text-right md:text-left">
            Artifacts of engineering decisions. <br/>
            Optimizing for clarity over brevity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
          {blogPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.slug}`} legacyBehavior passHref>
              <motion.a 
                className="group relative bg-background p-8 md:p-12 hover:bg-white/5 transition-colors cursor-pointer block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-muted-foreground border border-white/20 px-2 py-0.5 rounded-full">
                      {post.id}
                    </span>
                    <span className={`font-mono text-xs uppercase tracking-wider ${post.status === 'Evergreen' ? 'text-green-400' : 'text-yellow-400'}`}>
                      ● {post.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 font-mono text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="md:pr-20">
                  <h3 className="text-2xl md:text-4xl font-display font-bold mb-4 group-hover:text-white transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-serif text-lg text-muted-foreground max-w-3xl leading-relaxed group-hover:text-white/80 transition-colors">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 text-white">
                  Read Entry <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
