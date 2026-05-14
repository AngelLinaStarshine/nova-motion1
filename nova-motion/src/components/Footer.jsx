// ─────────────────────────────────────────────────────
//  NOVA MOTION — Footer
// ─────────────────────────────────────────────────────

import { Link } from "react-router-dom";
import {
  BRAND_SLOGAN,
  BRAND_TAGLINE_SHORT,
  LOGO_ALT,
  LOGO_SRC,
  STUDIO_EMAIL,
  STUDIO_INSTAGRAM_URL,
  STUDIO_PHONE_DISPLAY,
  STUDIO_PHONE_TEL,
  STUDIO_WHATSAPP_URL,
} from "../data/brand";

const COLS = [
  {
    heading: "Navigate",
    links: [
      { label: "Schedule", to: "/schedule" },
      { label: "Classes", to: "/classes" },
      { label: "Collection", to: "/collection" },
      { label: "Membership", to: "/membership" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { label: "Instructors", to: "/about" },
      { label: "Gift Cards", to: "/contact" },
      { label: "Corporate", to: "/contact" },
      { label: "Press", to: "/contact" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: STUDIO_EMAIL, href: `mailto:${STUDIO_EMAIL}` },
      { label: STUDIO_PHONE_DISPLAY, href: `tel:${STUDIO_PHONE_TEL}` },
      { label: "123 Wellness Ave, Toronto", to: null },
      { label: "Mon – Fri  6 am – 9 pm", to: null },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: STUDIO_INSTAGRAM_URL, Icon: IconInstagram },
  { label: "WhatsApp", href: STUDIO_WHATSAPP_URL, Icon: IconWhatsApp },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-bg-dark)", padding: "72px 40px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr repeat(3, 1fr)",
            gap: 48,
            marginBottom: 64,
          }}
        >
          <div>
            <img
              src={LOGO_SRC}
              alt={LOGO_ALT}
              style={{ height: 48, width: "auto", display: "block", marginBottom: 16 }}
            />
            <p
              style={{
                fontSize: 15,
                color: "#8c857e",
                lineHeight: 1.65,
                fontWeight: 400,
                fontStyle: "italic",
                maxWidth: 280,
                marginBottom: 24,
              }}
            >
              {BRAND_TAGLINE_SHORT}
            </p>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: "1px solid #2a2a2a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#5a5450",
                    transition: "color 0.2s, border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-gold)";
                    e.currentTarget.style.borderColor = "var(--color-gold)";
                    e.currentTarget.style.background = "rgba(184, 151, 90, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#5a5450";
                    e.currentTarget.style.borderColor = "#2a2a2a";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.heading}>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  marginBottom: 22,
                }}
              >
                {col.heading}
              </div>
              {col.links.map((link) =>
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    style={{
                      display: "block",
                      fontSize: 13,
                      color: "#4a4540",
                      textDecoration: "none",
                      marginBottom: 12,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#f7f4ef";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#4a4540";
                    }}
                  >
                    {link.label}
                  </Link>
                ) : link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      display: "block",
                      fontSize: 13,
                      color: "#4a4540",
                      textDecoration: "none",
                      marginBottom: 12,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#f7f4ef";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#4a4540";
                    }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <span
                    key={link.label}
                    style={{ display: "block", fontSize: 13, color: "#4a4540", marginBottom: 12 }}
                  >
                    {link.label}
                  </span>
                )
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid #1e1e1e",
            borderBottom: "1px solid #1e1e1e",
            padding: "32px 0",
            marginBottom: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--color-text-inv)", marginBottom: 4 }}>
              Your first class is free.
            </div>
            <div style={{ fontSize: 13, color: "#4a4540" }}>Sign up and claim your complimentary trial session.</div>
          </div>
          <Link to="/contact">
            <button type="button" className="btn-gold" style={{ padding: "13px 28px" }}>
              Claim Free Class →
            </button>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <span style={{ fontSize: 12, color: "#2e2e2e" }}>
            © {new Date().getFullYear()} Nova Motion Pilates Studio. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <span
                key={label}
                style={{ fontSize: 12, color: "#2e2e2e", cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#5a5450";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#2e2e2e";
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: 12,
            letterSpacing: "0.06em",
            color: "#4a4540",
            lineHeight: 1.75,
            fontWeight: 300,
            maxWidth: 640,
            margin: "0 auto",
            paddingTop: 8,
            borderTop: "1px solid #1a1a1a",
          }}
        >
          {BRAND_SLOGAN}
        </p>
      </div>
    </footer>
  );
}

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
