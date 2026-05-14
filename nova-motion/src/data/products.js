// ─────────────────────────────────────────────────────
//  NOVA MOTION — Studio Collection (Shop) Data
//
//  📸 IMAGE SLOTS:
//    Add an `image` field pointing to your file:
//    image: "/src/assets/images/products/grip-socks.jpg"
//    Recommended size: 600 × 600 px (square)
// ─────────────────────────────────────────────────────

export const PRODUCTS = [
  {
    id: 1,
    name: "Nova Grip Socks",
    category: "Accessories",
    price: 28,
    badge: "Bestseller",   // null | "New" | "Bestseller" | "Sale"
    description: "Non-slip pilates grip socks with reinforced arch support. Available in ivory, sage and charcoal.",

    // 📸 REPLACE with your product photo:
    // image: "/src/assets/images/products/grip-socks.jpg",
    image: null,
    emoji: "🧦",           // Fallback icon — remove once image is added
  },
  {
    id: 2,
    name: "Studio Reformer Bag",
    category: "Gear",
    price: 95,
    badge: null,
    description: "Compact, water-resistant carry-all designed for your studio essentials. Fits mat, socks and a change of clothes.",

    // 📸 image: "/src/assets/images/products/reformer-bag.jpg",
    image: null,
    emoji: "👜",
  },
  {
    id: 3,
    name: "Resistance Band Set",
    category: "Equipment",
    price: 45,
    badge: null,
    description: "Set of three fabric resistance bands (light, medium, heavy). Perfect for home practice and warm-ups.",

    // 📸 image: "/src/assets/images/products/resistance-bands.jpg",
    image: null,
    emoji: "🎽",
  },
  {
    id: 4,
    name: "Nova Motion Mat",
    category: "Equipment",
    price: 120,
    badge: "New",
    description: "6mm premium eco-rubber pilates mat with alignment guides. Studio-quality, non-slip both sides.",

    // 📸 image: "/src/assets/images/products/pilates-mat.jpg",
    image: null,
    emoji: "🟫",
  },
  {
    id: 5,
    name: "Body Roller",
    category: "Recovery",
    price: 65,
    badge: null,
    description: "High-density foam roller for deep tissue myofascial release. Ideal for post-class recovery.",

    // 📸 image: "/src/assets/images/products/body-roller.jpg",
    image: null,
    emoji: "🪵",
  },
  {
    id: 6,
    name: "Studio Bottle 750ml",
    category: "Accessories",
    price: 38,
    badge: null,
    description: "Insulated stainless steel water bottle. Leak-proof lid, keeps cold 24 hours. Matte finish.",

    // 📸 image: "/src/assets/images/products/studio-bottle.jpg",
    image: null,
    emoji: "🧴",
  },
];

export const PRODUCT_CATEGORIES = ["All", ...new Set(PRODUCTS.map((p) => p.category))];
