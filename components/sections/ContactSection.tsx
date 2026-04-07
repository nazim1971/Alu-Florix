"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";

interface FormState {
  fullName: string;
  company: string;
  phone: string;
  subject: string;
  accepted: boolean;
}

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    company: "",
    phone: "",
    subject: "",
    accepted: false,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.accepted) return;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-[#EEF0F8] py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

          {/* ── Left panel ── */}
          <div className="relative">
            <div className="mb-8 h-4 w-4 rounded-full bg-indigo-500" />
            <h2 className="text-4xl font-black leading-tight text-gray-900 dark:text-white sm:text-5xl">
              Contact Our Team
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-gray-500 dark:text-gray-400">
              We pride ourselves staying at the front of innovation, constantly
              pushing boundaries — shaping the Digital World Together and
              redefining what&apos;s possible.
            </p>

            {/* Contact info */}
            <div className="mt-10 flex flex-col gap-5 sm:flex-row">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/40">
                  <Phone className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    To More Inquiry
                  </p>
                  <p className="mt-0.5 text-base font-bold text-gray-900 dark:text-white">
                    +990-737 621 432
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/40">
                  <Mail className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    To Send Mail
                  </p>
                  <p className="mt-0.5 text-base font-bold text-gray-900 dark:text-white">
                    info@alu.studio
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10">
              <p className="mb-4 border-b border-dashed border-gray-300 pb-2 text-sm font-semibold text-gray-700 underline dark:border-gray-700 dark:text-gray-300">
                Social Just You Connected Us!
              </p>
              <div className="grid grid-cols-4 divide-x divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
                {SOCIALS.map(({ label, svg, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 py-5 text-xs font-semibold text-gray-600 transition hover:bg-indigo-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400"
                  >
                    {svg}
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right panel — form card ── */}
          <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600 dark:bg-green-900/30">
                  ✓
                </div>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                  Message Sent!
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6 border-b border-gray-200 pb-6 dark:border-gray-700">
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                    Your Success Starts Here!
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="cs-fullName"
                        className="mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        Full Name
                      </label>
                      <input
                        id="cs-fullName"
                        name="fullName"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 bg-blue-50/60 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="cs-company"
                        className="mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        Company / Organization{" "}
                        <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        id="cs-company"
                        name="company"
                        type="text"
                        required
                        value={form.company}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 bg-blue-50/60 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      />
                      <Mail className="pointer-events-none absolute right-3 top-9 h-4 w-4 text-teal-500" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cs-phone"
                      className="mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-400"
                    >
                      Phone <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="cs-phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-blue-50/60 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cs-subject"
                      className="mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-400"
                    >
                      Your Subject <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="cs-subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-blue-50/60 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <input
                      id="cs-accepted"
                      name="accepted"
                      type="checkbox"
                      required
                      checked={form.accepted}
                      onChange={handleChange}
                      className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-gray-300 accent-indigo-600"
                    />
                    <label
                      htmlFor="cs-accepted"
                      className="cursor-pointer text-xs text-gray-500 dark:text-gray-400"
                    >
                      I have read &amp; accepted{" "}
                      <span className="font-semibold text-gray-700 underline dark:text-gray-300">
                        Terms &amp; Conditions
                      </span>
                      .
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!form.accepted}
                    className="rounded-xl bg-gray-900 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                  >
                    Submit Now
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
