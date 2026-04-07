
import ContactSection from "@/components/sections/ContactSection";
import PageHero from "@/components/sections/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Plorix Digital Agency",
  description: "Get in touch with Plorix for web development, app solutions, IT services, and support. Contact our team for inquiries, quotes, or project discussions.",
};

export default function ContactPage() {

  return (
    <main >
      <PageHero
              title="Contact Us"
              breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]}
              imageSeed="office-contact-hero"
            />
     <ContactSection/>
    </main>
  );
}
