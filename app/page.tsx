import type { Metadata } from "next";
import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import ProjectsSection from "@/sections/ProjectsSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import CTASection from "@/sections/CTASection";

export const metadata: Metadata = {
  title: "Nexora Tech — AI-Powered Software Development",
  description:
    "Building Intelligent Software Solutions with AI & Full Stack Engineering. Premium software development for ambitious companies.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
