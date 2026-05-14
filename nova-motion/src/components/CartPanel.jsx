// ─────────────────────────────────────────────────────
//  NOVA MOTION — Cart Panel (slide-in drawer)
// ─────────────────────────────────────────────────────

export default function CartPanel({ items, onClose, onUpdate, onRemove, onCheckout, total }) {
  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="cart-panel">
        {/* Header */}
        <div
          style={{
            padding: "28px 28px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 400 }}>
            Your Cart {items.length > 0 && `(${items.reduce((s, i) => s + i.qty, 0)})`}
          </h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "var(--color-text-faint)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, marginBottom: 8 }}>
                Your cart is empty
              </div>
              <p style={{ fontSize: 13 }}>Browse our collection and add items.</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  padding: "16px 0",
                  borderBottom: "1px solid #f0ebe2",
                }}
              >
                {/* Product image / fallback */}
                <div
                  style={{
                    width: 52, height: 52,
                    background: "var(--color-bg-warm)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 26, flexShrink: 0,
                    overflow: "hidden",
                  }}
                >
                  {item.image
                    ? <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    : item.emoji}
                </div>

                {/* Name / price */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 16 }}>{item.name}</div>
                  <div style={{ fontSize: 13, color: "var(--color-text-faint)" }}>${item.price}</div>
                </div>

                {/* Qty controls */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <QtyBtn onClick={() => onUpdate(item.id, -1)}>−</QtyBtn>
                  <span style={{ fontSize: 14, minWidth: 18, textAlign: "center" }}>{item.qty}</span>
                  <QtyBtn onClick={() => onUpdate(item.id, 1)}>+</QtyBtn>
                  <button
                    onClick={() => onRemove(item.id)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "#c0b8b0", fontSize: 14, marginLeft: 4, padding: 0 }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout footer */}
        {items.length > 0 && (
          <div style={{ padding: "20px 28px", borderTop: "1px solid var(--color-border)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 18 }}>Total</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500 }}>${total}</span>
            </div>
            <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={onCheckout}>
              Checkout — ${total}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function QtyBtn({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 26, height: 26,
        border: "1px solid var(--color-border)",
        background: "none",
        cursor: "pointer",
        fontSize: 14, lineHeight: 1,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      {children}
    </button>
  );
}
