"use client";

import { motion } from "framer-motion";
import { Code2, Brain, MessageSquare, Layers, Zap, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2, Brain, MessageSquare, Layers, Zap, Palette,
};

const COLOR_MAP: Record<string, string> = {
  cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20 group-hover:bg-cyan-400/20",
  purple: "text-purple-400 bg-purple-400/10 border-purple-400/20 group-hover:bg-purple-400/20",
  violet: "text-violet-400 bg-violet-400/10 border-violet-400/20 group-hover:bg-violet-400/20",
  yellow: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20 group-hover:bg-yellow-400/20",
  pink: "text-pink-400 bg-pink-400/10 border-pink-400/20 group-hover:bg-pink-400/20",
};

const GLOW_MAP: Record<string, string> = {
  cyan: "group-hover:shadow-[0_8px_60px_rgba(0,212,255,0.12)]",
  purple: "group-hover:shadow-[0_8px_60px_rgba(168,85,247,0.12)]",
  violet: "group-hover:shadow-[0_8px_60px_rgba(124,58,237,0.12)]",
  yellow: "group-hover:shadow-[0_8px_60px_rgba(234,179,8,0.12)]",
  pink: "group-hover:shadow-[0_8px_60px_rgba(236,72,153,0.12)]",
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Build"
          title="Premium Services for "
          titleHighlight="Ambitious Products"
          description="From idea to launch, we provide end-to-end engineering and design for companies building the next generation of software."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            const iconClass = COLOR_MAP[service.color] || COLOR_MAP.cyan;
            const glowClass = GLOW_MAP[service.color] || GLOW_MAP.cyan;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/services#${service.id}`}
                  className={`group block h-full p-6 rounded-xl border border-[#1A2540] bg-[#0D1526] hover:border-[#2A3550] transition-all duration-300 ${glowClass}`}
                >
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-lg border flex items-center justify-center mb-5 transition-all duration-300 ${iconClass}`}>
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <p className="text-[#556070] text-xs font-mono mb-1">{service.tagline}</p>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-[#00D4FF] transition-colors duration-200">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-[#8896A8] text-sm leading-relaxed mb-5 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-1 text-[#556070] group-hover:text-[#00D4FF] text-xs font-medium transition-all duration-200">
                    Learn more
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#00D4FF] font-display font-medium hover:gap-3 transition-all duration-200"
          >
            See all services <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
