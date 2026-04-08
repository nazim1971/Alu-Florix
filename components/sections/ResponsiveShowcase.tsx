import { Monitor, Laptop2, Tablet, Smartphone, ArrowRight } from "lucide-react";

const DEVICES = [
  { Icon: Monitor, size: "1920 X 1080px", label: "Full Screen\nLayout", active: true },
  { Icon: Laptop2, size: "1364 X 768px", label: "Notebook\nScreen Layout" },
  { Icon: Tablet, size: "1024 X 768px", label: "Tablet Screen\nLayout" },
  { Icon: Smartphone, size: "375 X 667px", label: "Mobile Screen\nLayout" },
];

const MARQUEE_ITEMS = [
  "SOFTWARE COMPANY", "STARTUP COMPANY", "IT COMPANY", "AI STARTUP",
  "IT CONSULT", "SAAS", "SOFTWARE COMPANY", "STARTUP COMPANY",
  "IT COMPANY", "AI STARTUP", "IT CONSULT", "SAAS",
];

function MockBrowser() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border-2 border-gray-800 dark:border-gray-600 shadow-2xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 bg-gray-900 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        <div className="ml-3 flex-1 rounded bg-gray-700 px-2 py-0.5 text-[10px] text-gray-400">
          https://plorixhub.com
        </div>
      </div>
      {/* Page content mockup */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-950 px-6 py-8 text-white">
        <div className="mb-1 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
          IT Solutions
        </div>
        <div className="text-base font-black leading-snug">
          Tailored for Your<br />Business Growth
        </div>
        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-indigo-600 px-3 py-1 text-[10px] font-semibold">Get Started</span>
          <span className="rounded-full border border-gray-600 px-3 py-1 text-[10px] font-semibold text-gray-300">
            Learn More
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] font-bold">
          {["150+\nProjects", "98%\nSatisfied", "3yr\nSupport"].map((v) => (
            <div key={v} className="rounded-lg bg-white/10 py-2 whitespace-pre-line leading-tight">
              {v}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ResponsiveShowcase() {
  return (
    <section className="overflow-hidden bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top text row */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange-500">
              <span className="inline-block h-px w-8 bg-orange-400" />
              Responsive of all device
            </p>
            <h2 className="text-3xl font-black leading-tight text-gray-900 dark:text-white sm:text-4xl">
              Awesome Responsive<br />In All Device.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="max-w-md leading-relaxed text-gray-500 dark:text-gray-400">
              Responsive design is a web design approach aimed at creating websites
              that provide optimal viewing and interaction experience across all
              screen sizes and devices.
            </p>
          </div>
        </div>

        {/* Device icons row */}
        <div className="mt-14 grid grid-cols-2 gap-6 border-b border-gray-200 pb-12 dark:border-gray-800 sm:grid-cols-4">
          {DEVICES.map((device) => (
            <div key={device.size} className="flex flex-col items-center gap-3 text-center">
              <device.Icon
                className={`h-12 w-12 stroke-[1] ${
                  device.active
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-350 dark:text-gray-600"
                }`}
              />
              <p
                className={`text-sm font-bold ${
                  device.active ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-500"
                }`}
              >
                {device.size}
              </p>
              <p className="whitespace-pre-line text-xs leading-relaxed text-gray-400">
                {device.label}
              </p>
              {device.active && (
                <div className="mt-1 h-0.5 w-12 rounded-full bg-indigo-600" />
              )}
            </div>
          ))}
        </div>

        {/* Mockup comparison */}
        <div className="mt-16 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-10 lg:gap-16">
          {/* Laptop mockup */}
          <div className="w-full max-w-sm">
            <MockBrowser />
          </div>

          {/* Arrow */}
          <div className="flex shrink-0 items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 shadow dark:bg-gray-800">
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Desktop monitor mockup */}
          <div className="flex w-full max-w-sm flex-col items-center">
            <MockBrowser />
            {/* Monitor stand */}
            <div className="h-5 w-0.5 bg-gray-400 dark:bg-gray-600" />
            <div className="h-1.5 w-20 rounded-full bg-gray-400 dark:bg-gray-600" />
          </div>
        </div>
      </div>

      {/* Marquee banner */}
      <div className="mt-16 overflow-hidden border-y border-indigo-100 bg-indigo-50 py-4 dark:border-indigo-900/40 dark:bg-indigo-900/20">
        <div className="flex w-max animate-marquee gap-10">
          {MARQUEE_ITEMS.map((item, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-3 text-sm font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
