// ─────────────────────────────────────────────────────
//  NOVA MOTION — Studio Collection (Shop) Section
//
//  📸 PRODUCT IMAGES:
//     Set the `image` field in src/data/products.js
//     Recommended: 600 × 600 px square
// ─────────────────────────────────────────────────────

import { useState } from "react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "../data/products.js";

export default function Collection({ onAddToCart }) {
  const [filter, setFilter] = useState("All");

  const visible = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="collection" style={{ padding: "110px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
          <div>
            <span className="section-label">Studio Collection</span>
            <h2 className="display-heading" style={{ fontSize: "var(--fs-section-title)" }}>
              Curated for<br /><em style={{ color: "var(--color-gold)" }}>your practice.</em>
            </h2>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {PRODUCT_CATEGORIES.map((f) => (
              <button key={f} className={`filter-chip${filter === f ? " active" : ""}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24 }}>
          {visible.map((prod) => (
            <div key={prod.id} className="product-card">

              {/* 📸 Product image */}
              <div style={{ background: "var(--color-bg-warm)", height: 220, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                {prod.image ? (
                  <img src={prod.image} alt={prod.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div style={{ textAlign: "center" }}>
                    <span style={{ fontSize: 72}}>{prod.emoji}</span>
                    <div style={{ fontSize: 11, color: "#c8bfb0", marginTop: 8, letterSpacing: "0.15em", textTransform: "uppercase" }}>📸 600×600</div>
                  </div>
                )}
                {prod.badge && (
                  <div style={{ position: "absolute", top: 14, left: 14, background: "var(--color-bg-dark)", color: "var(--color-text-inv)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", padding: "4px 10px" }}>
                    {prod.badge}
                  </div>
                )}
              </div>

              {/* Card body */}
              <div style={{ padding: "20px 20px 24px" }}>
                <div style={{ fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-text-faint)", marginBottom: 6 }}>
                  {prod.category}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 400, marginBottom: 6, lineHeight: 1.3 }}>{prod.name}</h3>
                <p style={{ fontSize: 17, color: "var(--color-text-faint)", fontWeight: 300, lineHeight: 1.6, marginBottom: 16 }}>{prod.description}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 300 }}>${prod.price}</span>
                  <button className="btn-primary" style={{ padding: "9px 18px", fontSize: 15}} onClick={() => onAddToCart(prod)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
