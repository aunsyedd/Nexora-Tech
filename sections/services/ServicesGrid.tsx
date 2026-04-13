"use client";

import { motion } from "framer-motion";
import { Code2, Brain, MessageSquare, Layers, Zap, Palette, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2, Brain, MessageSquare, Layers, Zap, Palette,
};

const COLOR_CLASSES: Record<string, { icon: string; badge: string; border: string; glow: string; dot: string }> = {
  cyan: {
    icon: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    badge: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    border: "hover:border-cyan-500/30",
    glow: "hover:shadow-[0_12px_60px_rgba(0,212,255,0.1)]",
    dot: "bg-cyan-400",
  },
  purple: {
    icon: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    badge: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    border: "hover:border-purple-500/30",
    glow: "hover:shadow-[0_12px_60px_rgba(168,85,247,0.1)]",
    dot: "bg-purple-400",
  },
  violet: {
    icon: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    badge: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    border: "hover:border-violet-500/30",
    glow: "hover:shadow-[0_12px_60px_rgba(124,58,237,0.1)]",
    dot: "bg-violet-400",
  },
  yellow: {
    icon: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    badge: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    border: "hover:border-yellow-500/30",
    glow: "hover:shadow-[0_12px_60px_rgba(234,179,8,0.1)]",
    dot: "bg-yellow-400",
  },
  pink: {
    icon: "text-pink-400 bg-pink-400/10 border-pink-400/20",
    badge: "text-pink-400 bg-pink-400/10 border-pink-400/20",
    border: "hover:border-pink-500/30",
    glow: "hover:shadow-[0_12px_60px_rgba(236,72,153,0.1)]",
    dot: "bg-pink-400",
  },
};

export default function ServicesGrid() {
  return (
    <section className="py-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            const colors = COLOR_CLASSES[service.color] || COLOR_CLASSES.cyan;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 rounded-2xl border border-[#1A2540] bg-[#0D1526] transition-all duration-300 ${colors.border} ${colors.glow}`}
              >
                {/* Content - alternates sides */}
                <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${colors.icon}`}>
                      <Icon size={20} />
                    </div>
                    <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${colors.badge}`}>
                      {service.tagline}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[#8896A8] leading-relaxed mb-6">{service.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-[#8896A8]">
                        <CheckCircle2 size={14} className="text-[#00D4FF] shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual card */}
                <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
                  <div className={`relative rounded-xl border bg-gradient-to-br ${service.gradient} border-[#1A2540] p-6 h-48 flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="relative z-10 text-center">
                      <div className={`w-16 h-16 rounded-2xl border mx-auto flex items-center justify-center mb-3 ${colors.icon} shadow-lg`}>
                        <Icon size={30} />
                      </div>
                      <p className="font-display font-bold text-white text-lg">{service.title}</p>
                      <div className="flex justify-center gap-1 mt-2">
                        {[...Array(3)].map((_, j) => (
                          <span key={j} className={`w-1.5 h-1.5 rounded-full ${colors.dot} ${j === 1 ? "opacity-100" : "opacity-40"}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
