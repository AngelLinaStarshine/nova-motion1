// ─────────────────────────────────────────────────────
//  NOVA MOTION — About Page  (/about)
//
//  📸 IMAGE SLOTS:
//    src/assets/images/about/studio-interior.jpg  (800×1000)
//    src/assets/images/about/studio-detail.jpg    (300×300)
//    src/assets/images/about/studio-wide.jpg      (1200×600)
// ─────────────────────────────────────────────────────

import { useNavigate }     from "react-router-dom";
import PageHero            from "@/components/PageHero";
import About               from "@/sections/About";
import Instructors         from "@/sections/Instructors";
import ImagePlaceholder    from "@/components/ImagePlaceholder";

// 📸 Uncomment when images are added:
// import studioWide from "@/assets/images/about/studio-wide.jpg";

const VALUES = [
  {
    title: "Intelligent movement",
    body: "Every exercise has a purpose. We teach you the why behind each movement so you build body literacy that lasts beyond the studio.",
  },
  {
    title: "Radical accessibility",
    body: "Pilates is for every body. We offer modifications in every class and work one-to-one with members who have injuries or special considerations.",
  },
  {
    title: "Small by design",
    body: "We cap classes at 12. Not because we can't scale, but because individualised attention is non-negotiable for us.",
  },
  {
    title: "Evidence-based practice",
    body: "Our programming is grounded in musculoskeletal research. We update our curriculum annually to reflect the latest movement science.",
  },
];

const TIMELINE = [
  { year: "2025", event: "Nova Motion opens its doors in Toronto — a new home for intelligent, restorative Pilates." },
  { year: "2025", event: "Founding members join under certified instruction led by Elena Bayarsky." },
  { year: "2026", event: "Growing community — expanded class formats and member milestones ahead." },
];

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <>
      <PageHero
        label="Our Story"
        title="Where science meets serenity."
        subtitle="A boutique Pilates studio built on the belief that intelligent movement changes everything."
      />

      {/* ── Studio narrative + image ── */}
      <About onClasses={() => navigate("/classes")} />

      {/* ── Full-width studio image ── */}
      <div className="about-studio-wide">
        {/* 📸 Replace with: <img src={studioWide} alt="Nova Motion studio" style={{ width:"100%", height:"100%", objectFit:"cover" }} /> */}
        <ImagePlaceholder label="studio-wide.jpg (1200×600)" height="480px" />
      </div>

      {/* ── Values grid ── */}
      <section className="page-section page-section--warm page-section--center">
        <div className="page-container" style={{ maxWidth: 1100 }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-label">What We Stand For</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-section-title)", fontWeight: 300 }}>
              Our values
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 32 }}>
            {VALUES.map((v, i) => (
              <div key={i} style={{ borderTop: "2px solid var(--color-gold)", paddingTop: 24 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 400, marginBottom: 12 }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 18, color: "var(--color-text-muted)", lineHeight: 1.8, fontWeight: 300 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instructors ── */}
      <Instructors />

      {/* ── Studio timeline ── */}
      <section className="page-section page-section--center">
        <div className="page-container about-timeline-wrap">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-label">Since 2025</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-section-title)", fontWeight: 300 }}>
              Our journey
            </h2>
          </div>
          <div className="about-timeline">
            <div className="about-timeline-line" />
            {TIMELINE.map((item, i) => (
              <div key={i} className="about-timeline-item">
                <div className="about-timeline-year">
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "var(--color-gold)", fontWeight: 300 }}>
                    {item.year}
                  </span>
                </div>
                <div className="about-timeline-dot" />
                <p className="about-timeline-text">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="about-cta-band">
        <span className="section-label">Join us</span>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-section-heading-sm)", fontWeight: 300, color: "var(--color-text-inv)", marginBottom: 24 }}>
          Come move with us.
        </h3>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-gold"    onClick={() => navigate("/schedule")}>  Book a Class </button>
          <button className="btn-outline" style={{ color: "var(--color-text-inv)", borderColor: "rgba(247,244,239,0.3)" }}
            onClick={() => navigate("/membership")}>
            View Membership
          </button>
        </div>
      </div>
    </>
  );
}
