// ─────────────────────────────────────────────────────
//  NOVA MOTION — 404 Not Found Page
// ─────────────────────────────────────────────────────

import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 40px",
        background: "var(--color-bg)",
      }}
    >
      <span style={{ fontFamily: "var(--font-display)", fontSize: 155, fontWeight: 300, color: "var(--color-border)", lineHeight: 1 }}>
        404
      </span>
      <div style={{ width: 1, height: 60, background: "var(--color-border)", margin: "16px auto" }} />
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 41, fontWeight: 300, marginBottom: 16 }}>
        Page not found
      </h2>
      <p style={{ fontSize: 19, color: "var(--color-text-faint)", fontWeight: 300, maxWidth: 360, lineHeight: 1.7, marginBottom: 36 }}>
        The page you're looking for doesn't exist or may have moved.
      </p>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
        <button className="btn-primary" onClick={() => navigate("/")}>Go Home</button>
        <button className="btn-outline" onClick={() => navigate("/schedule")}>View Schedule</button>
      </div>
    </div>
  );
}
