import Button from "@/components/ui/Button";

// API_READY — fetch CTA banner content (headline, subtext, button label) from API here

export default function CTABanner() {
  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 via-indigo-700 to-purple-800 px-8 py-16 text-center shadow-2xl shadow-indigo-900/50 lg:px-16 lg:py-24">
          {/* Background decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl"
          />

          <div className="relative">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-200">
              Ready to start?
            </p>
            <h2 className="mb-6 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              Let&apos;s build something
              <br />
              great together.
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-indigo-200">
              Tell us about your project and we&apos;ll get back to you within
              24 hours.
            </p>
            <Button
              href="mailto:admin@plorixhub.com"
              variant="ghost"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/60"
            >
              Send us a message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
