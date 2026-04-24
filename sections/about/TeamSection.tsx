"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Quote, CheckCircle2 } from "lucide-react";
import Image from "next/image";



const HIGHLIGHTS = [
  "AI Full-Stack Developer specializing in scalable web applications",
  "Focused on building SEO-optimized and performance-driven products",
  "Experienced in integrating LLMs into modern web systems",
  "Collaborates with cross-functional teams on real-world client projects",
  "Passionate about modern AI tools, automation, and clean architecture",
];
export default function TeamSection() {
  return (
    
    <section className="py-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_50%,rgba(0,212,255,0.04),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A2540] to-transparent" />

         <div className="flex justify-center">
  <div className="items-center gap-2 mb-9  ">
    <span className="h-px w-8 bg-[#00D4FF]" />
    <span className="text-[#00D4FF] text-xs font-display font-semibold tracking-[0.2em] uppercase">
      Meet the Team
    </span>
  </div>
</div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Avatar card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#00D4FF]/20 via-transparent to-[#7C3AED]/20 blur-xl" />

              <div className="relative w-72 sm:w-80 rounded-2xl border border-[#1A2540] bg-[#0D1526] overflow-hidden">
                {/* Gradient top bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#00D4FF] to-[#7C3AED]" />

                {/* Avatar placeholder */}
     <div className="aspect-square bg-gradient-to-br from-[#0D1526] via-[#1A2540] to-[#0D1526] flex items-center justify-center">
  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00D4FF]/30 to-[#7C3AED]/30 border-2 border-[#00D4FF]/40 flex items-center justify-center overflow-hidden">
    
    <Image
      src="/assets/Qasim pic.png"   // change this to your image path
      alt="Profile Image"
      width={128}
      height={128}
      className="object-cover w-full h-full"
      priority
    />

  </div>
</div>

                {/* Info card */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">Syed Qasim Raza</h3>
                      <p className="text-[#00D4FF] text-sm font-medium">AI Full-Stack Developer | SEO Specialist</p>
                    </div>
                    <div className="flex gap-2">
                      {/* <Link href="https://linkedin.com" target="_blank" className="w-8 h-8 rounded-lg border border-[#1A2540] flex items-center justify-center text-[#556070] hover:text-[#00D4FF] hover:border-[#00D4FF]/40 transition-all">
                        <Linkedin size={14} />
                      </Link>
                      <Link href="https://twitter.com" target="_blank" className="w-8 h-8 rounded-lg border border-[#1A2540] flex items-center justify-center text-[#556070] hover:text-[#00D4FF] hover:border-[#00D4FF]/40 transition-all">
                        <Twitter size={14} />
                      </Link> */}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[#556070] text-xs">Available for projects</span>
                  </div>
                </div>
                
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >


<h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-6">
  Driven by a passion for{" "}
  <span className="gradient-text">building impactful digital experiences</span>
</h2>

{/* Pull quote */}
<div className="relative pl-5 border-l-2 border-[#00D4FF]/40 mb-6">
  <Quote size={18} className="text-[#00D4FF]/40 mb-2" />
  <p className="text-[#8896A8] italic leading-relaxed">
    &ldquo;We believe great products come from strong collaboration and clean engineering. Every line of code we write is focused on delivering real value, performance, and scalability for our clients.&rdquo;
  </p>
</div>

            <ul className="space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#8896A8]">
                  <CheckCircle2 size={16} className="text-[#00D4FF] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
