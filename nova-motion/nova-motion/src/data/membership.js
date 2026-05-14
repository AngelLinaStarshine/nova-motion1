// ─────────────────────────────────────────────────────
//  NOVA MOTION — Membership Plans Data
// ─────────────────────────────────────────────────────

export const MEMBERSHIPS = [
  {
    id: "essentials",
    name: "Essentials",
    price: 89,
    period: "/mo",
    popular: false,
    tagline: "Perfect for getting started",
    features: [
      "4 classes per month",
      "Mat & small equipment",
      "Member app access",
      "10% shop discount",
    ],
  },
  {
    id: "studio",
    name: "Studio",
    price: 159,
    period: "/mo",
    popular: true,   // ← marks this card as "Most Popular"
    tagline: "Our most loved plan",
    features: [
      "Unlimited mat classes",
      "8 reformer classes / month",
      "1 guest pass per month",
      "15% shop discount",
      "Priority booking",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    price: 229,
    period: "/mo",
    popular: false,
    tagline: "The full Nova Motion experience",
    features: [
      "Unlimited all classes",
      "1 private session credit / month",
      "3 guest passes per month",
      "20% shop discount",
      "VIP priority booking",
      "Complimentary nutrition consultation",
    ],
  },
];
