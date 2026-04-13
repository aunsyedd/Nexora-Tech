"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  icon,
  iconPosition = "right",
  disabled,
  type = "button",
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium font-display rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group";

  const variants = {
    primary:
      "bg-[#00D4FF] text-[#050A14] hover:bg-[#00BBDD] shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]",
    secondary:
      "bg-[#7C3AED] text-white hover:bg-[#6D28D9] shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]",
    ghost:
      "text-[#00D4FF] hover:text-white hover:bg-[#00D4FF]/10 border border-transparent hover:border-[#00D4FF]/30",
    outline:
      "border border-[#00D4FF]/40 text-[#00D4FF] hover:bg-[#00D4FF]/10 hover:border-[#00D4FF]/70",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const inner = (
    <>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
      )}
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {inner}
    </motion.button>
  );
}
