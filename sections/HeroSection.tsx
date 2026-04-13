"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

const TECH_BADGES = [
  "Next.js", "React", "Node.js", "OpenAI", "Python", "AWS", "TypeScript", "PostgreSQL",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid">
      {/* Glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] -top-32 left-1/2 -translate-x-1/2 bg-[#00D4FF]" />
      <div className="glow-orb w-[400px] h-[400px] top-1/2 left-[10%] bg-[#7C3AED] opacity-10" />
      <div className="glow-orb w-[300px] h-[300px] bottom-20 right-[10%] bg-[#00D4FF] opacity-8" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,212,255,0.12),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 backdrop-blur-sm mb-8"
        >
          <Sparkles size={13} className="text-[#00D4FF]" />
          <span className="text-[#00D4FF] text-xs font-display font-semibold tracking-widest uppercase">
            AI-Powered Software Development
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.05] tracking-tight max-w-5xl mx-auto mb-6"
        >
          Building{" "}
          <span className="gradient-text">Intelligent Software</span>
          <br />
          Solutions with AI &{" "}
          <span className="relative">
            Full Stack
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8C50 2 100 10 150 6 200 2 250 10 300 4"
                stroke="#00D4FF"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </span>{" "}
          Engineering
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#8896A8] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Nexora Tech builds premium web applications, AI-powered platforms, and SaaS products
          that give ambitious companies a decisive technical edge.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button href="/contact" size="lg" icon={<ArrowRight size={18} />}>
            Start Your Project
          </Button>
          <Button href="/projects" size="lg" variant="outline">
            View Our Work
          </Button>
        </motion.div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="flex items-center justify-center gap-2 flex-wrap max-w-2xl mx-auto">
            <span className="text-[#556070] text-xs mr-2">Built with</span>
            {TECH_BADGES.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="px-3 py-1 text-xs rounded-full border border-[#1A2540] bg-[#0D1526] text-[#8896A8] font-mono"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mt-20"
        >
          {[
            { label: "Projects Delivered", value: "120+" },
            { label: "Client Satisfaction", value: "98%" },
            { label: "Years Building", value: "6+" },
            { label: "Countries Served", value: "24+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl text-white mb-1 gradient-text">
                {stat.value}
              </div>
              <div className="text-[#556070] text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link href="#services" className="flex flex-col items-center gap-2 text-[#556070] hover:text-[#00D4FF] transition-colors">
          <span className="text-xs tracking-widest uppercase font-display">Explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
