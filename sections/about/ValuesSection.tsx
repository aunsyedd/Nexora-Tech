"use client";

import { motion } from "framer-motion";
import { Shield, Lightbulb, Users, Zap, Heart, BarChart3 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const VALUES = [
  {
    icon: Shield,
    title: "Reliability",
    description: "We ship on time, every time. No surprises, no excuses. Our process is built around predictable, consistent delivery.",
    color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay at the bleeding edge so you don't have to. If a newer, better approach exists, we'll find it and use it.",
    color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We're not vendors — we're partners. Your success is our success. We're invested in the outcome, not just the output.",
    color: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Velocity without sacrifice. We've built systems that let us move fast while maintaining the quality standards that matter.",
    color: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  },
  {
    icon: Heart,
    title: "Craft",
    description: "We care deeply about the details — the code structure, the micro-interactions, the performance. Craft is in our DNA.",
    color: "text-pink-400 bg-pink-400/10 border-pink-400/20",
  },
  {
    icon: BarChart3,
    title: "Impact",
    description: "Every decision is made with business impact in mind. We build what moves the needle, not what looks impressive on paper.",
    color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A2540] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Stand For"
          title="Our Core "
          titleHighlight="Values"
          description="These aren't just words on a wall. They're the principles that guide every decision, every line of code, every client interaction."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group p-6 rounded-xl border border-[#1A2540] bg-[#0D1526] hover:border-[#2A3550] transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-4 ${value.color}`}>
                  <Icon size={18} />
                </div>
                <h3 className="font-display font-bold text-white mb-2">{value.title}</h3>
                <p className="text-[#8896A8] text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
