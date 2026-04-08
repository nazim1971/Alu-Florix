import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Building2, Tag, User } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import { PROJECTS } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project — Plorix Digital Agency" };
  return {
    title: `${project.title} — Portfolio | Plorix Digital Agency`,
    description: project.shortDesc,
  };
}

export default async function ProjectDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return notFound();

  const meta = [
    { icon: User, label: "Client", value: project.client },
    { icon: Building2, label: "Company", value: project.company },
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Tag, label: "Project Type", value: project.projectType },
  ];

  return (
    <main>
      <PageHero
        title="Portfolio Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Work", href: "/work" },
          { label: project.title },
        ]}
        imageSeed={project.coverSeed}
      />

      {/* Full-width main image */}
      <section className="bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 sm:pt-12 lg:px-8">
          <div className="relative w-full overflow-hidden rounded-xl">
            <div className="relative aspect-video w-full">
              <Image
                src={`https://picsum.photos/seed/${project.mainImageSeed}/1200/675`}
                alt={`${project.title} main project image`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two-column content */}
      <section className="bg-white py-10 sm:py-16 dark:bg-gray-950 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_1.5fr]">

            {/* ── Left column ── */}
            <div className="space-y-14">

              {/* Intro */}
              <div>
                <h1 className="text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">
                  Our Begin Now.
                </h1>
                <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.shortDesc} We approached this project with a clear
                  focus on user experience, performance, and scalability —
                  delivering a solution that exceeds expectations and stands the
                  test of time.
                </p>
              </div>

              {/* Design & Developing */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                  Design &amp; Developing
                </h2>
                <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                  Our team combined meticulous UI/UX design with robust
                  engineering to create a seamless product. Every interaction
                  was carefully crafted — from wireframes to pixel-perfect
                  front-end components backed by a high-availability
                  infrastructure.
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "User research & personas",
                    "Component design system",
                    "Performance optimisation",
                    "API design & documentation",
                    "Accessibility (WCAG 2.1 AA)",
                    "CI/CD pipeline setup",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-indigo-600 text-[8px] font-bold text-white flex items-center justify-center">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Gallery row 1 */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                    <Image
                      src={`https://picsum.photos/seed/${project.gallery1Seed}/600/450`}
                      alt={`${project.title} design process`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 300px"
                    />
                  </div>
                  <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                    <Image
                      src={`https://picsum.photos/seed/${project.gallery2Seed}/600/450`}
                      alt={`${project.title} development phase`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 300px"
                    />
                  </div>
                </div>
              </div>

              {/* After Work */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                  After Work
                </h2>
                <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                  Post-launch, we conducted rigorous testing, performance
                  audits, and user feedback rounds. Iterative improvements were
                  shipped in rapid cycles, ensuring the product remained ahead
                  of market expectations.
                </p>
                <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "A/B testing & analytics",
                    "Load & stress testing",
                    "Security penetration testing",
                    "User onboarding refine",
                    "SEO & Core Web Vitals",
                    "24/7 monitoring setup",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-purple-600 text-[8px] font-bold text-white flex items-center justify-center">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Gallery row 2 */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                    <Image
                      src={`https://picsum.photos/seed/${project.gallery3Seed}/600/450`}
                      alt={`${project.title} post-launch results`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 300px"
                    />
                  </div>
                  <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                    <Image
                      src={`https://picsum.photos/seed/${project.gallery4Seed}/600/450`}
                      alt={`${project.title} final product overview`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 300px"
                    />
                  </div>
                </div>
              </div>

              {/* Final Result */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                  Final Result
                </h2>
                <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                  The delivered product exceeded every KPI set at the outset —
                  faster time-to-market, improved user retention, measurably
                  lower infrastructure costs, and a codebase ready to scale to
                  the next stage of growth. Our partnership continues with
                  ongoing feature development and support.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* ── Right column (sticky sidebar) ── */}
            <div className="lg:sticky lg:top-28 lg:self-start space-y-6">

              {/* Project Info Card */}
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-7 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-6 text-lg font-black text-gray-900 dark:text-white">
                  Project Info
                </h3>
                <ul className="space-y-5">
                  {meta.map(({ icon: Icon, label, value }) => (
                    <li key={label} className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-950">
                        <Icon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                          {label}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-gray-800 dark:text-gray-200">
                          {value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="rounded-xl bg-linear-to-br from-indigo-900 via-purple-900 to-indigo-800 p-7 text-white">
                <h3 className="text-xl font-black leading-snug">
                  Ready to work with us?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-indigo-200">
                  Let&apos;s build your next product together. Our team is ready to
                  turn your vision into a high-performing digital experience.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full bg-white px-5 py-2.5 text-center text-sm font-bold text-indigo-900 transition hover:bg-indigo-50"
                  >
                    Start a Project
                  </Link>
                  <Link
                    href="/work"
                    className="rounded-full border border-white/30 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    ← Back to Portfolio
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
