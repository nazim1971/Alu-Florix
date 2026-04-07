import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FaqContent from "@/components/sections/FaqContent";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions | Alu",
  description: "Find answers to common questions about our services, pricing, technology, payment options, and more.",
};

export default function FAQPage() {
  return (
    <main>
      <PageHero
        title="FAQ"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        imageSeed="office-faq-hero"
      />
      <FaqContent />
      <ContactSection />
    </main>
  );
}
