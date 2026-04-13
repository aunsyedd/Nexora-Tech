"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ProjectsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(0,212,255,0.08),transparent)]" />
      <div className="glow-orb w-[500px] h-[500px] -top-40 right-[10%] bg-[#7C3AED] opacity-10" />
      <div className="glow-orb w-[400px] h-[400px] -top-20 left-[10%] bg-[#00D4FF] opacity-8" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 mb-8"
        >
          <Sparkles size={13} className="text-[#00D4FF]" />
          <span className="text-[#00D4FF] text-xs font-display font-semibold tracking-widest uppercase">
            Our Portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-4xl mx-auto mb-6"
        >
          Products We&apos;ve{" "}
          <span className="gradient-text">Designed & Shipped</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#8896A8] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          A selection of real products built for ambitious clients. Every project reflects our commitment to quality, performance, and impact.
        </motion.p>
      </div>
    </section>
  );
}
