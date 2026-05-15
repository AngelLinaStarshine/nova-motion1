// ─────────────────────────────────────────────────────
//  NOVA MOTION — CTA / Newsletter Section
//  Free trial class lead-capture form
// ─────────────────────────────────────────────────────

import { useState } from "react";

export default function CTA({ onToast }) {
  const [name,      setName]      = useState("");
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) {
      onToast("Please fill in all fields");
      return;
    }
    setSubmitted(true);
    onToast("✓  We'll be in touch within 24 hours!");
  };

  return (
    <section style={{ padding: "90px 40px", textAlign: "center" }}>
      <div style={{ maxWidth: 540, margin: "0 auto" }}>
        <span className="section-label">Join the Community</span>
        <h2 className="display-heading" style={{ fontSize: "var(--fs-section-title)", marginBottom: 16 }}>
          Your first class<br /><em style={{ color: "var(--color-gold)" }}>is on us.</em>
        </h2>
        <p className="body-text" style={{ marginBottom: 36 }}>
          Sign up for a complimentary trial class and discover what Nova Motion is all about.
        </p>

        {submitted ? (
          <div style={{ background: "var(--color-bg-warm)", padding: "28px 32px", borderLeft: "3px solid var(--color-gold)", textAlign: "left" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 31, marginBottom: 10 }}>Thank you, {name.split(" ")[0]}!</div>
            <p style={{ fontSize: 18, color: "var(--color-text-muted)", lineHeight: 1.7 }}>
              We'll reach out to {email} within 24 hours to schedule your complimentary class.
            </p>
          </div>
        ) : (
          <>
            <input
              className="form-input"
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="form-input"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="btn-primary"
              style={{ width: "100%", padding: "16px" }}
              onClick={handleSubmit}
            >
              Claim My Free Class
            </button>
            <p style={{ fontSize: 15, color: "var(--color-text-faint)", marginTop: 14, letterSpacing: "0.05em" }}>
              No commitment required. Cancel anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
