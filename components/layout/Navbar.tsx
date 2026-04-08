"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  Globe,
  Settings2,
  Users,
  ShieldCheck,
  Cpu,
  Paintbrush,
  ChevronDown,
} from "lucide-react";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Sidebar from "@/components/layout/Sidebar";
import Image from "next/image";

const DROPDOWN_SERVICES = [
  {
    Icon: Globe,
    title: "Web & App Development",
    desc: "React, Next.js & mobile apps",
    href: "/services/web-development",
  },
  {
    Icon: Settings2,
    title: "Custom Software Development",
    desc: "SaaS, ERP & enterprise apps",
    href: "/services/custom-software",
  },
  {
    Icon: Users,
    title: "Software Consult Service",
    desc: "Architecture, audits & strategy",
    href: "/services/consulting",
  },
  {
    Icon: ShieldCheck,
    title: "Cybersecurity & Cloud Services",
    desc: "AWS, Azure, security & compliance",
    href: "/services/cybersecurity",
  },
  {
    Icon: Cpu,
    title: "AI & Automation Solutions",
    desc: "AI agents & workflow automation",
    href: "/services",
  },
  {
    Icon: Paintbrush,
    title: "UI/UX Design & Prototyping",
    desc: "Design systems & prototyping",
    href: "/services",
  },
];

const INDUSTRIES = [
  "Tour & Tourism",
  "SaaS & Cloud Industry",
  "IT & Digital Solutions",
  "Bidding & Auction",
  "Real Estate & Construction",
  "E-Commerce & Retail",
  "Education & eLearning",
];

const NAV_LINKS: { label: string; href: string; hasDropdown?: boolean }[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openDropdown() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  }
  

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <Image  src="/images/plorix.png" alt="Plorix Logo" width={60} height={60} />
            {/* <span className="text-xl font-bold text-indigo-500">Node-devs</span> */}
          </Link>

          {/* Center nav links — desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1  font-medium text-gray-500 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* Mega dropdown */}
                  {dropdownOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 w-180 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900"
                      onMouseEnter={openDropdown}
                      onMouseLeave={scheduleClose}
                    >
                      {/* Invisible bridge covers the hairline gap */}
                      <div className="absolute -top-2 left-0 right-0 h-2" />

                      <div className="grid grid-cols-[1fr_240px]">

                        {/* Left — service cards */}
                        <div className="p-5">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
                            Problems We Solve
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {DROPDOWN_SERVICES.map((svc) => (
                              <Link
                                key={svc.title}
                                href={svc.href}
                                onClick={() => setDropdownOpen(false)}
                                className="group flex items-start gap-3 rounded-xl border border-gray-100 p-3 transition-all hover:border-indigo-200 hover:bg-indigo-50/60 dark:border-gray-800 dark:hover:border-indigo-700 dark:hover:bg-indigo-900/20"
                              >
                                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors group-hover:border-indigo-300 group-hover:text-indigo-600 dark:border-gray-700 dark:text-gray-400 dark:group-hover:text-indigo-400">
                                  <svc.Icon className="h-4 w-4 stroke-[1.5]" />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold leading-snug text-gray-900 dark:text-white">
                                    {svc.title}
                                  </p>
                                  <p className="mt-0.5 text-xs text-gray-600 dark:text-gray-400">
                                    {svc.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <Link
                            href="/services"
                            onClick={() => setDropdownOpen(false)}
                            className="mt-3 flex w-full items-center justify-between rounded-xl bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-indigo-100 hover:text-indigo-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400"
                          >
                            View All Services
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                              ↗
                            </span>
                          </Link>
                        </div>

                        {/* Right — industries + CTA */}
                        <div className="border-l border-gray-100 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/60">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
                            Industries We Cover
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {INDUSTRIES.map((ind) => (
                              <span
                                key={ind}
                                className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                              >
                                {ind}
                              </span>
                            ))}
                          </div>
                          <div className="mt-4 overflow-hidden rounded-xl bg-linear-to-br from-indigo-900 via-purple-900 to-indigo-800 p-4">
                            <p className="text-sm font-bold leading-snug text-white">
                              Get premium support by{" "}
                              <span className="text-indigo-300">industry experts.</span>
                            </p>
                            <p className="mt-1 text-xs text-indigo-300">Mon–Fri, 9AM–6PM PST</p>
                            <Link
                              href="/contact"
                              onClick={() => setDropdownOpen(false)}
                              className="mt-3 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold text-gray-900 transition-colors hover:bg-indigo-50"
                            >
                              Help Desk
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-gray-500 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right — desktop */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link href="/contact">
            <Button  variant="primary" size="md">
              Get Started
            </Button>
            </Link>
          </div>

          {/* Mobile: theme toggle + sidebar button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

        </div>
      </header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
  );
};
