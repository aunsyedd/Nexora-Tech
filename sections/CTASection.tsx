"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A2540] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border border-[#1A2540]"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1526] via-[#0A1020] to-[#0D1526]" />
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#00D4FF]/6 blur-[100px] rounded-full" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[200px] bg-[#7C3AED]/8 blur-[80px] rounded-full" />

          {/* Decorative border gradient */}
          <div className="absolute inset-0 rounded-2xl p-px">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/20 via-transparent to-[#7C3AED]/20" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }} />
          </div>

          <div className="relative z-10 text-center px-6 sm:px-12 py-16 sm:py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 mb-6"
            >
              <Sparkles size={12} className="text-[#00D4FF]" />
              <span className="text-[#00D4FF] text-xs font-display font-semibold tracking-widest uppercase">
                Ready to Build?
              </span>
            </motion.div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5 max-w-3xl mx-auto">
              Turn Your Idea Into a{" "}
              <span className="gradient-text">Scalable Product</span>
            </h2>

            <p className="text-[#8896A8] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you&apos;re a startup with an MVP or an enterprise modernizing your stack — we&apos;re the team to call. Let&apos;s build something exceptional together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg" icon={<ArrowRight size={18} />}>
                Start a Conversation
              </Button>
              <Button href="/services" size="lg" variant="ghost">
                Explore Services
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
              {[
                "No long-term contracts",
                "Agile delivery",
                "NDA on request",
                "Post-launch support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[#556070] text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
