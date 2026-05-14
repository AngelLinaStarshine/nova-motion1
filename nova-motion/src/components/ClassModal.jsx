// ─────────────────────────────────────────────────────
//  NOVA MOTION — Class Detail Modal
// ─────────────────────────────────────────────────────

export default function ClassModal({ cls, onClose, onBook }) {
  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
        <div style={{ width: "100%", height: 4, background: cls.accent, marginBottom: 28 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <span style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: cls.accent, background: cls.accent + "18", padding: "4px 10px", display: "inline-block" }}>
              {cls.category}
            </span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 400, marginTop: 8 }}>{cls.name}</h3>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {cls.image ? (
          <div style={{ marginBottom: 24, overflow: "hidden", height: 200 }}>
            <img src={cls.image} alt={cls.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ) : (
          <div style={{ height: 120, background: cls.accent + "14", marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: cls.accent, opacity: 0.8 }}>
              📸 Add class image in src/data/classes.js
            </span>
          </div>
        )}

        <p style={{ fontSize: 15, color: "var(--color-text-muted)", fontWeight: 300, lineHeight: 1.8, marginBottom: 24 }}>{cls.description}</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
          {[["Duration", cls.duration],["Intensity", cls.intensity],["Instructor", cls.instructor],["Drop-in", cls.price]].map(([k, v]) => (
            <div key={k} style={{ background: "var(--color-bg)", padding: "14px 16px" }}>
              <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-text-faint)", marginBottom: 4 }}>{k}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 18 }}>{v}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <button className="btn-primary" style={{ flex: 1 }} onClick={onBook}>Book This Class</button>
          <button className="btn-outline" onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
}
