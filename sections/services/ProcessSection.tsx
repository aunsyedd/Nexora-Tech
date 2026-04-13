"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const STEPS = [
  {
    step: "01",
    title: "Discovery & Scoping",
    description: "We start with deep-dive sessions to understand your goals, constraints, and users. We document requirements, define scope, and agree on success metrics.",
    duration: "Week 1",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description: "Our engineers design the system architecture, data models, and API contracts. Designers create wireframes and high-fidelity mockups for approval.",
    duration: "Week 1–2",
  },
  {
    step: "03",
    title: "Agile Development",
    description: "We build in 1-week sprints with daily updates and weekly demos. You see real progress every week, not just at the end.",
    duration: "Week 2–8+",
  },
  {
    step: "04",
    title: "QA & Testing",
    description: "Automated testing, manual QA, performance benchmarks, and security audits run continuously throughout development and before every release.",
    duration: "Continuous",
  },
  {
    step: "05",
    title: "Launch & Deploy",
    description: "We handle CI/CD setup, production deployment, monitoring, and rollback plans. Your launch is smooth, rehearsed, and incident-free.",
    duration: "Final week",
  },
  {
    step: "06",
    title: "Support & Scale",
    description: "Post-launch we monitor, iterate, and improve. Optional retainer packages keep us on-call for ongoing development, maintenance, and growth.",
    duration: "Ongoing",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A2540] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How We Work"
          title="Our Development "
          titleHighlight="Process"
          description="A proven, transparent process that delivers results consistently — whether it's an MVP in 4 weeks or a complex platform over 6 months."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative p-6 rounded-xl border border-[#1A2540] bg-[#0D1526] group hover:border-[#2A3550] transition-all duration-300"
            >
              {/* Step number */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#050A14] border border-[#1A2540] flex items-center justify-center">
                <span className="font-display font-bold text-xs text-[#00D4FF]">{step.step}</span>
              </div>

              <div className="mb-4">
                <span className="text-xs font-mono text-[#556070] border border-[#1A2540] px-2 py-0.5 rounded">
                  {step.duration}
                </span>
              </div>

              <h3 className="font-display font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors duration-200">
                {step.title}
              </h3>
              <p className="text-[#8896A8] text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
