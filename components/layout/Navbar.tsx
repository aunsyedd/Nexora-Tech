"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";


import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#050A14]/80 backdrop-blur-xl border-b border-[#1A2540]/60 shadow-lg"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
<Link href="/" className="flex items-center gap-3 group">
<div className="relative w-14 h-14">

    <Image
      src="/assets/image.png"
      alt="Nexora Tech Logo"
      fill
      className="object-contain"
      priority
    />
  </div>

  {/* <span className="font-display font-bold text-xl text-white tracking-tight">
    Nexora<span className="text-[#00D4FF]">Tech</span>
  </span> */}
</Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  pathname === link.href
                    ? "text-[#00D4FF] bg-[#00D4FF]/10"
                    : "text-[#8896A8] hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button href="/contact" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#8896A8] hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#050A14]/95 backdrop-blur-xl border-b border-[#1A2540] md:hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                    pathname === link.href
                      ? "text-[#00D4FF] bg-[#00D4FF]/10"
                      : "text-[#8896A8] hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button href="/contact" size="sm" className="w-full justify-center">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
