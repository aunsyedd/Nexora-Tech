"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";

const GRADIENT_MAP: Record<string, string> = {
  cyan: "from-cyan-500/20 to-blue-600/20",
  purple: "from-purple-500/20 to-violet-600/20",
  violet: "from-violet-500/20 to-purple-600/20",
  green: "from-emerald-500/20 to-teal-600/20",
  orange: "from-orange-500/20 to-red-500/20",
};

const BORDER_MAP: Record<string, string> = {
  cyan: "group-hover:border-cyan-500/40 group-hover:shadow-[0_8px_60px_rgba(0,212,255,0.1)]",
  purple: "group-hover:border-purple-500/40 group-hover:shadow-[0_8px_60px_rgba(168,85,247,0.1)]",
  violet: "group-hover:border-violet-500/40 group-hover:shadow-[0_8px_60px_rgba(124,58,237,0.1)]",
  green: "group-hover:border-emerald-500/40 group-hover:shadow-[0_8px_60px_rgba(52,211,153,0.1)]",
  orange: "group-hover:border-orange-500/40 group-hover:shadow-[0_8px_60px_rgba(249,115,22,0.1)]",
};

const DOT_MAP: Record<string, string> = {
  cyan: "bg-cyan-400",
  purple: "bg-purple-400",
  violet: "bg-violet-400",
  green: "bg-emerald-400",
  orange: "bg-orange-400",
};

const TOP_BAR: Record<string, string> = {
  cyan: "from-cyan-500 to-blue-600",
  purple: "from-purple-500 to-violet-600",
  violet: "from-violet-500 to-purple-600",
  green: "from-emerald-500 to-teal-600",
  orange: "from-orange-500 to-red-500",
};

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const uniqueCategories = [
    "All",
    ...Array.from(new Set(PROJECTS.map((p) => p.category))),
  ];

  return (
    <section className="py-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {uniqueCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs rounded-full border transition-all duration-200 font-display font-medium ${
                activeFilter === cat
                  ? "bg-[#00D4FF] text-[#050A14] border-[#00D4FF] shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                  : "border-[#1A2540] text-[#8896A8] hover:border-[#2A3550] hover:text-white bg-[#0D1526]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className={`group relative rounded-2xl border border-[#1A2540] bg-[#0D1526] overflow-hidden transition-all duration-300 cursor-pointer ${
                  BORDER_MAP[project.color] || ""
                }`}
              >
                {/* Top gradient bar */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${
                    TOP_BAR[project.color]
                  }`}
                />

                {/* IMAGE SECTION */}
                <div className="relative h-44 overflow-hidden bg-[#050A14]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${
                        GRADIENT_MAP[project.color] || ""
                      }`}
                    />
                  )}

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  <ExternalLink
                    size={16}
                    className="absolute top-3 right-3 text-white/60 group-hover:text-white transition-colors"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        DOT_MAP[project.color]
                      }`}
                    />
                    <span className="text-[#556070] text-xs font-mono">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#00D4FF] transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-[#8896A8] text-sm leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] rounded border border-[#1A2540] bg-[#08101E] text-[#556070] font-mono"
                        >
                          {t}
                        </span>
                      ))}

                      {project.tech.length > 3 && (
                        <span className="px-2 py-0.5 text-[10px] rounded border border-[#1A2540] bg-[#08101E] text-[#556070] font-mono">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    <ArrowRight
                      size={14}
                      className="text-[#556070] group-hover:text-[#00D4FF] group-hover:translate-x-1 transition-all duration-200"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}