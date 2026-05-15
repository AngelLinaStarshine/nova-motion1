// ─────────────────────────────────────────────────────
//  NOVA MOTION — Navbar
//  Dark bar + gold / cream accents (see .site-header in globals.css)
// ─────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NAVBAR_LOGO_SRC, LOGO_ALT } from "../data/brand";

const NAV_LINKS = [
  { label: "Schedule",   to: "/schedule"   },
  { label: "Classes",    to: "/classes"    },
  { label: "Collection", to: "/collection" },
  { label: "Membership", to: "/membership" },
  { label: "About",      to: "/about"      },
  { label: "Contact",    to: "/contact"    },
];

export default function Navbar({ cartCount = 0, onCartOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => {
      if (window.innerWidth > 900) setMobileOpen(false);
    };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <header
      className="site-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        transition: "border-color 0.35s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 40px",
          minHeight: 124,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            padding: 0,
          }}
          aria-label="Nova Motion home"
        >
          <img
            src={NAVBAR_LOGO_SRC}
            alt={LOGO_ALT}
            decoding="async"
            className="navbar-logo-img"
          />
        </button>

        <nav className="navbar-desktop" style={{ display: "flex", gap: 28, alignItems: "center", visibility: "visible" }}>
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
          <button
            type="button"
            className="navbar-cart-btn"
            onClick={onCartOpen}
            style={{
              position: "relative",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              display: "flex",
              alignItems: "center",
            }}
            aria-label={`Open cart (${cartCount} items)`}
          >
            <CartIcon />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -4,
                  right: -4,
                  background: "var(--color-gold)",
                  color: "#0a0a0a",
                  borderRadius: "50%",
                  width: 16,
                  height: 16,
                  fontSize: 11,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            className="btn-gold"
            style={{ padding: "10px 22px" }}
            onClick={() => navigate("/schedule")}
          >
            Book Now
          </button>

          <button
            type="button"
            className="navbar-hamburger"
            onClick={() => setMobileOpen((o) => !o)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              flexDirection: "column",
              gap: 5,
              padding: 4,
            }}
            aria-label="Toggle menu"
            id="hamburger-btn"
          >
            <span style={{ display: "block", width: 22, height: 1, transition: "all 0.25s" }} />
            <span style={{ display: "block", width: 22, height: 1, transition: "all 0.25s" }} />
            <span style={{ display: "block", width: 14, height: 1, transition: "all 0.25s" }} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="navbar-mobile-panel slide-dn" style={{ padding: "24px 40px 32px" }}>
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
            >
              {label}
            </NavLink>
          ))}
          <button
            type="button"
            className="btn-gold"
            style={{ width: "100%", marginTop: 20, justifyContent: "center" }}
            onClick={() => {
              navigate("/schedule");
              setMobileOpen(false);
            }}
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}
