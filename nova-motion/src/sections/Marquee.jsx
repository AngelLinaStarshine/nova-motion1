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
    <div style={{ background: "var(--color-bg-dark)", padding: "16px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
      <div style={{ display: "inline-flex", animation: "marquee 30s linear infinite" }}>
        {DOUBLED.map((item, i) => (
          <span key={i} style={{ fontFamily: "var(--font-display)", fontSize: 24, fontStyle: "italic", color: "var(--color-text-inv)", opacity: 0.65, padding: "0 32px" }}>
            {item} <span style={{ color: "var(--color-gold)", opacity: 1 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
