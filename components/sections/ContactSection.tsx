"use client";

import { useState, useCallback } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Phone, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { submitContact, type ContactResult } from "@/app/actions/contact";

function inputCls(hasError?: string) {
  const base =
    "w-full rounded-md sm:rounded-lg border px-3 py-2 sm:px-4 sm:py-3 text-sm text-gray-900 outline-none transition dark:text-white dark:bg-gray-800 ";
  return hasError
    ? base +
        "border-red-400 bg-red-50/60 focus:border-red-400 focus:ring-1 focus:ring-red-400 dark:border-red-500 dark:bg-red-950/20"
    : base +
        "border-gray-200 bg-blue-50/60 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 dark:border-gray-700";
}

const SOCIALS = [
  {
    label: "LinkedIn", href: "https://linkedin.com",
    svg: (<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>),
  },
  {
    label: "Facebook", href: "https://facebook.com",
    svg: (<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>),
  },
  {
    label: "Twitter", href: "https://x.com",
    svg: (<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>),
  },
  {
    label: "Instagram", href: "https://instagram.com",
    svg: (<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>),
  },
];

const EMPTY = { fullName: "", email: "", phone: "", company: "", subject: "", message: "" };
type FormFields = typeof EMPTY;

function ContactContent() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [form, setForm] = useState<FormFields>(EMPTY);
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<ContactResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errs = status && !status.ok ? (status.fieldErrors ?? {}) : {};

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errs[name as keyof typeof errs]) {
      setStatus((prev) =>
        prev && !prev.ok ? { ...prev, fieldErrors: { ...prev.fieldErrors, [name]: undefined } } : prev
      );
    }
  }

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || !accepted) return;
    setLoading(true);
    setStatus(null);
    try {
      const token = executeRecaptcha ? await executeRecaptcha("contact_form") : "";
      const fd = new FormData();
      (Object.keys(form) as (keyof FormFields)[]).forEach((k) => fd.append(k, form[k]));
      fd.append("recaptchaToken", token);
      fd.append("website", "");
      const result = await submitContact(fd);
      setStatus(result);
      if (result.ok) { setSubmitted(true); setForm(EMPTY); setAccepted(false); }
    } catch {
      setStatus({ ok: false, error: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }, [form, accepted, loading, executeRecaptcha]);

  return (
    <section id="contact" className="bg-[#EEF0F8] py-10 sm:py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

          <div className="relative">
            <div className="mb-8 h-4 w-4 rounded-full bg-indigo-500" />
            <h2 className="text-4xl font-black leading-tight text-gray-900 dark:text-white sm:text-5xl">Contact Our Team</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-gray-500 dark:text-gray-400">
              We pride ourselves staying at the front of innovation, constantly pushing boundaries — shaping the Digital World Together and redefining what&apos;s possible.
            </p>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/40">
                  <Phone className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">To More Inquiry</p>
                  <p className="mt-0.5 text-base font-bold text-gray-900 dark:text-white">+880 1629-290809</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/40">
                  <Mail className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">To Send Mail</p>
                  <p className="mt-0.5 text-base font-bold text-gray-900 dark:text-white">admin@plorixhub.com</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="mb-4 border-b border-dashed border-gray-300 pb-2 text-sm font-semibold text-gray-700 underline dark:border-gray-700 dark:text-gray-300">Stay Connected</p>
              <div className="grid grid-cols-4 divide-x divide-gray-200 overflow-hidden rounded-xl border border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
                {SOCIALS.map(({ label, svg, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 py-5 text-xs font-semibold text-gray-600 transition hover:bg-indigo-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400">
                    {svg}{label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 sm:p-8 shadow-xl dark:bg-gray-900 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white">Message Sent!</h2>
                <p className="text-gray-500 dark:text-gray-400">We&apos;ll be in touch within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setStatus(null); }}
                  className="mt-4 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6 border-b border-gray-200 pb-6 dark:border-gray-700">
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">Your Success Starts Here!</h2>
                </div>

                {status && !status.ok && (
                  <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400">
                    {status.error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-5" noValidate>
                  <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, width: 0, overflow: "hidden" }}>
                    <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cs-fullName" className="mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-400">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input id="cs-fullName" name="fullName" type="text" required autoComplete="name"
                        value={form.fullName} onChange={handleChange} className={inputCls(errs.fullName)} />
                      {errs.fullName && <p className="mt-1 text-xs text-red-500">{errs.fullName}</p>}
                    </div>
                    <div>
                      <label htmlFor="cs-company" className="mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-400">
                        Company Name
                      </label>
                      <input id="cs-company" name="company" type="text" autoComplete="organization"
                        value={form.company} onChange={handleChange} className={inputCls(errs.company)} />
                      {errs.company && <p className="mt-1 text-xs text-red-500">{errs.company}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cs-email" className="mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-400">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input id="cs-email" name="email" type="email" required autoComplete="email"
                        value={form.email} onChange={handleChange} className={inputCls(errs.email)} />
                      {errs.email && <p className="mt-1 text-xs text-red-500">{errs.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="cs-phone" className="mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-400">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input id="cs-phone" name="phone" type="tel" required autoComplete="tel"
                        value={form.phone} onChange={handleChange} className={inputCls(errs.phone)} />
                      {errs.phone && <p className="mt-1 text-xs text-red-500">{errs.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cs-subject" className="mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-400">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input id="cs-subject" name="subject" type="text" required
                      value={form.subject} onChange={handleChange} className={inputCls(errs.subject)} />
                    {errs.subject && <p className="mt-1 text-xs text-red-500">{errs.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="cs-message" className="mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-400">
                      Message <span className="font-normal text-gray-400">(optional)</span>
                    </label>
                    <textarea id="cs-message" name="message" rows={4}
                      value={form.message} onChange={handleChange} className={inputCls(errs.message) + " resize-none"} />
                    {errs.message && <p className="mt-1 text-xs text-red-500">{errs.message}</p>}
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <input id="cs-accepted" type="checkbox" required checked={accepted}
                      onChange={(e) => setAccepted(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-gray-300 accent-indigo-600" />
                    <label htmlFor="cs-accepted" className="cursor-pointer text-xs text-gray-500 dark:text-gray-400">
                      I have read &amp; accepted the{" "}
                      <a href="/terms" className="font-semibold text-gray-700 underline dark:text-gray-300" target="_blank" rel="noopener noreferrer">
                        Terms &amp; Conditions
                      </a>.
                    </label>
                  </div>

                  <button type="submit" disabled={!accepted || loading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
                    {loading ? (<><Loader2 className="h-4 w-4 animate-spin" />Sending&hellip;</>) : "Submit Now"}
                  </button>

                  <p className="text-center text-[11px] text-gray-400">
                    Protected by reCAPTCHA &amp; honeypot spam filtering.
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default function ContactSection() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}>
      <ContactContent />
    </GoogleReCaptchaProvider>
  );
}
