import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Terms & Conditions — Legal Terms Governing Use of Plorix Services | Plorix Digital Agency",
  description: "Read the terms and conditions governing use of Plorix services, including project agreements, IP ownership, payment terms, and confidentiality.",
};

interface Section {
  title: string;
  body: string[];
}

const SECTIONS: Section[] = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using any service provided by Plorix ('Company', 'we', 'us'), you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, do not use our services.",
      "We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the service after any changes constitutes your acceptance of the new terms.",
    ],
  },
  {
    title: "2. Services",
    body: [
      "Plorix provides digital product design, web development, and growth strategy services on a project or retainer basis. Specific deliverables, timelines, and pricing are defined in individual Statements of Work (SOW) signed by both parties.",
      "We reserve the right to refuse service to anyone for any reason at any time.",
    ],
  },
  {
    title: "3. Intellectual Property",
    body: [
      "Upon full payment of all invoices, the client receives full ownership of all custom deliverables created specifically for their project, including source code and design files.",
      "Plorix retains ownership of all pre-existing tools, frameworks, templates, and methodologies used during the engagement. Nothing in this agreement transfers ownership of our proprietary processes or general-purpose code libraries.",
    ],
  },
  {
    title: "4. Payment Terms",
    body: [
      "Unless otherwise specified in the SOW, all projects require a 50% deposit before work begins. The remaining balance is due upon delivery of the final deliverables.",
      "Invoices are due within 14 days of receipt. Late payments may incur a 1.5% monthly interest charge. Plorix reserves the right to pause or terminate work on unpaid accounts.",
    ],
  },
  {
    title: "5. Confidentiality",
    body: [
      "Both parties agree to keep confidential any non-public information shared during the engagement. This obligation survives termination of the agreement for a period of two (2) years.",
      "This does not apply to information that is publicly available, independently developed, or required to be disclosed by law.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Plorix shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to the use of our services.",
      "Our total cumulative liability to you for any claims arising from or related to these terms shall not exceed the total fees paid by you in the three (3) months preceding the claim.",
    ],
  },
  {
    title: "7. Termination",
    body: [
      "Either party may terminate a project engagement with 14 days written notice. The client is responsible for payment for all work completed up to the termination date.",
      "Plorix may terminate immediately if the client breaches these terms or if continuation of the work would violate any law or regulation.",
    ],
  },
  {
    title: "8. Governing Law",
    body: [
      "These terms are governed by and construed in accordance with applicable laws. Any disputes shall be resolved through good-faith negotiation, and if necessary, binding arbitration.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="bg-white dark:bg-gray-950">
      <PageHero
        title="Terms & Conditions"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
        imageSeed="legal-terms-hero"
      />

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="mb-12 text-gray-600 dark:text-gray-400 leading-relaxed">
            Please read these Terms and Conditions carefully before using our
            services. These terms apply to all clients, visitors, and other
            users who access or use Plorix&apos;s services.
          </p>

          <div className="space-y-12">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact note */}
          <div className="mt-16 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Questions about these terms?{" "}
              <a
                href="/contact"
                className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline underline-offset-4"
              >
                Contact us
              </a>{" "}
              and we&apos;ll respond within one business day.
            </p>
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
