import type { Metadata } from "next";
import ServicesHero from "@/sections/services/ServicesHero";
import ServicesGrid from "@/sections/services/ServicesGrid";
import ProcessSection from "@/sections/services/ProcessSection";
import CTASection from "@/sections/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full Stack Development, AI-Powered Applications, SaaS Development, AI Chatbot Integration, API Development, and UI/UX Design.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <CTASection />
    </>
  );
}
