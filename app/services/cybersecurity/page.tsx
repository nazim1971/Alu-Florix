import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Cybersecurity & Cloud Services — Enterprise Security & Cloud Solutions | Plorix Digital Agency",
  description:
    "Penetration testing, OWASP compliance, cloud migration, and DevSecOps to keep your business secure and resilient.",
};

const TAGS = ["SECURITY AUDIT", "CLOUD INFRA", "COMPLIANCE", "PENETRATION TEST"];

const SERVICE_ITEMS = [
  "Penetration Testing",
  "Cloud Migration",
  "OWASP Compliance",
  "Security Architecture",
  "Incident Response",
  "DevSecOps",
];

const FAQS: AccordionItem[] = [
  {
    question: "What Security Services Do You Offer?",
    answer:
      "We provide penetration testing, OWASP compliance audits, security architecture reviews, vulnerability assessments, incident response planning, and DevSecOps implementation.",
  },
  {
    question: "Which Cloud Platforms Do You Work With?",
    answer:
      "We have expertise across AWS, Microsoft Azure, and Google Cloud Platform. We also work with hybrid cloud and multi-cloud environments.",
  },
  {
    question: "How Do You Handle Cloud Migration?",
    answer:
      "We follow a structured migration approach: assess, plan, migrate, and optimize. We ensure minimal downtime and data integrity throughout the process.",
  },
  {
    question: "Is My Data Safe During A Security Audit?",
    answer:
      "Yes, all our security professionals sign NDAs and operate within strict ethical guidelines. Findings are reported confidentially and remediation is handled with full discretion.",
  },
  {
    question: "Do You Provide Compliance Services?",
    answer:
      "Yes, we help organizations achieve and maintain compliance with standards such as GDPR, SOC 2, ISO 27001, HIPAA, and PCI-DSS.",
  },
  {
    question: "What Is DevSecOps?",
    answer:
      "DevSecOps integrates security practices into your CI/CD pipeline so every code deployment is automatically scanned for vulnerabilities, ensuring security is built-in rather than bolted on.",
  },
];

export default function CybersecurityPage() {
  return (
    <main>
      <PageHero
        title="Service Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Details" },
        ]}
        imageSeed="security-service-hero"
      />

      <section className="bg-white py-16 dark:bg-gray-950 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:items-start">

            {/* ── Left column ── */}
            <div>
              {/* Title */}
              <h1 className="text-5xl font-black leading-tight tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Cybersecurity &amp;
              </h1>
              <h1 className="text-5xl font-black leading-tight tracking-tight text-gray-400 sm:text-6xl">
                Cloud Services.
              </h1>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-300 px-4 py-1.5 text-xs font-semibold text-gray-600 dark:border-gray-700 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Main image */}
              <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://picsum.photos/seed/security-main/1200/675"
                  alt="Cybersecurity and Cloud Services"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <p className="mt-8 leading-relaxed text-gray-600 dark:text-gray-400">
                Where innovation meets passion in a journey that started with a
                simple idea and a shared dream. We protect your digital assets
                and infrastructure with enterprise-grade security practices and
                cloud expertise. From humble beginnings to our current
                aspirations, every step has been fueled by a relentless
                commitment to keeping our clients safe and resilient.
              </p>

              {/* Service items — 2 cols */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {SERVICE_ITEMS.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-indigo-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Welcome section */}
              <div className="mt-12">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                  Welcome to Plorix.
                </h3>
                <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                  Where innovation meets passion in a journey that started with a
                  simple idea and a shared dream. Founded in recent years, we
                  embarked on a mission to bring new innovation and introduce
                  cutting-edge technology. From humble beginnings to our current
                  aspirations, every step has been fueled by a relentless
                  commitment to excellence.
                </p>
                <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                  In an era where threats evolve daily, Plorix stands as your
                  dedicated security partner. Our certified experts implement
                  proactive defenses and cloud architectures that scale without
                  compromising safety. From humble beginnings to our current
                  aspirations, every step has been forward.
                </p>
              </div>

              {/* Gallery images */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="https://picsum.photos/seed/security-g1/400/400"
                    alt="Cybersecurity gallery 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="https://picsum.photos/seed/security-g2/400/400"
                    alt="Cybersecurity gallery 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* ── Right column — FAQ ── */}
            <div className="lg:sticky lg:top-24">
              <Accordion items={FAQS} />
            </div>

          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
