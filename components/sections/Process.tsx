// API_READY — fetch process steps from API or CMS here

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We map your goals, users, and constraints in a focused kickoff sprint.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Rapid prototyping and iteration until the experience feels exactly right.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Clean, tested code shipped in short cycles with full transparency.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Zero-downtime deployment, monitoring set up, and post-launch support.",
  },
];

export default function Process() {
  return (
  <section id="process" className="bg-gray-50 dark:bg-gray-900/40 py-10 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            How we work
          </p>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">
            A process built for speed
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            No unnecessary meetings. No bloated timelines. Just focused work
            that ships.
          </p>
        </div>

        {/* 4-step horizontal row */}
        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connector line — desktop only */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700 lg:block"
          />

          {STEPS.map((step, index) => (
            <div key={step.number} className="relative flex flex-col gap-4">
              {/* Step number badge */}
              <div className="flex items-center gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-indigo-500/40 bg-white dark:bg-gray-950 text-lg font-black text-indigo-600 dark:text-indigo-400 shadow-lg shadow-indigo-200/50 dark:shadow-indigo-900/30">
                  {step.number}
                </div>
                {/* Mobile connector */}
                {index < STEPS.length - 1 && (
                  <div
                    aria-hidden
                    className="h-px flex-1 bg-gray-200 dark:bg-gray-800 lg:hidden"
                  />
                )}
              </div>

              <div>
                <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
