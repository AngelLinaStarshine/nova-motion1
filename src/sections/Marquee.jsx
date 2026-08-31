// ─────────────────────────────────────────────────────
//  NOVA MOTION — Marquee / Ticker Strip
// ─────────────────────────────────────────────────────

const ITEMS = [
  "Mat Pilates","Reformer","Barre Fusion","Tower Circuit",
  "Stretch & Restore","Power & Precision",
];
const DOUBLED = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

export default function Marquee() {
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {DOUBLED.map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="marquee-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
