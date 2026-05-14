// ─────────────────────────────────────────────────────
//  NOVA MOTION — Membership Plans Section
// ─────────────────────────────────────────────────────

import { MEMBERSHIPS } from "../data/membership.js";

export default function Membership({ onSelectPlan }) {
  return (
    <section id="membership" style={{ background: "var(--color-bg-warm)", padding: "110px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label">Membership Plans</span>
          <h2 className="display-heading" style={{ fontSize: "var(--fs-section-title)", marginBottom: 16 }}>
            Invest in<br /><em style={{ color: "var(--color-gold)" }}>your wellbeing.</em>
          </h2>
          <p className="body-text" style={{ maxWidth: 480, margin: "0 auto" }}>
            All memberships include member app access, towel service, and complimentary herbal teas.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "start" }}>
          {MEMBERSHIPS.map((plan) => (
            <div
              key={plan.id}
              className={`membership-card${plan.popular ? " featured" : ""}`}
              style={{ background: plan.popular ? "var(--color-bg-dark)" : "var(--color-bg-card)" }}
            >
              {plan.popular && (
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "var(--color-gold)", color: "#fff", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", padding: "5px 18px", whiteSpace: "nowrap" }}>
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <div style={{ fontSize: 15, letterSpacing: "0.15em", textTransform: "uppercase", color: plan.popular ? "var(--color-gold)" : "var(--color-text-faint)", marginBottom: 12 }}>
                {plan.name}
              </div>

              {/* Price */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 67, fontWeight: 300, color: plan.popular ? "var(--color-text-inv)" : "var(--color-text)" }}>
                  ${plan.price}
                </span>
                <span style={{ fontSize: 17, color: plan.popular ? "#8c857e" : "var(--color-text-faint)" }}>/mo</span>
              </div>
              <p style={{ fontSize: 17, color: plan.popular ? "#8c857e" : "var(--color-text-faint)", marginBottom: 28 }}>{plan.tagline}</p>

              {/* Features */}
              <div style={{ borderTop: `1px solid ${plan.popular ? "#2e2e2e" : "var(--color-border)"}`, paddingTop: 24, marginBottom: 32 }}>
                {plan.features.map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 14 }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: plan.popular ? "var(--color-gold)" : "var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <span style={{ fontSize: 11, color: plan.popular ? "#fff" : "var(--color-text-faint)", lineHeight: 1 }}>✓</span>
                    </div>
                    <span style={{ fontSize: 18, color: plan.popular ? "#c8bfb0" : "var(--color-text-muted)", fontWeight: 300 }}>{f}</span>
                  </div>
                ))}
              </div>

              <button
                className={plan.popular ? "btn-gold" : "btn-outline"}
                style={{ width: "100%", borderColor: plan.popular ? undefined : "var(--color-text)" }}
                onClick={() => onSelectPlan(plan)}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
