import type { Metadata } from "next";
import ContactHero from "@/sections/contact/ContactHero";
import ContactSection from "@/sections/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nexora Tech. Start a project, ask a question, or just say hello.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}
