// ─────────────────────────────────────────────────────
//  NOVA MOTION — Contact Page  (/contact)
// ─────────────────────────────────────────────────────

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { STUDIO_EMAIL, STUDIO_PHONE_DISPLAY, STUDIO_PHONE_TEL } from "@/data/brand";

const INFO = [
  {
    heading: "Visit us",
    lines: ["123 Wellness Avenue", "The Annex, Toronto", "ON  M5R 2J4"],
    icon: "📍",
  },
  {
    heading: "Call or email",
    lines: [
      { text: STUDIO_PHONE_DISPLAY, href: `tel:${STUDIO_PHONE_TEL}` },
      { text: STUDIO_EMAIL, href: `mailto:${STUDIO_EMAIL}` },
    ],
    icon: "✉️",
  },
  {
    heading: "Studio hours",
    lines: ["Mon – Fri   6 am – 9 pm", "Saturday   7 am – 6 pm", "Sunday      8 am – 4 pm"],
    icon: "🕐",
  },
];

const SUBJECTS = [
  "General enquiry",
  "Class & booking question",
  "Membership help",
  "Corporate / group rates",
  "Press & partnerships",
  "Other",
];

export default function ContactPage({ onToastShow }) {
  const [form, setForm]         = useState({ name: "", email: "", subject: SUBJECTS[0], message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors]     = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Please enter your name.";
    if (!form.email.trim())   e.email   = "Please enter your email.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setSubmitted(true);
    if (onToastShow) onToastShow(`✓  Message sent! We'll reply within 24 hours.`);
  };

  const set = (key) => (ev) => {
    setForm((f) => ({ ...f, [key]: ev.target.value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  return (
    <>
      <PageHero
        label="Get in Touch"
        title="We'd love to hear from you."
        subtitle="Questions, feedback, corporate enquiries — our team replies within one business day."
      />

      <section style={{ padding: "80px 40px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 80,
            alignItems: "flex-start",
          }}
        >
          {/* ── Left: info + map ── */}
          <div>
            {INFO.map((block) => (
              <div key={block.heading} style={{ marginBottom: 40 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 18 }}>{block.icon}</span>
                  <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-gold)" }}>
                    {block.heading}
                  </span>
                </div>
                {block.lines.map((l) => (
                  <div key={typeof l === "string" ? l : l.text} style={{ fontSize: 15, color: "var(--color-text-muted)", lineHeight: 1.8, fontWeight: 300 }}>
                    {typeof l === "string" ? (
                      l
                    ) : (
                      <a href={l.href} style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid rgba(140,133,126,0.35)" }}>
                        {l.text}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ))}

            {/* Map placeholder */}
            <div
              style={{
                width: "100%",
                height: 220,
                background: "var(--color-bg-warm)",
                border: "1px solid var(--color-border)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                marginTop: 8,
              }}
            >
              <span style={{ fontSize: 32 }}>🗺️</span>
              <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-faint)" }}>
                Embed Google Map here
              </span>
              <span style={{ fontSize: 12, color: "#b0a9a2" }}>Replace with an &lt;iframe&gt; from Google Maps</span>
            </div>
          </div>

          {/* ── Right: contact form ── */}
          <div>
            {submitted ? (
              <div
                style={{
                  background: "var(--color-bg-warm)",
                  padding: "40px 36px",
                  borderLeft: "3px solid var(--color-gold)",
                }}
              >
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, marginBottom: 12 }}>
                  Message received!
                </div>
                <p style={{ fontSize: 15, color: "var(--color-text-muted)", lineHeight: 1.7, fontWeight: 300 }}>
                  Thanks, <strong>{form.name.split(" ")[0]}</strong>. We'll reply to <strong>{form.email}</strong> within one business day.
                </p>
                <button
                  className="btn-outline"
                  style={{ marginTop: 28 }}
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: SUBJECTS[0], message: "" }); }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div>
                <span className="section-label">Send a message</span>

                {/* Name + email row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Full name"
                      value={form.name}
                      onChange={set("name")}
                      style={{ marginBottom: errors.name ? 4 : 12 }}
                    />
                    {errors.name && <FieldError msg={errors.name} />}
                  </div>
                  <div>
                    <input
                      className="form-input"
                      type="email"
                      placeholder="Email address"
                      value={form.email}
                      onChange={set("email")}
                      style={{ marginBottom: errors.email ? 4 : 12 }}
                    />
                    {errors.email && <FieldError msg={errors.email} />}
                  </div>
                </div>

                {/* Subject select */}
                <select
                  value={form.subject}
                  onChange={set("subject")}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    border: "1px solid var(--color-border)",
                    background: "transparent",
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "var(--color-text)",
                    outline: "none",
                    marginBottom: 12,
                    cursor: "pointer",
                    appearance: "none",
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238c857e' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                {/* Message */}
                <textarea
                  className="form-input"
                  placeholder="Your message…"
                  value={form.message}
                  onChange={set("message")}
                  rows={6}
                  style={{
                    resize: "vertical",
                    fontFamily: "var(--font-body)",
                    lineHeight: 1.6,
                    marginBottom: errors.message ? 4 : 12,
                  }}
                />
                {errors.message && <FieldError msg={errors.message} />}

                <button className="btn-primary" style={{ width: "100%", padding: "16px", marginTop: 8 }} onClick={handleSubmit}>
                  Send Message
                </button>

                <p style={{ fontSize: 12, color: "var(--color-text-faint)", marginTop: 14, textAlign: "center" }}>
                  We reply to every message within one business day.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function FieldError({ msg }) {
  return (
    <p style={{ fontSize: 12, color: "#c0533a", marginBottom: 12, marginTop: 2 }}>{msg}</p>
  );
}
