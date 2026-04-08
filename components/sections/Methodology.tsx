export default function Methodology() {
  return (
    <section className="bg-white py-10 sm:py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange-500">
            <span className="inline-block h-px w-8 bg-orange-400" />
            Our Approach
            <span className="inline-block h-px w-8 bg-orange-400" />
          </p>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">
            Our Proven Methodology
          </h2>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 — Versatile Tech Stack */}
          <div className="flex flex-col overflow-hidden rounded-xl bg-emerald-100 dark:bg-emerald-950/40 p-8">
            <h3 className="mb-3 text-2xl font-black text-gray-900 dark:text-white leading-snug">
              Versatile<br />Tech Stack
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-700 dark:text-gray-400">
              We choose the right technology for each project — from React & Next.js to .NET and NestJS, always selecting what delivers the best outcome.
            </p>
            {/* Mockup preview */}
            <div className="mt-auto overflow-hidden rounded-xl border-2 border-gray-900/20 shadow-lg">
              <div className="flex items-center gap-1.5 bg-gray-900 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-500" />
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-indigo-950 px-5 py-6 text-white">
                <div className="text-xs font-bold text-indigo-300">IT Solutions</div>
                <div className="mt-1 text-sm font-black">Tailored for Your Business Growth</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["React", "Next.js", "Node.js", ".NET", "PostgreSQL"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-indigo-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Performance First */}
          <div className="flex flex-col overflow-hidden rounded-xl bg-yellow-100 dark:bg-yellow-950/30 p-8">
            <h3 className="mb-3 text-2xl font-black text-gray-900 dark:text-white leading-snug">
              Google<br />Page‑Speed
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-700 dark:text-gray-400">
              Google has shifted towards mobile‑first indexing. We build every site to achieve top Lighthouse scores out of the box.
            </p>
            {/* Speed dial */}
            <div className="mt-auto flex flex-col items-center gap-4 rounded-xl bg-white/70 dark:bg-gray-900/50 p-6 shadow">
              {/* Gauge arc */}
              <div className="relative flex h-28 w-28 items-center justify-center">
                <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full -rotate-90">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="10"
                    strokeDasharray="314"
                    strokeDashoffset="20"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900 dark:text-white">100</div>
                  <div className="text-[10px] text-gray-700 dark:text-gray-400">/100</div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-gray-900 dark:text-white">⚡ Lightning Fast</p>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">Core Web Vitals &amp; GTmetrix Optimized</p>
              </div>
            </div>
          </div>

          {/* Card 3 — Clean Architecture */}
          <div className="flex flex-col overflow-hidden rounded-xl bg-indigo-100 dark:bg-indigo-950/40 p-8">
            <h3 className="mb-3 text-2xl font-black text-gray-900 dark:text-white leading-snug">
              Clean<br />Architecture
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-700 dark:text-gray-400">
              SOLID principles, layered architecture, and thorough code reviews ensure maintainable, scalable code you&apos;ll own forever.
            </p>
            {/* Code block mockup */}
            <div className="mt-auto overflow-hidden rounded-xl bg-gray-900 p-5 shadow-lg font-mono text-[11px] leading-relaxed">
              <p className="text-gray-400">{"// Clean service layer"}</p>
              <p className="text-indigo-400">
                <span className="text-violet-400">export class</span>{" "}
                <span className="text-yellow-300">UserService</span>{" "}
                {"{"}</p>
              <p className="pl-4 text-green-400">
                <span className="text-blue-300">async</span> getUser(id: string) {"{"}
              </p>
              <p className="pl-8 text-gray-300">
                <span className="text-pink-400">return</span> this.repo
              </p>
              <p className="pl-10 text-gray-400">.findOneOrFail(id);</p>
              <p className="pl-4 text-green-400">{"}"}</p>
              <p className="text-indigo-400">{"}"}</p>
              <p className="mt-2 text-gray-400">{"// 100% test coverage"}</p>
              <p className="text-emerald-400">✓ All tests passing (248)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
