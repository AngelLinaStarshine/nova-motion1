// ─────────────────────────────────────────────────────
//  NOVA MOTION — Membership Sign-up Modal
// ─────────────────────────────────────────────────────
import { useState } from "react";

export default function MembershipModal({ plan, onClose, onConfirm }) {
  const [name, setName]   = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) return;
    onConfirm({ plan, name, email });
  };

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
          <div>
            <span className="section-label" style={{ marginBottom: 8 }}>Join Now</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 41, fontWeight: 400 }}>{plan.name} Plan</h3>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div style={{ fontFamily: "var(--font-display)", fontSize: 62, fontWeight: 300, marginBottom: 6 }}>
          ${plan.price}<span style={{ fontSize: 20, color: "var(--color-text-faint)" }}>/mo</span>
        </div>
        <p style={{ fontSize: 17, color: "var(--color-text-faint)", marginBottom: 28 }}>{plan.tagline}</p>

        <div style={{ marginBottom: 28 }}>
          {plan.features.map((f) => (
            <div key={f} style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 0", borderBottom: "1px solid var(--color-border)" }}>
              <span style={{ color: "var(--color-gold)", fontSize: 17}}>✓</span>
              <span style={{ fontSize: 18, color: "var(--color-text-mid)" }}>{f}</span>
            </div>
          ))}
        </div>

        <input className="form-input" type="text"  placeholder="Your full name"    value={name}  onChange={(e) => setName(e.target.value)} />
        <input className="form-input" type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />

        <button className="btn-gold" style={{ width: "100%", marginTop: 8 }} onClick={handleSubmit}>
          Start {plan.name} Membership
        </button>
      </div>
    </>
  );
}
