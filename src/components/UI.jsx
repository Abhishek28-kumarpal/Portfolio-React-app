import { useReveal, useCounter } from "../hooks/usePortfolio";

/* ── Section Header ── */
export function SectionHeader({ tag, title }) {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto 3.5rem" }}>
      <p className="section-tag">{tag}</p>
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
    </div>
  );
}

/* ── Scroll-reveal wrapper ── */
export function RevealCard({ children, style, className }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`rev-card ${visible ? "rev-visible" : ""} ${className || ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

/* ── Animated counter stat ── */
export function StatItem({ count, label }) {
  const [ref, val] = useCounter(count);
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <span className="stat-num">
        {val}{val >= count ? "+" : ""}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
