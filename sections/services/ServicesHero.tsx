"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(124,58,237,0.12),transparent)]" />
      <div className="glow-orb w-[500px] h-[500px] -top-40 left-1/2 -translate-x-1/2 bg-[#7C3AED]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7C3AED]/40 bg-[#7C3AED]/10 mb-8"
        >
          <Sparkles size={13} className="text-[#A855F7]" />
          <span className="text-[#A855F7] text-xs font-display font-semibold tracking-widest uppercase">
            What We Do
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-4xl mx-auto mb-6"
        >
          Premium Services for{" "}
          <span className="gradient-text">Modern Software</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#8896A8] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          From initial architecture to production deployment, we provide every technical capability your product needs to succeed.
        </motion.p>
      </div>
    </section>
  );
}
