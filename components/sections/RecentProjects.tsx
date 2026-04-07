import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

// Show first 4 projects on home page
const FEATURED = PROJECTS.slice(0, 4);

export default function RecentProjects() {
  return (
    <section id="projects" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white sm:text-5xl">
            Projects That Inspire
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-500 dark:text-gray-400">
            We pride ourselves staying at the front of innovation, constantly
            pushing — shaping the Digital World Together, redefining what&apos;s
            possible.
          </p>
        </div>

        {/* 2×2 dark-card grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {FEATURED.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* Background image */}
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={`https://picsum.photos/seed/${project.coverSeed}/800/600`}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 via-gray-950/40 to-transparent" />
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-gray-300">
                  {project.category}
                </p>
                <h3 className="text-xl font-black text-white sm:text-2xl">
                  {project.title}
                </h3>
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

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-indigo-500"
          >
            VIEW ALL PROJECTS ↗
          </Link>
        </div>

      </div>
    </section>
  );
}

