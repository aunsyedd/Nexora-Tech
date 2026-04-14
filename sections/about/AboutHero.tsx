"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(0,212,255,0.1),transparent)]" />
      <div className="glow-orb w-[500px] h-[500px] -top-40 left-1/2 -translate-x-1/2 bg-[#00D4FF]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 mb-8"
        >
          <Sparkles size={13} className="text-[#00D4FF]" />
          <span className="text-[#00D4FF] text-xs font-display font-semibold tracking-widest uppercase">
            Our Story
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-4xl mx-auto mb-6"
        >
          We Build Software That{" "}
          <span className="gradient-text">Shapes the Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#8896A8] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          Founded by engineers who believe that great software changes everything. We combine deep technical expertise with creative problem-solving to deliver products that matter.
        </motion.p>

        {/* Timeline pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-10"
        >
          {[
            { year: "2023", event: "Founded" },
            { year: "2023", event: "First AI product" },
            { year: "2023", event: "5+ clients" },
            { year: "2024", event: "10+ projects shipped" },
          ].map((item) => (
            <div
              key={item.year}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#1A2540] bg-[#0D1526] text-sm"
            >
              <span className="text-[#00D4FF] font-display font-semibold">{item.year}</span>
              <span className="text-[#556070]">—</span>
              <span className="text-[#8896A8]">{item.event}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
