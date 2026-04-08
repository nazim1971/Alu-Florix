import Image from "next/image";
import Link from "next/link";
import { Globe, Settings2, Users, ShieldCheck } from "lucide-react";

// API_READY — fetch services list from API or CMS here

interface Service {
  number: string;
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  href: string;
  image: string;
  tags: string[];
}

const SERVICES: Service[] = [
  {
    number: "01.",
    Icon: Globe,
    title: "Web & App Development",
    href: "/services/web-development",
    image: "/images/Web & App Development.png",
    tags: [
      "Web Development", "Next.js", "React", "TypeScript", "REST APIs",
      "Performance", "SEO", "App Development", "UI/UX Design",
      "Web Development", "Next.js", "React", "TypeScript", "REST APIs",
    ],
  },
  {
    number: "02.",
    Icon: Settings2,
    title: "Custom Software Development",
    href: "/services/custom-software",
    image: "/images/Custom software solutions for businesses.png",
    tags: [
      "Custom Software", "Enterprise Apps", "Database Design", "API Integration",
      "Cloud Native", "DevOps", "CI/CD", "Microservices",
      "Custom Software", "Enterprise Apps", "Database Design", "API Integration",
    ],
  },
  {
    number: "03.",
    Icon: Users,
    title: "Software Consult Service",
    href: "/services/consulting",
    image: "/images/Consulting meeting and strategy flow.png",
    tags: [
      "Technical Consulting", "Architecture Review", "Code Audits", "Team Training",
      "Tech Strategy", "Digital Transformation", "Roadmapping",
      "Technical Consulting", "Architecture Review", "Code Audits", "Team Training",
    ],
  },
  {
    number: "04.",
    Icon: ShieldCheck,
    title: "Cybersecurity & Cloud Services",
    href: "/services/cybersecurity",
    image: "/images/Secure your cloud, scale your future.png",
    tags: [
      "Cybersecurity", "Cloud Infrastructure", "AWS", "Azure", "GCP",
      "Security Audits", "Penetration Testing", "Compliance",
      "Cybersecurity", "Cloud Infrastructure", "AWS", "Azure", "GCP",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row">

          {/* LEFT — sticky */}
          <div className="flex items-center border-b border-gray-200 px-6 py-16 dark:border-gray-800 lg:w-[40%] lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:self-start lg:border-b-0 lg:border-r lg:px-12 lg:py-24">
            <div className="max-w-xs">
              <h2 className="text-3xl font-black leading-tight text-gray-900 dark:text-white sm:text-4xl">
                Comprehensive
                <br />
                Solutions.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                We pride ourselves staying at the front of innovation —
                constantly pushing boundaries and shaping the digital world
                together, redefining what&apos;s possible.
              </p>
              <Link
                href="/services"
                className="mt-10 inline-flex items-center gap-2 border-b-2 border-gray-900 pb-0.5 text-xs font-bold uppercase tracking-widest text-gray-900 transition-colors hover:border-indigo-600 hover:text-indigo-600 dark:border-white dark:text-white dark:hover:border-indigo-400 dark:hover:text-indigo-400"
              >
                VIEW ALL SERVICES ↘
              </Link>
            </div>
          </div>

          {/* RIGHT — scrollable rows */}
          <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800 lg:w-[60%]">
            {SERVICES.map((service) => (
              <div key={service.number} className="px-6 py-12 lg:px-12">

                {/* Number */}
                <p className="mb-6 text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  {service.number}
                </p>

                {/* Icon + title + image */}
                <div className="grid grid-cols-2 items-start gap-6">
                  {/* Left: icon + title + link */}
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 text-gray-600 dark:border-gray-700 dark:text-gray-400">
                      <service.Icon className="h-5 w-5 stroke-[1.5]" />
                    </div>
                    <h3 className="text-2xl font-black leading-tight text-gray-900 dark:text-white sm:text-3xl">
                      {service.title}
                    </h3>
                    <Link
                      href={service.href}
                      className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      VIEW DETAILS ↘
                    </Link>
                  </div>

                  {/* Right: image */}
                  <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain "
                      sizes="(max-width: 1024px) 50vw, 30vw"
                    />
                  </div>
                </div>

                {/* Marquee tags */}
                <div className="mt-8 overflow-hidden">
                  <div className="flex w-max animate-marquee gap-3">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="shrink-0 inline-flex items-center rounded-full border border-gray-300 px-4 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-700 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

