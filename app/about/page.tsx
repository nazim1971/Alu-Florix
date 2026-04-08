import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "About Us — Plorix | Digital Agency",
  description:
    "Learn about Plorix — a small, focused team building high-performance digital products. Meet our team, values, and what drives us to deliver exceptional work.",
};

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  color: string;
}

const TEAM: TeamMember[] = [
  { name: "Alex Rivera", role: "Founder & Design Lead", initials: "AR", color: "bg-indigo-600" },
  { name: "Sam Chen", role: "Engineering Lead", initials: "SC", color: "bg-purple-600" },
  { name: "Jordan Miles", role: "Growth & Strategy", initials: "JM", color: "bg-emerald-600" },
];

const VALUES = [
  {
    icon: "◈",
    title: "Craft over speed",
    description:
      "We move fast, but never at the cost of quality. Every pixel and every line of code is intentional.",
  },
  {
    icon: "⬡",
    title: "Radical transparency",
    description:
      "No black boxes. You see everything — timelines, decisions, trade-offs — in real time.",
  },
  {
    icon: "⚡",
    title: "Outcomes over output",
    description:
      "We measure success by real business results, not deliverable counts or hours billed.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <PageHero
        title="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        imageSeed="about-team-hero"
      />

      {/* Story + Stats */}
      <section className="bg-white dark:bg-gray-950 py-10 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Our Story
            </p>
            <h1 className="text-4xl font-black text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Small team.
              <br />
              <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Big output.
              </span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600 dark:text-gray-400">
              Plorix was founded in 2021 with one idea: a tight-knit team of
              experts can outship a 50-person agency every time — if the process
              is right.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-gray-200 dark:border-gray-800 pt-12 sm:grid-cols-4">
            {[
              { value: "50+", label: "Projects shipped" },
              { value: "3", label: "Years in business" },
              { value: "98%", label: "Client satisfaction" },
              { value: "$12M+", label: "Revenue generated" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black text-gray-900 dark:text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 dark:bg-gray-900/40 py-10 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
              What drives us
            </p>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white">Our values</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUES.map((v) => (
              <Card key={v.title} variant="elevated" padding="lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-xl text-indigo-600 dark:text-indigo-400">
                  {v.icon}
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">{v.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{v.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white dark:bg-gray-950 py-10 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
              The people
            </p>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white">Meet the team</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {TEAM.map((member) => (
              <Card key={member.name} variant="elevated" padding="lg" className="flex items-center gap-5">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${member.color} text-lg font-black text-white`}
                >
                  {member.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{member.name}</p>
                  <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 dark:bg-gray-900/40 py-10 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white">Want to work with us?</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We take on a limited number of new clients each quarter.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Get in touch
            </Button>
            <Button href="/services" variant="ghost" size="lg">
              See our services
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
