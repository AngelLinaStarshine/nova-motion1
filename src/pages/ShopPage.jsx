// ─────────────────────────────────────────────────────
//  NOVA MOTION — Shop Page  (/collection)
// ─────────────────────────────────────────────────────

import { useEffect } from "react";
import ShopApp from "@/shop/ShopApp";
import { SHOP_URL, isShopExternal } from "@/config/urls";

export default function ShopPage({ onAddToCart, cartCount, onCartOpen }) {
  useEffect(() => {
    if (isShopExternal()) {
      window.location.replace(SHOP_URL);
    }
  }, []);

  if (isShopExternal()) return null;

  return (
    <ShopApp
      cartCount={cartCount}
      onCartOpen={onCartOpen}
      onAddToCart={onAddToCart}
    />
  );
}
