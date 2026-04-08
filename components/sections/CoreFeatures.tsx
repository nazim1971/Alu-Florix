"use client";

import { useState } from "react";
import {
  Search,
  FileCheck,
  Zap,
  Palette,
  RefreshCw,
  Monitor,
  Headphones,
  ShieldCheck,
  GitBranch,
  Database,
  Globe,
  CheckCircle2,
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiDotnet,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGraphql,
  SiRedis,
  SiGithubactions,
  SiPrisma,
  SiKubernetes,
  SiVuedotjs,
} from "react-icons/si";
import { Cloud } from "lucide-react";
import React from "react";
import { DiRedis } from "react-icons/di";


/* ── Features tab data ──────────────────────────────────────── */
const FEATURES = [
  {
    icon: <Monitor className="h-6 w-6" />,
    color: "bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400",
    title: "Fully Responsive",
    desc: "Pixel-perfect layouts that work flawlessly on every screen size.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-400",
    title: "Lightning Fast",
    desc: "Optimised for Core Web Vitals — low LCP, FID and CLS scores.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    color: "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400",
    title: "OWASP Security",
    desc: "Every product follows OWASP Top 10 security best practices.",
  },
  {
    icon: <Search className="h-6 w-6" />,
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400",
    title: "SEO Friendly",
    desc: "Semantic HTML, metadata, sitemaps and structured data built-in.",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    color: "bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400",
    title: "CI / CD Pipeline",
    desc: "Automated testing and deployment on every commit.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
    title: "REST & GraphQL APIs",
    desc: "Clean, versioned APIs with full documentation for every backend.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    color: "bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400",
    title: "Database Design",
    desc: "Normalised schemas, indexes and migrations handled by experts.",
  },
  {
    icon: <FileCheck className="h-6 w-6" />,
    color: "bg-teal-100 text-teal-600 dark:bg-teal-950 dark:text-teal-400",
    title: "Well Documented",
    desc: "Comprehensive docs, code comments and onboarding guides.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    color: "bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-400",
    title: "Custom UI / UX",
    desc: "Bespoke, accessible design systems tailored to your brand.",
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
    title: "Dedicated Support",
    desc: "Responsive support team available throughout the project lifecycle.",
  },
  {
    icon: <RefreshCw className="h-6 w-6" />,
    color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-950 dark:text-cyan-400",
    title: "Lifetime Updates",
    desc: "Ongoing maintenance, security patches and minor updates included.",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
    title: "QA & Testing",
    desc: "Unit, integration and E2E tests for every critical code path.",
  },
];

/* ── Technologies tab data ──────────────────────────────────── */
type Tech = {
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  name: string;
  color: string;
  bg: string;
};

const TECHNOLOGIES: { category: string; items: Tech[] }[] = [
  {
    category: "Frontend",
    items: [
      { Icon: SiReact,       name: "React",        color: "#61DAFB", bg: "bg-cyan-50 dark:bg-cyan-950/40" },
      { Icon: SiNextdotjs,   name: "Next.js",      color: "currentColor", bg: "bg-gray-100 dark:bg-gray-800" },
      { Icon: SiTypescript,  name: "TypeScript",   color: "#3178C6", bg: "bg-blue-50 dark:bg-blue-950/40" },
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4", bg: "bg-cyan-50 dark:bg-cyan-950/40" },
      { Icon: SiVuedotjs,    name: "Vue.js",       color: "#42B883", bg: "bg-green-50 dark:bg-green-950/40" },
    ],
  },
  {
    category: "Backend",
    items: [
      { Icon: SiNodedotjs, name: "Node.js",    color: "#339933", bg: "bg-green-50 dark:bg-green-950/40" },
      { Icon: SiDotnet,    name: ".NET / C#",  color: "#512BD4", bg: "bg-purple-50 dark:bg-purple-950/40" },
      { Icon: SiExpress,   name: "Express.js", color: "currentColor", bg: "bg-gray-100 dark:bg-gray-800" },
      { Icon: SiNestjs,    name: "NestJS",     color: "#E0234E", bg: "bg-red-50 dark:bg-red-950/40" },
      { Icon: SiGraphql,   name: "GraphQL",    color: "#E10098", bg: "bg-pink-50 dark:bg-pink-950/40" },
    ],
  },
  {
    category: "Database",
    items: [
      { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1", bg: "bg-blue-50 dark:bg-blue-950/40" },
      { Icon: SiMongodb,    name: "MongoDB",    color: "#47A248", bg: "bg-green-50 dark:bg-green-950/40" },
      { Icon: DiRedis ,      name: "Redis",      color: "#DC382D", bg: "bg-red-50 dark:bg-red-950/40" },
      { Icon: SiPrisma,     name: "Prisma ORM", color: "currentColor", bg: "bg-gray-100 dark:bg-gray-800" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { Icon: SiDocker,             name: "Docker",          color: "#2496ED", bg: "bg-sky-50 dark:bg-sky-950/40" },
      { Icon: SiKubernetes,         name: "Kubernetes",      color: "#326CE5", bg: "bg-blue-50 dark:bg-blue-950/40" },
      { Icon: Cloud as React.ComponentType<{ className?: string; style?: React.CSSProperties }>, name: "AWS Cloud", color: "#FF9900", bg: "bg-orange-50 dark:bg-orange-950/40" },
      { Icon: SiGithubactions,      name: "GitHub Actions",  color: "#2088FF", bg: "bg-blue-50 dark:bg-blue-950/40" },
    ],
  },
];

const TABS = ["Features", "Technologies"] as const;
type Tab = (typeof TABS)[number];

/* ── Component ──────────────────────────────────────────────── */
export default function CoreFeatures() {
  const [activeTab, setActiveTab] = useState<Tab>("Features");
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);

  return (
    <section className="bg-slate-50 py-20 dark:bg-gray-900/50 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange-500">
            <span className="inline-block h-px w-8 bg-orange-400" />
            Core Highlights
            <span className="inline-block h-px w-8 bg-orange-400" />
          </p>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">
            What We Bring to the Table
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-500 dark:text-gray-400">
            Every project we ship is backed by battle-tested practices and the
            right tools for the job.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex gap-1 rounded-2xl border border-gray-200 bg-white p-1.5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setShowAllFeatures(false); setShowAllTech(false); }}
                className={`rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ── Tab 1: Features ── */}
        {activeTab === "Features" && (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f, i) => {
                let vis = "";
                if (!showAllFeatures) {
                  if (i >= 6) vis = "hidden";
                  else if (i >= 3) vis = "hidden lg:flex";
                }
                return (
                  <div
                    key={f.title}
                    className={`flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900 ${vis}`}
                  >
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${f.color}`}>
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">{f.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAllFeatures((v) => !v)}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-indigo-400 hover:text-indigo-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
              >
                {showAllFeatures ? "Show Less ↑" : "View All Features ↓"}
              </button>
            </div>
          </>
        )}

        {/* ── Tab 2: Technologies ── */}
        {activeTab === "Technologies" && (
          <>
            <div className="space-y-10">
              {TECHNOLOGIES.map((group, gi) => {
                let groupVis = "";
                if (!showAllTech) {
                  if (gi >= 2) groupVis = "hidden";
                  else if (gi === 1) groupVis = "hidden lg:block";
                }
                return (
                  <div key={group.category} className={groupVis}>
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                      {group.category}
                    </p>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                      {group.items.map((tech, ti) => {
                        let itemVis = "";
                        if (!showAllTech && gi === 0 && ti >= 3) itemVis = "hidden lg:flex";
                        return (
                          <div
                            key={tech.name}
                            className={`flex flex-col items-center gap-3 rounded-2xl border border-gray-200 ${tech.bg} px-4 py-5 text-center shadow-sm transition hover:shadow-md dark:border-gray-800 ${itemVis}`}
                          >
                            <tech.Icon
                              className="h-9 w-9"
                              style={{ color: tech.color === "currentColor" ? undefined : tech.color }}
                            />
                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                              {tech.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAllTech((v) => !v)}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-indigo-400 hover:text-indigo-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
              >
                {showAllTech ? "Show Less ↑" : "View All Technologies ↓"}
              </button>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
