// ─────────────────────────────────────────────────────
//  NOVA MOTION — Hero Section
// ─────────────────────────────────────────────────────

export default function Hero({ onScrollTo }) {
  const STATS = [
    { num: "100+", label: "Active Members" },
    { num: "6", label: "Expert Instructors" },
    { num: "18", label: "Weekly Classes" },
    { num: "4.9★", label: "Studio Rating" },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "140px 40px 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "10%", right: "5%", width: 380, height: 380, borderRadius: "50%", border: "1px solid #e8e2d8", opacity: 0.5, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "15%", left: "3%", width: 240, height: 240, borderRadius: "50%", border: "1px solid #e8e2d8", opacity: 0.4, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "20%", left: "8%", width: 1, height: 200, background: "linear-gradient(to bottom, transparent, #d4c9b8, transparent)", opacity: 0.6 }} />
      <div style={{ position: "absolute", top: "20%", right: "8%", width: 1, height: 200, background: "linear-gradient(to bottom, transparent, #d4c9b8, transparent)", opacity: 0.6 }} />

      <span className="section-label fade-up" style={{ animationDelay: "0.1s" }}>
        Pilates Studio · Est. 2025
      </span>

      <h1
        className="display-heading fade-up"
        style={{ fontSize: "clamp(48px, 7.5vw, 100px)", animationDelay: "0.2s", maxWidth: 920, lineHeight: 1.08 }}
      >
        Move with{" "}
        <em style={{ color: "var(--color-gold)" }}>intention.</em>
        <br />
        <span style={{ fontSize: "clamp(28px, 4.2vw, 52px)", fontStyle: "italic", fontWeight: 300, color: "var(--color-text-muted)" }}>
          Restore, rebuild, reclaim.
        </span>
      </h1>

      <p className="body-text fade-up" style={{ maxWidth: 520, margin: "32px auto 44px", fontSize: 16, animationDelay: "0.35s" }}>
        Boutique Pilates reimagined — reformer flows, restorative stretching, and classes designed to transform your body and calm your mind.
      </p>

      <div className="fade-up" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", animationDelay: "0.5s" }}>
        <button type="button" className="btn-primary" onClick={() => onScrollTo("schedule")}>
          View Schedule
        </button>
        <button type="button" className="btn-outline" onClick={() => onScrollTo("membership")}>
          Explore Membership
        </button>
      </div>

      <div className="fade-up" style={{ display: "flex", gap: 48, marginTop: 72, flexWrap: "wrap", justifyContent: "center", animationDelay: "0.65s" }}>
        {STATS.map(({ num, label }) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 300, color: "var(--color-text)" }}>{num}</div>
            <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-text-faint)", marginTop: 4 }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
