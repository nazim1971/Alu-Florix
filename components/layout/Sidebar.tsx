"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  X,
  Globe,
  Settings2,
  Users,
  ShieldCheck,
  Cpu,
  Paintbrush,
  ChevronDown,
} from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Image from "next/image";

const SERVICES_SUB = [
  { Icon: Globe, title: "Web & App Development", href: "/services/web-development" },
  { Icon: Settings2, title: "Custom Software Development", href: "/services/custom-software" },
  { Icon: Users, title: "Software Consult Service", href: "/services/consulting" },
  { Icon: ShieldCheck, title: "Cybersecurity & Cloud Services", href: "/services/cybersecurity" },
  { Icon: Cpu, title: "AI & Automation Solutions", href: "/services" },
  { Icon: Paintbrush, title: "UI/UX Design & Prototyping", href: "/services" },
];

const NAV_LINKS: { label: string; href: string; hasSubmenu?: boolean }[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services", hasSubmenu: true },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isServicesOpen = open && servicesOpen;

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-80 flex-col bg-white dark:bg-gray-950 shadow-2xl shadow-black/20 dark:shadow-black/50 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 px-6 py-5">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white"
          >
            <Image
              src="/images/plorix.png"
              alt="Plorix Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            Plorix
          </Link>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 transition-colors hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col overflow-y-auto px-6 py-4">
          {NAV_LINKS.map((link, i) =>
            link.hasSubmenu ? (
              <div key={link.href} className="border-b border-gray-200 dark:border-gray-800/80">
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-5 text-base font-medium text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  <span>SERVICES</span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-400 dark:text-gray-500 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180 text-indigo-500 dark:text-indigo-400" : ""
                    }`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="mb-4 space-y-2">
                    {SERVICES_SUB.map((svc) => (
                      <Link
                        key={svc.title}
                        href={svc.href}
                        onClick={onClose}
                        className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-800 px-3 py-3 text-sm text-gray-600 dark:text-gray-400 transition-all hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-white"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700">
                          <svc.Icon className="h-4 w-4 stroke-[1.5]" />
                        </div>
                        {svc.title}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      onClick={onClose}
                      className="flex items-center justify-center rounded-xl border border-indigo-300 dark:border-indigo-800 py-2.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 transition-colors hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
                    >
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="group flex items-center justify-between border-b border-gray-200 dark:border-gray-800/80 py-5 text-base font-medium text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                <span>{link.label}</span>
                <span className="text-xs text-gray-400 dark:text-gray-600 transition-colors group-hover:text-indigo-500 dark:group-hover:text-indigo-400">
                  0{i + 1}
                </span>
              </Link>
            )
          )}
        </nav>

        <div className="flex-1" />

        {/* Footer */}
        <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 px-6 py-6">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            Get Started →
          </Link>
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-600">Toggle theme</p>
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}
