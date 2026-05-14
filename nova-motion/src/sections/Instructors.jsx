// ─────────────────────────────────────────────────────
//  NOVA MOTION — Instructors Strip
//
//  📸 INSTRUCTOR HEADSHOTS:
//     Set the `image` field in src/data/team.js
//     Recommended: 400 × 400 px square, face centred
// ─────────────────────────────────────────────────────

import { TEAM } from "../data/team.js";

export default function Instructors() {
  return (
    <section style={{ background: "var(--color-bg-warm)", padding: "80px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
        <span className="section-label">Meet Your Instructors</span>
        <h2 className="display-heading" style={{ fontSize: "clamp(32px, 3.5vw, 48px)", marginBottom: 52 }}>
          Guided by <em style={{ color: "var(--color-gold)" }}>experts.</em>
        </h2>

        <div style={{ display: "flex", gap: 48, justifyContent: "center", flexWrap: "wrap" }}>
          {TEAM.map((inst) => (
            <div key={inst.id} style={{ textAlign: "center", maxWidth: 200 }}>

              {/* 📸 Headshot or initial avatar */}
              <div style={{ width: 100, height: 100, borderRadius: "50%", overflow: "hidden", margin: "0 auto 16px", border: "2px solid var(--color-border)" }}>
                {inst.image ? (
                  <img src={inst.image} alt={inst.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div style={{ width: "100%", height: "100%", background: "var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 300, color: "var(--color-text-faint)" }}>
                      {inst.initial}
                    </span>
                  </div>
                )}
              </div>

              <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 400 }}>{inst.name}</div>
              <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold)", marginTop: 4, marginBottom: 10 }}>
                {inst.title}
              </div>
              <p style={{ fontSize: 13, color: "var(--color-text-faint)", fontWeight: 300, lineHeight: 1.7 }}>{inst.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
