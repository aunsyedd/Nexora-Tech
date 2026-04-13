import type { Metadata } from "next";
import ProjectsHero from "@/sections/projects/ProjectsHero";
import ProjectsGrid from "@/sections/projects/ProjectsGrid";
import CTASection from "@/sections/CTASection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Nexora Tech's portfolio of AI-powered applications, SaaS platforms, and full-stack web development projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <CTASection />
    </>
  );
}
