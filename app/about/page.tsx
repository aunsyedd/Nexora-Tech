import type { Metadata } from "next";
import AboutHero from "@/sections/about/AboutHero";
import MissionVision from "@/sections/about/MissionVision";
import CEOSection from "@/sections/about/CEOSection";
import ValuesSection from "@/sections/about/ValuesSection";
import CTASection from "@/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Nexora Tech, our mission to build intelligent software, and meet CEO Syed Aun Muhammad.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <CEOSection />
      <ValuesSection />
      <CTASection />
    </>
  );
}
