import Link from "next/link";
import { MapPin, Send } from "lucide-react";
import Image from "next/image";

// API_READY — fetch footer content from CMS here

const FOOTER_COLUMNS = [
  {
    title: "Solutions",
    links: [
      { label: "Product Design", href: "/#services" },
      { label: "Web Development", href: "/#services" },
      { label: "Mobile Applications", href: "/#services" },
      { label: "Enterprise Software", href: "/#services" },
      { label: "Cloud Consulting", href: "/#services" },
      { label: "Cybersecurity", href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "FAQ", href: "/faq" },
      { label: "Pricing", href: "/contact" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Technical Support", href: "/contact" },
      { label: "Customer Support", href: "/contact" },
      { label: "Development Support", href: "/contact" },
      { label: "Security Consulting", href: "/contact" },
      { label: "Onboarding", href: "/contact" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const StarIcon = () => (
  <svg className="h-3 w-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      {/* ── Top contact bar ── */}
      <div className="border-b border-gray-800">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-6 sm:grid-cols-3 lg:px-8">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image  src="/images/plorix.png" alt="Plorix Logo" width={40} height={40}  />
            <div>
              <p className="font-bold leading-none text-white">Plorix</p>
              <p className="mt-0.5 text-xs text-gray-500">Digital Agency</p>
            </div>
          </Link>

          {/* Address */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-700 text-gray-400">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Address
              </p>
              <p className="mt-0.5 text-sm text-gray-300">
                123 Innovation Street, San Francisco, CA
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-700 text-gray-400">
              <Send className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Say Hello
              </p>
              <a
                href="mailto:admin@plorixhub.com"
                className="mt-0.5 text-sm text-gray-300 transition-colors hover:text-indigo-400"
              >
                admin@plorixhub.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Main body — 4 columns ── */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Brand column */}
          <div>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Where innovation meets passion — building high-performance digital
              products for modern businesses since 2021.
            </p>

            {/* Review badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["Clutch", "Google"].map((platform) => (
                <div
                  key={platform}
                  className="flex items-center gap-2 rounded-lg border border-gray-800 bg-gray-900 px-3 py-2"
                >
                  <div>
                    <p className="text-xs leading-none text-gray-500">Review On</p>
                    <p className="mt-0.5 text-sm font-bold text-white">{platform}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4].map((i) => <StarIcon key={i} />)}
                    <svg className="h-3 w-3 text-yellow-400/40" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500">(50)</p>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Find us on
            </p>
            <div className="mt-3 flex gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 text-gray-400 transition-all hover:border-indigo-500 hover:text-indigo-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold text-white">{col.title}</h3>
              <div className="mb-5 mt-1 h-0.5 w-8 bg-indigo-600" />
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-8">
          <p className="text-sm text-gray-500">
            Copyright {new Date().getFullYear()}{" "}
            <span className="font-bold text-white">Plorix</span> — All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-sm text-gray-500 transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 transition-colors hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}

