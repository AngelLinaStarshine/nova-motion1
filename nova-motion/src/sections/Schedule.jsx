// ─────────────────────────────────────────────────────
//  NOVA MOTION — Schedule Section
// ─────────────────────────────────────────────────────

import { useState } from "react";
import { SCHEDULE, DAYS } from "../data/schedule.js";
import { CLASS_ACCENT } from "../data/classes.js";

export default function Schedule({ onBook, bookedSlots, darkBg = true }) {
  const [activeDay, setActiveDay] = useState("Monday");

  return (
    <section id="schedule" style={{ background: darkBg ? "var(--color-bg-dark)" : "var(--color-bg)", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label">Weekly Schedule</span>
          <h2 className="display-heading" style={{ fontSize: "clamp(36px, 4vw, 56px)", color: darkBg ? "var(--color-text-inv)" : "var(--color-text)", marginBottom: 12 }}>
            Plan your week
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#8c857e", fontWeight: 300 }}>
            Tap any class to reserve your spot instantly.
          </p>
        </div>

        {/* Day tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 36, justifyContent: "center", flexWrap: "wrap" }}>
          {DAYS.map((day) => (
            <button
              key={day}
              className={`day-btn${activeDay === day ? " active" : ""}`}
              onClick={() => setActiveDay(day)}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </div>

        {/* Slots */}
        <div>
          {SCHEDULE[activeDay].map((slot, i) => {
            const key    = `${activeDay}-${slot.time}`;
            const booked = bookedSlots.has(key);
            const accent = CLASS_ACCENT[slot.cls] || "var(--color-gold)";

            return (
              <div
                key={i}
                className={`schedule-slot${booked ? " booked" : ""}`}
                style={{
                  borderColor:  booked ? accent + "60" : undefined,
                  background:   booked ? accent + "12" : undefined,
                }}
                onClick={() => !booked && onBook(slot, activeDay)}
              >
                {/* Colour stripe */}
                <div style={{ width: 4, height: 44, background: accent, borderRadius: 2, flexShrink: 0 }} />

                {/* Time */}
                <div style={{ minWidth: 80 }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500, color: "var(--color-text-inv)" }}>
                    {slot.time}
                  </span>
                </div>

                {/* Class info */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 400, color: "var(--color-text-inv)", lineHeight: 1.2 }}>
                    {slot.cls}
                  </div>
                  <div style={{ fontSize: 12, color: "#8c857e", marginTop: 3 }}>with {slot.instructor}</div>
                </div>

                {/* CTA / booked state */}
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  {booked ? (
                    <span style={{ background: accent + "25", color: accent, fontSize: 11, padding: "5px 14px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Booked ✓
                    </span>
                  ) : (
                    <>
                      <div style={{ fontSize: 12, color: slot.spots <= 3 ? "#e07e5a" : "#8c857e", marginBottom: 6 }}>
                        {slot.spots} spot{slot.spots !== 1 ? "s" : ""} left
                      </div>
                      <button className="btn-gold" style={{ padding: "8px 18px", fontSize: 11 }}>
                        Reserve
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
