import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Web & App Development — Alu",
  description:
    "High-performance web and mobile applications built with React, Next.js, and Node.js for modern businesses.",
};

const TAGS = ["WEB APPS", "MOBILE APPS", "PWA", "E-COMMERCE"];

const SERVICE_ITEMS = [
  "Frontend Development",
  "Backend APIs",
  "React Native Apps",
  "E-Commerce Solutions",
  "CMS Integration",
  "SEO & Performance",
];

const FAQS: AccordionItem[] = [
  {
    question: "Do You Build Both Web And Mobile Apps?",
    answer:
      "Yes, we develop responsive web applications, progressive web apps (PWAs), and native mobile apps for iOS and Android using React Native.",
  },
  {
    question: "What Frameworks Do You Use?",
    answer:
      "We primarily use Next.js and React for frontend, Node.js/NestJS for backend, and React Native for mobile. The stack is chosen based on your project's performance and scalability needs.",
  },
  {
    question: "How Do You Handle SEO?",
    answer:
      "SEO is built into our development process. We implement server-side rendering, semantic HTML, optimized loading speeds, structured data, and Core Web Vitals best practices.",
  },
  {
    question: "Do You Offer E-Commerce Development?",
    answer:
      "Yes, we build custom e-commerce solutions with features like product management, payment processing, inventory tracking, and seamless third-party integrations.",
  },
  {
    question: "What Is The Typical Project Timeline?",
    answer:
      "A standard website takes 2–4 weeks, while a full-stack web application may take 6–12 weeks depending on complexity. We provide detailed timelines after the discovery phase.",
  },
  {
    question: "Do You Provide Post-Launch Support?",
    answer:
      "Yes, we offer maintenance packages that include bug fixes, security updates, performance monitoring, and feature additions after launch.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <main>
      <PageHero
        title="Service Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Details" },
        ]}
        imageSeed="webdev-service-hero"
      />

      <section className="bg-white py-16 dark:bg-gray-950 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:items-start">

            {/* ── Left column ── */}
            <div>
              {/* Title */}
              <h1 className="text-5xl font-black leading-tight tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Web &amp; App
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
                  src="https://picsum.photos/seed/webdev-main/1200/675"
                  alt="Web & App Development"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <p className="mt-8 leading-relaxed text-gray-600 dark:text-gray-400">
                Where innovation meets passion in a journey that started with a
                simple idea and a shared dream. We build modern, high-performance
                web and mobile applications that help your business reach its full
                potential. From humble beginnings to our current aspirations, every
                step has been fueled by a relentless commitment to quality.
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
                  Where innovation meets passion in a journey that started with a
                  simple idea and a shared dream. We embarked on a mission to
                  bring new innovation and introduce the technology. From humble
                  beginnings to our current aspirations, every step has been
                  fueled by a relentless commitment.
                </p>
              </div>

              {/* Gallery images */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="https://picsum.photos/seed/webdev-g1/400/400"
                    alt="Web development gallery 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="https://picsum.photos/seed/webdev-g2/400/400"
                    alt="Web development gallery 2"
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
