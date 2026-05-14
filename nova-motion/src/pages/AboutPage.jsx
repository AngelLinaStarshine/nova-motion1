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
      <div style={{ width: "100%", height: 480, overflow: "hidden" }}>
        {/* 📸 Replace with: <img src={studioWide} alt="Nova Motion studio" style={{ width:"100%", height:"100%", objectFit:"cover" }} /> */}
        <ImagePlaceholder label="studio-wide.jpg (1200×600)" height="480px" />
      </div>

      {/* ── Values grid ── */}
      <section style={{ padding: "100px 40px", background: "var(--color-bg-warm)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-label">What We Stand For</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,50px)", fontWeight: 300 }}>
              Our values
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 32 }}>
            {VALUES.map((v, i) => (
              <div key={i} style={{ borderTop: "2px solid var(--color-gold)", paddingTop: 24 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 400, marginBottom: 12 }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--color-text-muted)", lineHeight: 1.8, fontWeight: 300 }}>
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
      <section style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-label">Since 2025</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,50px)", fontWeight: 300 }}>
              Our journey
            </h2>
          </div>
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute", left: 72, top: 0, bottom: 0,
                width: 1, background: "var(--color-border)",
              }}
            />
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex", gap: 32, marginBottom: 40,
                  alignItems: "flex-start",
                }}
              >
                <div style={{ minWidth: 72, textAlign: "right", paddingTop: 2 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--color-gold)", fontWeight: 300 }}>
                    {item.year}
                  </span>
                </div>
                {/* Dot */}
                <div
                  style={{
                    width: 10, height: 10, borderRadius: "50%",
                    background: "var(--color-gold)",
                    marginTop: 6, flexShrink: 0,
                    position: "relative", zIndex: 1,
                  }}
                />
                <p style={{ fontSize: 15, color: "var(--color-text-muted)", lineHeight: 1.7, fontWeight: 300, paddingTop: 0, flex: 1 }}>
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div style={{ textAlign: "center", padding: "70px 40px", background: "var(--color-bg-dark)" }}>
        <span className="section-label">Join us</span>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,3vw,46px)", fontWeight: 300, color: "var(--color-text-inv)", marginBottom: 24 }}>
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
