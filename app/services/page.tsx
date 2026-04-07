import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Services from "@/components/sections/Services";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Services — Comprehensive IT Solutions for Your Business | Plorix Digital Agency",
  description:
    "Explore our comprehensive IT solutions: web development, custom software, consulting, and cybersecurity & cloud services.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        imageSeed="office-services-hero"
      />
      <Services />
      <ContactSection />
    </main>
  );
}
