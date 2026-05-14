// ─────────────────────────────────────────────────────
//  NOVA MOTION — Booking Modal
//  Opens when a user clicks Reserve on a schedule slot.
// ─────────────────────────────────────────────────────

import { useState } from "react";

export default function BookingModal({ slot, day, onClose, onConfirm }) {
  const [name, setName]   = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) return;
    onConfirm({ slot, name, email });
  };

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
          <div>
            <span className="section-label" style={{ marginBottom: 8 }}>Reserve Your Spot</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 400 }}>{slot.cls}</h3>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {/* Class details */}
        <div style={{ background: "var(--color-bg)", padding: "20px", marginBottom: 28 }}>
          {[["Day", day], ["Time", slot.time], ["Instructor", slot.instructor], ["Spots left", slot.spots]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 14 }}>
              <span style={{ color: "var(--color-text-faint)" }}>{k}</span>
              <span style={{ color: "var(--color-text)", fontWeight: 400 }}>{v}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <input className="form-input" type="text"  placeholder="Your full name"    value={name}  onChange={(e) => setName(e.target.value)} />
        <input className="form-input" type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />

        <button
          className="btn-primary"
          style={{ width: "100%", marginTop: 8 }}
          onClick={handleSubmit}
        >
          Confirm Booking
        </button>
      </div>
    </>
  );
}
