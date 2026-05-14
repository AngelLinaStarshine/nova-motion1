// ─────────────────────────────────────────────────────
//  NOVA MOTION — useCart Hook
//  Manages cart items: add, remove, update quantity,
//  compute totals. Used by CartPanel + Collection section.
// ─────────────────────────────────────────────────────

import { useState, useCallback } from "react";

export function useCart() {
  const [items, setItems] = useState([]);

  const add = useCallback((product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  const remove = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQty = useCallback((id, delta) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i
      )
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return { items, add, remove, updateQty, clear, count, total };
}
