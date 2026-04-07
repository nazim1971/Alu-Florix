import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our Work — Portfolio | Plorix Digital Agency",
  description:
    "Explore Plorix's portfolio of high-performance digital products — from fintech cloud migrations to SaaS platforms, e-commerce, and enterprise software.",
};

export default function WorkPage() {
  return (
    <main>
      <PageHero
        title="Portfolio Grid"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio Grid" }]}
        imageSeed="portfolio-hero-2026"
      />

      <section className="bg-white py-20 dark:bg-gray-950 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-12 text-center">
            <h1 className="text-4xl font-black text-gray-900 dark:text-white sm:text-5xl">
              Projects That Inspire
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-gray-500 dark:text-gray-400">
              We pride ourselves staying at the front of innovation, constantly
              pushing — shaping the Digital World Together, redefining what&apos;s
              possible.
            </p>
          </div>

          {/* Portfolio grid — 2 col */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={`https://picsum.photos/seed/${project.coverSeed}/800/600`}
                    alt={`${project.title} — ${project.category}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 via-gray-950/40 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-gray-300">
                    {project.category}
                  </p>
                  <h2 className="text-xl font-black text-white sm:text-2xl">
                    {project.title}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <ContactSection />
    </main>
  );
}
