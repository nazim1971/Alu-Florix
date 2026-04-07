import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Custom Software Development — Tailored Solutions for Your Business | Plorix Digital Agency",
  description:
    "Bespoke enterprise software, SaaS platforms, and workflow automation built to fit your exact business needs.",
};

const TAGS = ["ENTERPRISE APPS", "SAAS PLATFORMS", "AUTOMATION", "INTEGRATION"];

const SERVICE_ITEMS = [
  "Custom ERP / CRM",
  "SaaS Development",
  "Workflow Automation",
  "API Integration",
  "Microservices",
  "CI/CD Pipelines",
];

const FAQS: AccordionItem[] = [
  {
    question: "What Types Of Custom Software Do You Build?",
    answer:
      "We build enterprise applications, SaaS platforms, workflow automation tools, CRM/ERP systems, and any bespoke software tailored to your specific business processes.",
  },
  {
    question: "How Do You Capture My Requirements?",
    answer:
      "We start with a discovery workshop to understand your business goals, user needs, and technical constraints. This results in a detailed project specification before any code is written.",
  },
  {
    question: "Is Agile Development Used?",
    answer:
      "Yes, we follow agile methodologies with 2-week sprints, regular demos, and continuous feedback loops to ensure the software aligns with your evolving requirements.",
  },
  {
    question: "Do You Handle Database Design?",
    answer:
      "Absolutely. We architect relational and NoSQL databases for performance, data integrity, and scalability from the ground up.",
  },
  {
    question: "Can You Integrate With Our Existing Systems?",
    answer:
      "Yes, we specialize in system integration via REST APIs, webhooks, and middleware solutions to connect new software with your existing infrastructure.",
  },
  {
    question: "What Happens After Delivery?",
    answer:
      "We provide comprehensive documentation, knowledge transfer, and ongoing support options to ensure a smooth transition and continued operation.",
  },
];

export default function CustomSoftwarePage() {
  return (
    <main>
      <PageHero
        title="Service Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Details" },
        ]}
        imageSeed="software-service-hero"
      />

      <section className="bg-white py-16 dark:bg-gray-950 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:items-start">

            {/* ── Left column ── */}
            <div>
              {/* Title */}
              <h1 className="text-5xl font-black leading-tight tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Custom Software
              </h1>
              <h1 className="text-5xl font-black leading-tight tracking-tight text-gray-400 sm:text-6xl">
                Development.
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
                  src="https://picsum.photos/seed/software-main/1200/675"
                  alt="Custom Software Development"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <p className="mt-8 leading-relaxed text-gray-600 dark:text-gray-400">
                Where innovation meets passion in a journey that started with a
                simple idea and a shared dream. We craft tailored software
                solutions that eliminate inefficiencies and empower your teams
                to do their best work. From humble beginnings to our current
                aspirations, every step has been fueled by a relentless
                commitment to delivering value.
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
                  We believe that the right software can transform any business.
                  Our team of experienced engineers and architects work alongside
                  you to design, build, and evolve software that scales with your
                  ambitions. From humble beginnings to our current aspirations,
                  every step has been fueled by a relentless commitment.
                </p>
              </div>

              {/* Gallery images */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="https://picsum.photos/seed/software-g1/400/400"
                    alt="Custom software gallery 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="https://picsum.photos/seed/software-g2/400/400"
                    alt="Custom software gallery 2"
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
