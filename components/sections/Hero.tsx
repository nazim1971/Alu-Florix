import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

// API_READY — fetch hero content (headline, subtext) from CMS or API here

export default function Hero() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-white dark:bg-gray-950 py-24 lg:py-32"
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

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-8 lg:items-center">
        {/* Left — text */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
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
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual card */}
        <div className="relative flex justify-center lg:justify-end">
          <Card
            variant="elevated"
            padding="lg"
            className="w-full max-w-md space-y-6"
          >
            {/* Activity header */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Live dashboard</p>
              <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Active
              </span>
            </div>

            {/* Metric bars */}
            {[
              { label: "Performance", value: 94, color: "bg-indigo-500" },
              { label: "Conversion", value: 78, color: "bg-purple-500" },
              { label: "Retention", value: 87, color: "bg-emerald-500" },
            ].map((metric) => (
              <div key={metric.label} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600 dark:text-gray-400">{metric.label}</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {metric.value}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                  <div
                    className={`h-full rounded-full ${metric.color}`}
                    style={{ width: `${metric.value}%` }}
                  />
                </div>
              </div>
            ))}

            {/* Mini log */}
            <div className="space-y-2 rounded-xl bg-gray-100/60 dark:bg-gray-950/60 p-4">
              {[
                "✓ Build passed in 4.2s",
                "✓ Tests: 142 passed",
                "✓ Deployed to production",
              ].map((line) => (
                <p key={line} className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
                  {line}
                </p>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
