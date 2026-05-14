// ─────────────────────────────────────────────────────
//  NOVA MOTION — About Section
//
//  📸 IMAGE SLOTS (2 images):
//
//  1. MAIN portrait (left column):
//     - File: src/assets/images/about/studio-interior.jpg
//     - Size: 800 × 1000 px portrait, showing studio interior
//     - Set MAIN_IMAGE below
//
//  2. BADGE photo (floating bottom-right corner):
//     - File: src/assets/images/about/studio-badge.jpg
//     - Size: 300 × 300 px square, close-up detail / instructor
//     - Set BADGE_IMAGE below
// ─────────────────────────────────────────────────────

// 📸 Replace null with image paths when ready:
const MAIN_IMAGE  = null; // "/src/assets/images/about/studio-interior.jpg"
const BADGE_IMAGE = null; // "/src/assets/images/about/studio-badge.jpg"

const HIGHLIGHTS = [
  { val: "Elena Bayarsky", label: "Certified instruction" },
  { val: "12 max", label: "Class size" },
  { val: "100%", label: "Certified team" },
];

export default function About({ onClasses }) {
  return (
    <section
      style={{
        padding: "110px 40px",
        maxWidth: 1280,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
      }}
    >
      {/* ── Left: image column ── */}
      <div style={{ position: "relative", aspectRatio: "4/5" }}>
        {/* Main image */}
        {MAIN_IMAGE ? (
          <img
            src={MAIN_IMAGE}
            alt="Nova Motion studio interior"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          /* Placeholder */
          <div style={{ position: "absolute", inset: 0, background: "var(--color-bg-warm)", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 93, fontWeight: 300, color: "#c8bfb0", lineHeight: 1 }}>N</div>
            <div style={{ width: 1, height: 50, background: "#c8bfb0" }} />
            <div style={{ fontSize: 13, letterSpacing: "0.25em", textTransform: "uppercase", color: "#c8bfb0" }}>
              📸 800 × 1000 px
            </div>
          </div>
        )}

        {/* Badge image — floating corner */}
        <div style={{ position: "absolute", bottom: -20, right: -20, width: 180, height: 180, background: "var(--color-bg)", border: "1px solid var(--color-border)", overflow: "hidden" }}>
          {BADGE_IMAGE ? (
            <img src={BADGE_IMAGE} alt="Studio detail" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 54, fontWeight: 300 }}>2025</span>
              <span style={{ fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-faint)" }}>Est. This Year</span>
              <span style={{ fontSize: 11, color: "#c8bfb0", marginTop: 4 }}>📸 300×300</span>
            </div>
          )}
        </div>
      </div>

      {/* ── Right: text column ── */}
      <div>
        <span className="section-label">Our Story</span>
        <h2 className="display-heading" style={{ fontSize: "var(--fs-section-title)", marginBottom: 28 }}>
          Where science<br />meets <em style={{ color: "var(--color-gold)" }}>serenity.</em>
        </h2>
        <p className="body-text" style={{ marginBottom: 20 }}>
          Nova Motion was born from a belief that Pilates should be accessible, intelligent, and transformative. Our studio blends evidence-based movement science with a calm, considered aesthetic — creating a space where every body feels at home.
        </p>
        <p className="body-text" style={{ marginBottom: 36 }}>
          Our instructors hold certifications from the world's leading Pilates academies. Small class sizes ensure personalised attention, so you progress faster and move smarter.
        </p>

        <div style={{ display: "flex", gap: 32, marginBottom: 40, flexWrap: "wrap" }}>
          {HIGHLIGHTS.map(({ val, label }) => (
            <div key={label}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500 }}>{val}</div>
              <div style={{ fontSize: 15, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-faint)", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>

        <button type="button" className="btn-outline" onClick={() => onClasses?.()}>
          Explore Classes
        </button>
      </div>
    </section>
  );
}
