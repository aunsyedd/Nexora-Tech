"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { PROJECTS } from "@/lib/data";

const COLOR_DOT: Record<string, string> = {
  cyan: "bg-cyan-400",
  purple: "bg-purple-400",
  violet: "bg-violet-400",
  green: "bg-emerald-400",
  orange: "bg-orange-400",
};

const GRADIENT_MAP: Record<string, string> = {
  cyan: "from-cyan-500 to-blue-600",
  purple: "from-purple-500 to-violet-600",
  violet: "from-violet-500 to-purple-600",
  green: "from-emerald-500 to-teal-600",
  orange: "from-orange-500 to-red-500",
};

export default function ProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section className="py-24 relative">
      {/* Divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A2540] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured Work"
          title="Products We've "
          titleHighlight="Shipped"
          description="Real-world applications we've built for clients across industries — from AI platforms to enterprise SaaS."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => {
            const isLarge = i === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={isLarge ? "lg:col-span-2" : ""}
              >
                <div className="group relative h-full rounded-2xl border border-[#1A2540] bg-[#0D1526] overflow-hidden hover:border-[#2A3550] transition-all duration-300 hover:shadow-[0_8px_60px_rgba(0,0,0,0.4)]">
                  {/* Gradient top bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${GRADIENT_MAP[project.color] || GRADIENT_MAP.cyan}`} />

                  {/* Fake browser chrome */}
                  <div className="bg-[#08101E] border-b border-[#1A2540] px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="flex-1 h-5 bg-[#0D1526] rounded-md mx-2 flex items-center px-3">
                      <span className="text-[#556070] text-[10px] font-mono">
                        nexoratech.io/{project.title.toLowerCase().replace(/\s/g, "")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-2 h-2 rounded-full ${COLOR_DOT[project.color]}`} />
                          <span className="text-[#556070] text-xs font-mono">{project.category}</span>
                        </div>
                        <h3 className="font-display font-bold text-xl text-white group-hover:text-[#00D4FF] transition-colors duration-200">
                          {project.title}
                        </h3>
                      </div>
                      <ExternalLink size={16} className="text-[#556070] group-hover:text-[#00D4FF] transition-colors mt-1" />
                    </div>

                    <p className={`text-[#8896A8] text-sm leading-relaxed mb-6 ${isLarge ? "" : "line-clamp-3"}`}>
                      {project.description}
                    </p>

                    {/* Stats */}
                    {/* <div className="flex items-center gap-6 mb-6">
                      {Object.entries(project.stats).map(([key, val]) => (
                        <div key={key}>
                          <div className="font-display font-bold text-white text-lg">{val}</div>
                          <div className="text-[#556070] text-xs capitalize">{key}</div>
                        </div>
                      ))}
                    </div> */}

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs rounded-md border border-[#1A2540] bg-[#08101E] text-[#8896A8] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#00D4FF] font-display font-medium hover:gap-3 transition-all duration-200"
          >
            View all projects <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
