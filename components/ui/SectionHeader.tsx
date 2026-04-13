"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  const parts = titleHighlight ? title.split(titleHighlight) : [title];

  return (
    <motion.div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-[#00D4FF]" />
          <span className="text-[#00D4FF] text-xs font-display font-semibold tracking-[0.2em] uppercase">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-[#00D4FF]" />
        </div>
      )}

      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
        {titleHighlight ? (
          <>
            {parts[0]}
            <span className="gradient-text">{titleHighlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p className="text-[#8896A8] text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
