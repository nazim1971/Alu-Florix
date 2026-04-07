import Image from "next/image";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  imageSeed?: string;
}

export default function PageHero({
  title,
  breadcrumbs,
  imageSeed = "office-team",
}: PageHeroProps) {
  return (
    <section className="relative h-72 overflow-hidden sm:h-80 lg:h-96">
      <Image
        src={`https://picsum.photos/seed/${imageSeed}/1600/600`}
        alt={`${title} hero`}
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-900/65" />
      {/* Content */}
      <div className="relative flex h-full flex-col items-start justify-end px-6 pb-12 lg:px-16">
        <h1 className="text-5xl font-black uppercase tracking-tight text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/50">/</span>}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-indigo-300"
                >
                  {crumb.label.toUpperCase()}
                </Link>
              ) : (
                <span className="text-white/70">
                  {crumb.label.toUpperCase()}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
