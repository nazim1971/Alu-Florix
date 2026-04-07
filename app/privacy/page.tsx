import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Privacy Policy — How We Handle Your Data | Plorix Digital Agency",
  description: "Learn how Plorix collects, uses, protects, and manages your personal information in compliance with GDPR and industry best practices.",
};

interface PolicySection {
  title: string;
  body: string[];
}

const SECTIONS: PolicySection[] = [
  {
    title: "1. Information We Collect",
    body: [
      "We collect information you provide directly, such as your name, email address, company name, and project details when you fill out our contact form or communicate with us.",
      "We may also collect usage data automatically, including your IP address, browser type, pages visited, and time spent on our website, through standard web analytics tools.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use the information we collect to respond to your inquiries, deliver our services, send project-related communications, and improve our website.",
      "We do not sell, rent, or share your personal information with third parties for their marketing purposes.",
    ],
  },
  {
    title: "3. Cookies",
    body: [
      "Our website may use cookies — small text files stored on your device — to improve your browsing experience and analyze site traffic.",
      "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our site may not function properly without cookies.",
    ],
  },
  {
    title: "4. Data Retention",
    body: [
      "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.",
      "Contact form submissions are retained for up to 24 months. You may request deletion of your data at any time by contacting us.",
    ],
  },
  {
    title: "5. Data Security",
    body: [
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      "While we strive to use commercially acceptable means to protect your information, no method of transmission over the internet is 100% secure.",
    ],
  },
  {
    title: "6. Third-Party Services",
    body: [
      "We may use third-party services (such as analytics providers or form processors) that collect, monitor, and analyze usage data. These third parties have their own privacy policies addressing how they use such information.",
      "We are not responsible for the privacy practices of third parties and encourage you to review their policies.",
    ],
  },
  {
    title: "7. Your Rights",
    body: [
      "Depending on your jurisdiction, you may have the right to access, correct, update, or request deletion of your personal information. You may also have the right to object to processing or request data portability.",
      "To exercise any of these rights, please contact us using the information on our Contact page. We will respond within 30 days.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated revision date.",
      "Your continued use of our services after any changes constitutes your acceptance of the new Privacy Policy.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-white dark:bg-gray-950">
      <PageHero
        title="Privacy Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        imageSeed="legal-privacy-hero"
      />

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="mb-12 text-gray-600 dark:text-gray-400 leading-relaxed">
            At Plorix, we take your privacy seriously. This policy describes what
            personal information we collect, how we use it, and the choices you
            have. It applies to information collected through our website and
            services.
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
              Questions or requests regarding your personal data?{" "}
              <a
                href="/contact"
                className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline underline-offset-4"
              >
                Contact us
              </a>{" "}
              — we&apos;re happy to help.
            </p>
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
