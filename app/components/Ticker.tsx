"use client";

const items = [
  "Desenvolvimento Web",
  "Plataformas SaaS",
  "Transformação Digital",
  "Apps Mobile",
  "Sistemas de Gestão",
  "Integração de APIs",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "1.1rem 0",
        overflow: "hidden",
        background: "var(--admin-card)",
      }}
    >
      <div
        className="animate-ticker"
        style={{ display: "flex", gap: "4rem", whiteSpace: "nowrap", width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              color: "var(--muted)",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.7rem",
            }}
          >
            <span
              style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", display: "inline-block", flexShrink: 0 }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
