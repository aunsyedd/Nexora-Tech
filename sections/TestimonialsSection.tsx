"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/data";

const AVATAR_COLORS: Record<string, string> = {
  cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  purple: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  violet: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  pink: "bg-pink-500/20 text-pink-300 border-pink-500/30",
};

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(124,58,237,0.05),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A2540] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Stories"
          title="What Our Clients "
          titleHighlight="Say About Us"
          description="Don't take our word for it — here's what the teams we've worked with have to say."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-xl border border-[#1A2540] bg-[#0D1526] hover:border-[#2A3550] hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote size={24} className="text-[#1A2540] mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} className="fill-[#00D4FF] text-[#00D4FF]" />
                ))}
              </div>

              <p className="text-[#8896A8] leading-relaxed text-sm mb-6">{t.content}</p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center font-display font-bold text-sm ${
                    AVATAR_COLORS[t.color] || AVATAR_COLORS.cyan
                  }`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-display font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-[#556070] text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
