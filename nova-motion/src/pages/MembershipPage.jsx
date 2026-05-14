// ─────────────────────────────────────────────────────
//  NOVA MOTION — Membership Page  (/membership)
// ─────────────────────────────────────────────────────

import PageHero   from "@/components/PageHero";
import Membership from "@/sections/Membership";
import { STUDIO_EMAIL } from "@/data/brand";

const FAQS = [
  {
    q: "Can I freeze my membership?",
    a: "Yes — members can freeze for up to 8 weeks per year at no cost. Simply notify us 5 days before your billing date.",
  },
  {
    q: "Is there a joining fee?",
    a: "No joining fee. All plans start from your first billing date with a full 30-day money-back guarantee.",
  },
  {
    q: "Can I upgrade or downgrade?",
    a: "Absolutely. Plan changes take effect from your next billing cycle. You can manage this anytime in the member app.",
  },
  {
    q: "What happens to unused classes?",
    a: "Unused classes from credit-based plans do not roll over month-to-month, so we encourage you to book early.",
  },
  {
    q: "Are there corporate or family rates?",
    a: `Yes — groups of 3+ receive 15% off any plan. Contact us at ${STUDIO_EMAIL} for corporate enquiries.`,
  },
];

export default function MembershipPage({ onPlanClick }) {
  return (
    <>
      <PageHero
        label="Membership"
        title="Invest in your wellbeing."
        subtitle="Transparent pricing. No hidden fees. Cancel or pause anytime."
      />
      <Membership onPlanClick={onPlanClick} />

      {/* FAQ */}
      <section style={{ padding: "90px 40px", maxWidth: 760, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="section-label">Frequently Asked</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px,3vw,46px)", fontWeight: 300 }}>
            Questions
          </h2>
        </div>
        {FAQS.map((faq, i) => (
          <FAQItem key={i} q={faq.q} a={faq.a} />
        ))}
      </section>
    </>
  );
}

import { useState } from "react";

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid var(--color-border)",
        cursor: "pointer",
      }}
      onClick={() => setOpen((o) => !o)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "22px 0",
        }}
      >
        <span style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 400, flex: 1, paddingRight: 16 }}>
          {q}
        </span>
        <span
          style={{
            fontSize: 20,
            color: "var(--color-gold)",
            transform: open ? "rotate(45deg)" : "none",
            transition: "transform 0.25s ease",
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          +
        </span>
      </div>
      {open && (
        <div
          className="slide-dn"
          style={{
            fontSize: 14,
            color: "var(--color-text-muted)",
            lineHeight: 1.8,
            fontWeight: 300,
            paddingBottom: 20,
          }}
        >
          {a}
        </div>
      )}
    </div>
  );
}
