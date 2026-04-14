"use client";

import { motion } from "framer-motion";
import { Target, Eye, Rocket } from "lucide-react";

const CARDS = [
  {
    icon: Eye,
    label: "Our Vision",
    color: "cyan",
    iconBg: "bg-cyan-400/10 border-cyan-400/20 text-cyan-400",
    glow: "hover:shadow-[0_8px_60px_rgba(0,212,255,0.1)]",
    content:
      "To be the world's most trusted AI-native software studio — where every product we ship sets a new standard for what modern software can achieve. We envision a future where intelligent systems are seamlessly woven into every business.",
  },
  {
    icon: Target,
    label: "Our Mission",
    color: "purple",
    iconBg: "bg-purple-400/10 border-purple-400/20 text-purple-400",
    glow: "hover:shadow-[0_8px_60px_rgba(168,85,247,0.1)]",
    content:
      "To empower companies with software so good it becomes their competitive advantage. We do this by combining rigorous engineering, AI expertise, and design excellence — treating every client's product as if it were our own.",
  },
  {
    icon: Rocket,
    label: "Our Approach",
    color: "violet",
    iconBg: "bg-violet-400/10 border-violet-400/20 text-violet-400",
    glow: "hover:shadow-[0_8px_60px_rgba(124,58,237,0.1)]",
    content:
      "We move fast without breaking things. Starting with deep discovery, we architect for scale, iterate in public, and ship in weeks not months. Transparency, accountability, and technical excellence are non-negotiable.",
  },
];

export default function MissionVision() {
  return (
    <section className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A2540] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group p-7 rounded-xl border border-[#1A2540] bg-[#0D1526] transition-all duration-300 ${card.glow}`}
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${card.iconBg}`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-4">{card.label}</h3>
                <p className="text-[#8896A8] leading-relaxed text-sm">{card.content}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 p-8 rounded-xl border border-[#1A2540] bg-[#08101E]"
        >
          {[
            { value: "10+", label: "Projects Delivered" },
            { value: "98%", label: "Client Retention" },
            { value: "3+", label: "Years of Experience" },
            { value: "2+", label: "Countries Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl gradient-text mb-1">{stat.value}</div>
              <div className="text-[#556070] text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
