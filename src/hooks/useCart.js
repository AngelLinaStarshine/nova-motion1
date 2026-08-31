import { useState, useCallback } from "react";

export function useCart() {
  const [items, setItems] = useState([]);

  const add = useCallback((product) => {
    const lineId = product.cartId ?? product.id;
    setItems((prev) => {
      const existing = prev.find((i) => (i.cartId ?? i.id) === lineId);
      if (existing) {
        return prev.map((i) =>
          (i.cartId ?? i.id) === lineId ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, cartId: lineId, qty: 1 }];
    });
  }, []);

  const remove = useCallback((id) => {
    setItems((prev) => prev.filter((i) => (i.cartId ?? i.id) !== id));
  }, []);

  const updateQty = useCallback((id, delta) => {
    setItems((prev) =>
      prev.map((i) =>
        (i.cartId ?? i.id) === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i
      )
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return { items, add, remove, updateQty, clear, count, total };
}
