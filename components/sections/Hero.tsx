import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Star, CheckCircle2 } from "lucide-react";

// API_READY — fetch hero content (headline, subtext) from CMS or API here

export default function Hero() {
  return (
    <section
      id="work"
      className="relative  overflow-hidden bg-white dark:bg-gray-950 py-10 sm:py-24 lg:py-32"
    >
      {/* Background grid decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden dark:block bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-125 w-200 rounded-full bg-indigo-600/10 blur-3xl"
      />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 lg:items-center">
        {/* Left — text */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-black leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
           Run Your Business,
           <br />
           Leave the IT to Us
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            From your first idea to a live product, we help you build something that truly works for your business.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="#contact" variant="primary" size="lg">
              Start a project
            </Button>
            <Button href="#services" variant="ghost" size="lg">
              Explore services →
            </Button>
          </div>

          <div className="flex gap-8 border-t border-gray-200 dark:border-gray-800 pt-6">
            {[
              { value: "50+", label: "Projects shipped" },
              { value: "98%", label: "Client satisfaction" },
              { value: "4×", label: "Average ROI" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — client testimonial card */}
        <div className="relative flex justify-center lg:justify-end">
          <Card
            variant="elevated"
            padding="lg"
            className="w-full max-w-md space-y-5"
          >
            {/* Star rating header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.9</span>
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400">50+ projects shipped</span>
            </div>

            {/* Client quote */}
            <div className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/40">
              <p className="text-sm italic leading-relaxed text-gray-700 dark:text-gray-300">
                &ldquo;Working with Alu transformed our product. Delivered in 3 weeks, exactly as promised — launching it genuinely changed our business.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                  SM
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">Sarah M.</p>
                  <p className="text-xs text-gray-700 dark:text-gray-300">CTO · RetailCo</p>
                </div>
              </div>
            </div>

            {/* Delivery checklist */}
            <div className="space-y-2.5">
              {[
                "Responsive UI delivered on schedule",
                "Payment & auth integration complete",
                "99.9% uptime since launch",
                "Post-launch support included",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
