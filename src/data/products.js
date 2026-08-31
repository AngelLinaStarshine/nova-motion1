// ─────────────────────────────────────────────────────
//  NOVA MOTION — Shop Products
// ─────────────────────────────────────────────────────

import shopHero             from "@/assets/images/products/shop-hero.jpg";
import casualWhite          from "@/assets/images/products/casual-white.jpg";
import casualWhite2         from "@/assets/images/products/casual-white-2.jpg";
import casualWhite3         from "@/assets/images/products/casual-white-3.jpg";
import casualWhite4         from "@/assets/images/products/casual-white-4.jpg";
import casualBlack          from "@/assets/images/products/casual-black.jpg";
import casualBlack2         from "@/assets/images/products/casual-black-2.jpg";
import casualBlackLifestyle from "@/assets/images/products/casual-black-lifestyle.jpg";

export const WHITE_SOCK_IMAGES = [
  casualWhite,
  casualWhite2,
  casualWhite3,
  casualWhite4,
];

export const BLACK_SOCK_IMAGES = [
  casualBlack,
  casualBlack2,
  casualBlackLifestyle,
];

export const SOCK_SIZE_OPTIONS = [
  { id: "women_sm",  label: "Women S/M",  shoeRange: "4\u20138.5" },
  { id: "women_lxl", label: "Women L/XL", shoeRange: "9\u201312" },
  { id: "men_sm",    label: "Men S/M",    shoeRange: "6\u20139.5" },
  { id: "men_lxl",   label: "Men L/XL",   shoeRange: "10\u201313" },
];

export const SOCK_SIZES = SOCK_SIZE_OPTIONS.map((s) => s.id);

export const SHOP_HERO_IMAGE = shopHero;

export const CASUAL_SOCK_DETAILS = {
  tagline:
    "Built for everyday comfort. Made to keep up with you.",
  body: [
    "Experience the perfect balance of softness, breathability, and dependable fit. Our casual socks are designed for the moments that make up your day, from busy mornings to relaxed evenings.",
    "Soft where it matters. Supportive where you need it. Reliable every day.",
  ],
  highlights: [
    "Comfortable all-day fit",
    "Breathable, lightweight feel",
    "Flexible construction that moves with you",
    "Designed for everyday durability",
    "Timeless style for any occasion",
  ],
};

export const PRODUCTS = [
  {
    id: "casual-white",
    name: "Casual Crew Socks",
    colorLabel: "White",
    category: "Socks",
    sockType: "casual",
    price: 28,
    badge: null,
    comingSoon: false,
    details: CASUAL_SOCK_DETAILS,
    image: casualWhite,
    images: WHITE_SOCK_IMAGES,
    sizes: SOCK_SIZES,
  },
  {
    id: "casual-black",
    name: "Casual Crew Socks",
    colorLabel: "Black",
    category: "Socks",
    sockType: "casual",
    price: 28,
    badge: "Bestseller",
    comingSoon: false,
    details: CASUAL_SOCK_DETAILS,
    image: casualBlack,
    images: BLACK_SOCK_IMAGES,
    sizes: SOCK_SIZES,
  },
  {
    id: "pilates-grip",
    name: "Pilates Grip Socks",
    colorLabel: null,
    category: "Socks",
    sockType: "pilates",
    price: null,
    badge: "Coming Soon",
    comingSoon: true,
    description:
      "Studio grip socks with arch support and nonslip soles. Launching soon. Join the waitlist at the studio.",
    image: casualWhite,
    images: [casualWhite],
    sizes: [],
  },
];

export const CASUAL_SOCKS = PRODUCTS.filter((p) => p.sockType === "casual");
export const PRODUCT_CATEGORIES = ["Socks"];

export function productCartId(product, size) {
  return `${product.id}_${size}`;
}

export function productDisplayName(product, sizeId) {
  const option = SOCK_SIZE_OPTIONS.find((s) => s.id === sizeId);
  const sizeLabel = option?.label ?? sizeId;
  const color = product.colorLabel ? `, ${product.colorLabel}` : "";
  return `${product.name}${color}, ${sizeLabel}`;
}
