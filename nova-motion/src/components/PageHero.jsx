// ─────────────────────────────────────────────────────
//  NOVA MOTION — PageHero
//  Slim header used at the top of every inner page.
//  Props:
//    label    - small uppercase eyebrow (gold)
//    title    - display heading (can include <em> JSX)
//    subtitle - body text below heading
//
//  📸 PAGE HERO BACKGROUND (optional):
//    Pass a `bgImage` prop with the path to a wide photo.
//    e.g. bgImage="/src/assets/images/hero/schedule-bg.jpg"
//    If omitted, falls back to the warm brand background.
// ─────────────────────────────────────────────────────

export default function PageHero({ label, title, subtitle, bgImage }) {
  return (
    <div
      id="page-top"
      style={{
        paddingTop: 140,
        paddingBottom: 80,
        paddingLeft: 40,
        paddingRight: 40,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background: bgImage
          ? `linear-gradient(rgba(28,28,28,0.55), rgba(28,28,28,0.55)), url(${bgImage}) center/cover no-repeat`
          : "var(--color-bg-warm)",
      }}
    >
      {/* Decorative line left */}
      <div style={{ position: "absolute", top: "30%", left: "6%", width: 1, height: 120, background: "linear-gradient(to bottom, transparent, var(--color-border), transparent)", opacity: 0.7 }} />
      {/* Decorative line right */}
      <div style={{ position: "absolute", top: "30%", right: "6%", width: 1, height: 120, background: "linear-gradient(to bottom, transparent, var(--color-border), transparent)", opacity: 0.7 }} />

      <span
        className="section-label fade-up"
        style={{ color: bgImage ? "var(--color-gold)" : "var(--color-gold)" }}
      >
        {label}
      </span>

      <h1
        className="display-heading fade-up"
        style={{
          fontSize: "clamp(36px, 5vw, 72px)",
          animationDelay: "0.1s",
          maxWidth: 720,
          margin: "0 auto 16px",
          color: bgImage ? "#f7f4ef" : "var(--color-text)",
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {subtitle && (
        <p
          className="body-text fade-up"
          style={{
            maxWidth: 540,
            margin: "0 auto",
            animationDelay: "0.2s",
            color: bgImage ? "rgba(247,244,239,0.75)" : "var(--color-text-muted)",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
