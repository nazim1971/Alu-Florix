import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Software Consulting — Alu",
  description:
    "Expert technical consulting, architecture reviews, code audits, and digital transformation roadmaps for your business.",
};

const TAGS = ["TECH STRATEGY", "ARCHITECTURE REVIEW", "CODE AUDIT", "TEAM TRAINING"];

const SERVICE_ITEMS = [
  "Technical Strategy",
  "Architecture Design",
  "Code Reviews",
  "Team Upskilling",
  "Roadmapping",
  "Digital Transformation",
];

const FAQS: AccordionItem[] = [
  {
    question: "What Does A Consulting Engagement Look Like?",
    answer:
      "Typically we start with a discovery session to assess your current state, then deliver an actionable report with recommendations. Ongoing advisory retainers are also available.",
  },
  {
    question: "Can You Review Our Existing Codebase?",
    answer:
      "Yes, we offer thorough code audits covering code quality, security vulnerabilities, performance bottlenecks, and architectural issues, with a prioritized remediation roadmap.",
  },
  {
    question: "Do You Help With Technology Selection?",
    answer:
      "Yes, we provide unbiased technology assessments to help you choose the right tools, frameworks, and platforms for your long-term goals and team capabilities.",
  },
  {
    question: "Can You Help Train Our Development Team?",
    answer:
      "Absolutely. We offer workshops, code reviews, mentoring, and pair programming sessions to upskill your team in modern development practices.",
  },
  {
    question: "Do You Provide Digital Transformation Roadmaps?",
    answer:
      "Yes, we help organizations plan and execute digital transformation initiatives, from modernizing legacy systems to adopting cloud-native architectures.",
  },
  {
    question: "How Long Does A Consulting Project Take?",
    answer:
      "Scope varies widely. An initial assessment can be completed in 1–2 weeks, while a comprehensive transformation roadmap may take a month. Ongoing advisory is flexible.",
  },
];

export default function ConsultingPage() {
  return (
    <main>
      <PageHero
        title="Service Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Details" },
        ]}
        imageSeed="consulting-service-hero"
      />

      <section className="bg-white py-16 dark:bg-gray-950 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:items-start">

            {/* ── Left column ── */}
            <div>
              {/* Title */}
              <h1 className="text-5xl font-black leading-tight tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Software
              </h1>
              <h1 className="text-5xl font-black leading-tight tracking-tight text-gray-400 sm:text-6xl">
                Consulting.
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
                  src="https://picsum.photos/seed/consult-main/1200/675"
                  alt="Software Consulting"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <p className="mt-8 leading-relaxed text-gray-600 dark:text-gray-400">
                Where innovation meets passion in a journey that started with a
                simple idea and a shared dream. Our consulting practice helps
                technology leaders make smarter decisions, ship better software,
                and build stronger teams. From humble beginnings to our current
                aspirations, every step has been fueled by a relentless
                commitment to client success.
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
                  Welcome to Alu.
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
                  Our consultants bring decades of combined experience across
                  industries. We partner with you as trusted advisors — not
                  vendors — providing candid guidance that puts your business
                  outcomes first. From humble beginnings to our current
                  aspirations, forward.
                </p>
              </div>

              {/* Gallery images */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="https://picsum.photos/seed/consult-g1/400/400"
                    alt="Consulting gallery 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="https://picsum.photos/seed/consult-g2/400/400"
                    alt="Consulting gallery 2"
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
