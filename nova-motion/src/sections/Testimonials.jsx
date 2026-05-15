// ─────────────────────────────────────────────────────
//  NOVA MOTION — Testimonials Section
// ─────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote:
      "I started in 2025 and already feel stronger and more grounded. The attention to form and the calm energy of the studio keep me coming back every week.",
    name: "Maria",
    since: "Member · 2025",
    initial: "M",
    avatar: null,
  },
  {
    quote:
      "Small classes, beautiful space, and instructors who truly care. My posture and confidence have shifted more in months here than in years elsewhere.",
    name: "Liza",
    since: "Member · 2025",
    initial: "L",
    avatar: null,
  },
  {
    quote:
      "Nova Motion has been the highlight of my 2026 routine. Every session leaves me energised yet relaxed — exactly what I was looking for.",
    name: "Angelina",
    since: "Member · 2026",
    initial: "A",
    avatar: null,
  },
];

export default function Testimonials() {
  return (
    <section style={{ background: "var(--color-bg-dark)", padding: "90px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span className="section-label" style={{ textAlign: "center", display: "block" }}>
          What Members Say
        </span>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28, marginTop: 40 }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} style={{ background: "var(--color-bg-dark-2)", padding: "32px 28px", borderTop: "2px solid var(--color-gold)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 27, fontStyle: "italic", color: "var(--color-text-inv)", lineHeight: 1.65, marginBottom: 28, fontWeight: 300 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <div style={{ width: "100%", height: "100%", background: "var(--color-gold)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "#fff" }}>{t.initial}</span>
                    </div>
                  )}
                </div>
                <div>
                  <div style={{ fontSize: 17, color: "var(--color-gold)", fontWeight: 500 }}>{t.name}</div>
                  <div style={{ fontSize: 15, color: "#5a5450", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>{t.since}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
