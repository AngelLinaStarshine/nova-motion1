// ─────────────────────────────────────────────────────
//  NOVA MOTION — Shop Page  (/collection)
// ─────────────────────────────────────────────────────

import PageHero   from "@/components/PageHero";
import Collection from "@/sections/Collection";

export default function ShopPage({ onAddToCart }) {
  return (
    <>
      <PageHero
        label="Studio Collection"
        title="Curated for your practice."
        subtitle="Equipment, accessories and recovery tools — hand-picked by our instructors."
      />
      <Collection onAddToCart={onAddToCart} />

      {/* Shipping info strip */}
      <div style={{ background: "var(--color-bg-dark)", padding: "36px 40px" }}>
        <div style={{
          maxWidth: 1000, margin: "0 auto",
          display: "flex", gap: 48, flexWrap: "wrap", justifyContent: "center",
        }}>
          {[
            ["Free shipping", "On orders over $75"],
            ["In-studio pickup", "Ready same day"],
            ["30-day returns",  "No questions asked"],
            ["Members save",    "10–20% on all orders"],
          ].map(([title, sub]) => (
            <div key={title} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--color-text-inv)", marginBottom: 4 }}>
                {title}
              </div>
              <div style={{ fontSize: 12, color: "#6a6460", letterSpacing: "0.05em" }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
