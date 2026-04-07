"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

// ── Validation schema ─────────────────────────────────────────────────────────
const schema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long"),
  company: z
    .string()
    .max(100, "Company name is too long")
    .optional()
    .default(""),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject is too long"),
  message: z.string().max(2000, "Message is too long").optional().default(""),
});

export type FieldErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: FieldErrors };

// ── reCAPTCHA v3 verification ─────────────────────────────────────────────────
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  // Skip verification in development when key is not configured
  if (!secret) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[Contact] RECAPTCHA_SECRET_KEY not set — skipping verification in dev",
      );
      return true;
    }
    return false;
  }

  if (!token) return false;

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }).toString(),
    cache: "no-store",
  });

  if (!res.ok) return false;

  const data = (await res.json()) as {
    success: boolean;
    score?: number;
    "error-codes"?: string[];
  };

  // v3 score: 1.0 = definitely human, 0.0 = definitely bot. Threshold: 0.5
  return data.success && (data.score ?? 1) >= 0.5;
}

// ── Server Action ─────────────────────────────────────────────────────────────
export async function submitContact(
  formData: FormData,
): Promise<ContactResult> {
  // 1. Honeypot — bots fill this hidden field, humans won't
  if (formData.get("website")) {
    return { ok: true }; // Silently succeed to confuse automated submissions
  }

  // 2. Parse + server-side validation with Zod
  const raw = {
    fullName: String(formData.get("fullName") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    subject: String(formData.get("subject") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const flat = parsed.error.flatten().fieldErrors;
    const fieldErrors: FieldErrors = {};
    for (const [k, v] of Object.entries(flat)) {
      fieldErrors[k as keyof FieldErrors] = v?.[0];
    }
    return {
      ok: false,
      error: "Please check the highlighted fields.",
      fieldErrors,
    };
  }

  // 3. reCAPTCHA v3 verification
  const token = String(formData.get("recaptchaToken") ?? "").trim();
  const isHuman = await verifyRecaptcha(token);
  if (!isHuman) {
    return {
      ok: false,
      error: "reCAPTCHA verification failed. Please refresh and try again.",
    };
  }

  const { fullName, email, phone, company, subject, message } = parsed.data;
  const submittedAt =
    new Date().toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "short",
    }) + " UTC";

  // 4. Send email via SMTP
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    // Dev fallback — log to console when SMTP is not yet configured
    if (process.env.NODE_ENV !== "production") {
      console.log(
        "[Contact Form] SMTP not configured. Submission received:\n",
        raw,
      );
      return { ok: true };
    }
    return {
      ok: false,
      error:
        "Email service is not configured. Please contact us directly at admin@plorixhub.com.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Sanitize user-supplied content for HTML output
    const esc = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    await transporter.sendMail({
      from: `"Plorix Contact Form" <${process.env.SMTP_USER}>`,
      to: "md.nazimuddinaj@gmail.com",
      replyTo: email,
      subject: `[Plorix Contact] ${subject}`,
      html: `<!DOCTYPE html>
<html lang="en">
<body style="font-family:system-ui,-apple-system,sans-serif;background:#f1f5f9;margin:0;padding:32px 0">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.07)">
    <div style="background:#2D94BE;padding:28px 32px">
      <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700;letter-spacing:-.3px">
        New Contact Form Submission
      </h1>
      <p style="margin:6px 0 0;color:#b3e0f2;font-size:13px">${submittedAt}</p>
    </div>
    <div style="padding:32px">
      <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.5">
        <tr>
          <td style="padding:11px 14px;background:#f8fafc;border:1px solid #e2e8f0;font-weight:600;color:#475569;width:130px">Full Name</td>
          <td style="padding:11px 14px;border:1px solid #e2e8f0;color:#0f172a">${esc(fullName)}</td>
        </tr>
        <tr>
          <td style="padding:11px 14px;background:#f8fafc;border:1px solid #e2e8f0;font-weight:600;color:#475569">Email</td>
          <td style="padding:11px 14px;border:1px solid #e2e8f0">
            <a href="mailto:${esc(email)}" style="color:#2D94BE;text-decoration:none">${esc(email)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:11px 14px;background:#f8fafc;border:1px solid #e2e8f0;font-weight:600;color:#475569">Phone</td>
          <td style="padding:11px 14px;border:1px solid #e2e8f0;color:#0f172a">${esc(phone)}</td>
        </tr>
        <tr>
          <td style="padding:11px 14px;background:#f8fafc;border:1px solid #e2e8f0;font-weight:600;color:#475569">Company</td>
          <td style="padding:11px 14px;border:1px solid #e2e8f0;color:#0f172a">${esc(company) || "—"}</td>
        </tr>
        <tr>
          <td style="padding:11px 14px;background:#f8fafc;border:1px solid #e2e8f0;font-weight:600;color:#475569">Subject</td>
          <td style="padding:11px 14px;border:1px solid #e2e8f0;color:#0f172a">${esc(subject)}</td>
        </tr>
        ${
          message
            ? `<tr>
          <td style="padding:11px 14px;background:#f8fafc;border:1px solid #e2e8f0;font-weight:600;color:#475569;vertical-align:top">Message</td>
          <td style="padding:11px 14px;border:1px solid #e2e8f0;color:#0f172a;white-space:pre-wrap">${esc(message)}</td>
        </tr>`
            : ""
        }
      </table>
      <div style="margin-top:24px;padding:14px 16px;background:#eff9ff;border-left:4px solid #2D94BE;border-radius:4px;font-size:13px;color:#0369a1">
        💡 Hit <strong>Reply</strong> to respond directly to <strong>${esc(fullName)}</strong>.
      </div>
    </div>
    <div style="padding:16px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8;text-align:center">
      Plorix · Automated message from the contact form. Do not reply to the sender address.
    </div>
  </div>
</body>
</html>`,
      text: [
        `New Contact Form Submission — ${submittedAt}`,
        "",
        `Full Name : ${fullName}`,
        `Email     : ${email}`,
        `Phone     : ${phone}`,
        `Company   : ${company || "—"}`,
        `Subject   : ${subject}`,
        message ? `\nMessage:\n${message}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return { ok: true };
  } catch (err) {
    console.error("[Contact Form] Email delivery failed:", err);
    return {
      ok: false,
      error:
        "Failed to send your message. Please try again or email us directly at admin@plorixhub.com.",
    };
  }
}
