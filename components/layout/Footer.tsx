import Link from "next/link";
import { Zap, Twitter, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { NAV_LINKS, SERVICES } from "@/lib/data";
import Image from "next/image";

const SOCIAL_LINKS = [
  // { icon: Twitter, href: "https://twitter.com/nexoratech", label: "Twitter" },
  // { icon: Github, href: "https://github.com/nexoratech", label: "GitHub" },
  // { icon: Linkedin, href: "https://linkedin.com/company/nexoratech", label: "LinkedIn" },
  // { icon: Mail, href: "mailto:hello@nexoratech.io", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1A2540] bg-[#050A14] overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#00D4FF]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
            
             <div className="relative w-24 h-24">
             
                 <Image
                   src="/assets/image.png"
                   alt="Nexora Tech Logo"
                   fill
                   className="object-contain"
                   priority
                 />
               </div>
            </Link>
            <p className="text-[#8896A8] text-sm leading-relaxed mb-6">
              Building intelligent software solutions with AI & full stack engineering. Premium development for ambitious companies.
            </p>
            <div className="flex items-center gap-3">
              {/* {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-[#1A2540] flex items-center justify-center text-[#8896A8] hover:text-[#00D4FF] hover:border-[#00D4FF]/40 hover:bg-[#00D4FF]/5 transition-all duration-200"
                >
                  <Icon size={15} />
                </Link>
              ))} */}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm tracking-wide mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8896A8] hover:text-[#00D4FF] text-sm transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm tracking-wide mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/services#${svc.id}`}
                    className="text-[#8896A8] hover:text-[#00D4FF] text-sm transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200" />
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm tracking-wide mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3 text-sm text-[#8896A8]">
              <p>hello@nexoratech.io</p>
              <p>+92-316-0488395</p>
              <p className="leading-relaxed">
               Jeddah, Saudi Arabia
              
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-5 text-[#00D4FF] text-sm font-medium hover:gap-3 transition-all duration-200"
            >
              Start a project <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1A2540] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#556070] text-xs">
            © {new Date().getFullYear()} Nexora Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[#556070] text-xs">
            <span>CEO: Syed Aun Muhammad</span>
            <span>•</span>
            <Link href="/privacy" className="hover:text-[#8896A8] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#8896A8] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
