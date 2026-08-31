// ─────────────────────────────────────────────────────
//  NOVA MOTION — Hero Section
// ─────────────────────────────────────────────────────

import Marquee from "@/sections/Marquee";

export default function Hero({ onScrollTo }) {
  const STATS = [
    { num: "100+", label: "Active Members" },
    { num: "6", label: "Expert Instructors" },
    { num: "18", label: "Weekly Classes" },
    { num: "4.9★", label: "Studio Rating" },
  ];

  return (
    <section id="home" className="hero-main">
      <div className="hero-decor hero-decor-circle-lg" />
      <div className="hero-decor hero-decor-circle-sm" />
      <div className="hero-decor hero-decor-line hero-decor-line-left" />
      <div className="hero-decor hero-decor-line hero-decor-line-right" />

      <div className="hero-brand-lockup fade-up" style={{ animationDelay: "0.1s" }}>
        <span className="section-label">Pilates Studio · Est. 2025</span>
      </div>

      <h1
        className="display-heading fade-up"
        style={{ fontSize: "var(--fs-hero-title)", animationDelay: "0.2s", maxWidth: 920, lineHeight: 1.08 }}
      >
        Move with{" "}
        <em style={{ color: "var(--color-gold)" }}>intention.</em>
        <br />
        <span style={{ fontSize: "var(--fs-hero-subtitle)", fontStyle: "italic", fontWeight: 300, color: "var(--color-text-muted)" }}>
          Restore, rebuild, reclaim.
        </span>
      </h1>

      <p className="body-text fade-up hero-lead" style={{ animationDelay: "0.35s" }}>
        Boutique Pilates reimagined, reformer flows, restorative stretching, and classes designed to transform your body and calm your mind.
      </p>

      <div className="fade-up hero-actions" style={{ animationDelay: "0.5s" }}>
        <button type="button" className="btn-primary" onClick={() => onScrollTo("schedule")}>
          View Schedule
        </button>
        <button type="button" className="btn-outline" onClick={() => onScrollTo("membership")}>
          Explore Membership
        </button>
      </div>

      <div className="fade-up hero-marquee-slot" style={{ animationDelay: "0.55s" }}>
        <Marquee />
      </div>

      <div className="fade-up hero-stats" style={{ animationDelay: "0.65s" }}>
        {STATS.map(({ num, label }) => (
          <div key={label} className="hero-stat">
            <div className="hero-stat-value">{num}</div>
            <div className="hero-stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
