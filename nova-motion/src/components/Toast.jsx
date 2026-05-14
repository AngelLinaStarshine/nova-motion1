// ─────────────────────────────────────────────────────
//  NOVA MOTION — Toast Notification
//  Usage: <Toast message="Added to cart" />
//         Pass null/undefined to hide.
// ─────────────────────────────────────────────────────

export default function Toast({ message }) {
  if (!message) return null;
  return <div className="toast">{message}</div>;
}
