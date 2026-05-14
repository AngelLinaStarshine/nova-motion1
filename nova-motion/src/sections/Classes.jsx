// ─────────────────────────────────────────────────────
//  NOVA MOTION — Classes Section
//
//  📸 Class thumbnails: set `image` in src/data/classes.js
//     Recommended: 600 × 400 px landscape
// ─────────────────────────────────────────────────────

import { useState } from "react";
import { CLASSES } from "../data/classes.js";

const FILTERS = ["All", "Beginner", "Intermediate", "Advanced"];

export default function Classes({ onClassClick }) {
  const [filter, setFilter] = useState("All");

  const visible = filter === "All" ? CLASSES : CLASSES.filter((c) => c.category === filter);

  return (
    <section id="classes" style={{ padding: "110px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
          <div>
            <span className="section-label">Our Classes</span>
            <h2 className="display-heading" style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>
              Every body.<br /><em style={{ color: "var(--color-gold)" }}>Every level.</em>
            </h2>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {FILTERS.map((f) => (
              <button key={f} className={`filter-chip${filter === f ? " active" : ""}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {visible.map((cls) => (
            <div key={cls.id} className="class-card" onClick={() => onClassClick(cls)}>

              {/* 📸 Class thumbnail */}
              {cls.image ? (
                <div style={{ height: 180, overflow: "hidden", marginBottom: 0 }}>
                  <img src={cls.image} alt={cls.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }} />
                </div>
              ) : (
                <div style={{ height: 140, background: cls.accent + "14", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 0 }}>
                  <span style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: cls.accent, opacity: 0.7 }}>📸 Add image</span>
                </div>
              )}

              {/* Card body */}
              <div style={{ padding: "24px 28px 28px" }}>
                <div style={{ width: 28, height: 3, background: cls.accent, marginBottom: 16 }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <span style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: cls.accent, background: cls.accent + "18", padding: "4px 10px" }}>
                    {cls.category}
                  </span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>{cls.price}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 400, marginBottom: 10, lineHeight: 1.2 }}>{cls.name}</h3>
                <p style={{ fontSize: 14, color: "var(--color-text-faint)", fontWeight: 300, lineHeight: 1.7, marginBottom: 20 }}>{cls.description}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--color-border)", paddingTop: 16 }}>
                  <span style={{ fontSize: 12, color: "var(--color-text-faint)" }}>⏱ {cls.duration} · {cls.instructor.split(" ")[0]}</span>
                  {/* Intensity dots */}
                  <div style={{ display: "flex", gap: 5 }}>
                    {[0,1,2].map((i) => (
                      <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: (cls.intensity === "Low" && i === 0) || (cls.intensity === "Medium" && i <= 1) || (cls.intensity === "High") ? ((cls.intensity === "Low" && i === 0) || (cls.intensity === "Medium" && i <= 1) || (cls.intensity === "High" && i <= 2) ? cls.accent : "var(--color-border)") : "var(--color-border)" }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
