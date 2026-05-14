// ─────────────────────────────────────────────────────
//  NOVA MOTION — ImagePlaceholder
//  Renders a branded SVG placeholder whenever an actual
//  image hasn't been added yet. Accepts:
//    label   - short filename hint shown inside the box
//    width   - css width  (default "100%")
//    height  - css height (default "200px")
//    accent  - optional brand-accent hex for tint
//    round   - boolean, clips to circle (for avatars)
// ─────────────────────────────────────────────────────

export default function ImagePlaceholder({
  label = "Add image",
  width = "100%",
  height = "200px",
  accent = "#b8975a",
  round = false,
}) {
  const tint  = accent + "18";
  const dash  = accent + "40";
  const text  = accent + "90";

  return (
    <div
      style={{
        width,
        height,
        background: tint,
        border: `1.5px dashed ${dash}`,
        borderRadius: round ? "50%" : 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        overflow: "hidden",
        flexShrink: 0,
        userSelect: "none",
      }}
    >
      {/* Camera icon */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke={dash}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>

      {/* Label */}
      <span
        style={{
          fontSize: 10,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: text,
          fontFamily: "var(--font-body)",
          textAlign: "center",
          padding: "0 12px",
          lineHeight: 1.5,
        }}
      >
        📸 {label}
      </span>
    </div>
  );
}
