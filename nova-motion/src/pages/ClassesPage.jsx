// ─────────────────────────────────────────────────────
//  NOVA MOTION — Classes Page  (/classes)
// ─────────────────────────────────────────────────────

import { useNavigate }  from "react-router-dom";
import PageHero         from "@/components/PageHero";
import Classes          from "@/sections/Classes";
import Instructors      from "@/sections/Instructors";

export default function ClassesPage({ onClassClick }) {
  const navigate = useNavigate();

  return (
    <>
      <PageHero
        label="Our Classes"
        title="Every body. Every level."
        subtitle="Six signature formats from mat fundamentals to advanced tower work."
      />
      <Classes onClassClick={onClassClick} />
      <Instructors />
      {/* Secondary CTA */}
      <div style={{ textAlign: "center", padding: "70px 40px", background: "var(--color-bg-warm)" }}>
        <span className="section-label">Ready to start?</span>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,3vw,44px)", fontWeight: 300, marginBottom: 24 }}>
          Book your first class today.
        </h3>
        <button className="btn-primary" onClick={() => navigate("/schedule")}>
          View Schedule
        </button>
      </div>
    </>
  );
}
