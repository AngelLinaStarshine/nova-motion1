// ─────────────────────────────────────────────────────
//  NOVA MOTION — About Section
// ─────────────────────────────────────────────────────

import studioInterior from "@/assets/images/about/studio-interior.jpg";

const HIGHLIGHTS = [
  { val: "Elena Bayarsky", label: "Certified instruction" },
  { val: "12 max",         label: "Class size" },
  { val: "100%",           label: "Certified team" },
];

export default function About({ onClasses }) {
  return (
    <section className="about-section">
      <div className="about-grid">
        <div className="about-visual">
          <div className="about-visual-frame" aria-hidden />
          <div className="about-visual-image">
            <img
              src={studioInterior}
              alt="Nova Motion Pilates Club studio with reformer"
            />
          </div>
        </div>

        <div className="about-copy">
          <span className="section-label">Our Story</span>
          <h2 className="display-heading" style={{ fontSize: "var(--fs-section-title)", marginBottom: 28 }}>
            Where science<br />meets <em style={{ color: "var(--color-gold)" }}>serenity.</em>
          </h2>
          <p className="body-text" style={{ marginBottom: 20 }}>
            Nova Motion was born from a belief that Pilates should be accessible, intelligent, and transformative. Our studio blends evidence-based movement science with a calm, considered aesthetic, creating a space where every body feels at home.
          </p>
          <p className="body-text" style={{ marginBottom: 36 }}>
            Our instructors hold certifications from the world's leading Pilates academies. Small class sizes ensure personalised attention, so you progress faster and move smarter.
          </p>

          <div className="about-highlights">
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
      </div>
    </section>
  );
}
