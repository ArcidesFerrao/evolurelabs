"use client";

import { useReveal } from "@/app/hooks/useReveal";

const stats = [
  { val: "10", suffix: "+", label: "Anos de experiência em JavaScript" },
  { val: "100", suffix: "%", label: "Foco no mercado Moçambicano" },
  { val: "∞", suffix: "", label: "Compromisso com a qualidade" },
];

export default function Stats() {
  const ref = useReveal();

  return (
    <section
      style={{ padding: "2rem 2rem 6rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          ref={ref}
          className="reveal grid grid-cols-1 md:grid-cols-3"
          style={{
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                background: "var(--admin-card)",
                padding: "3rem 2.5rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3.5rem",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {s.val}
                <span style={{ color: "var(--accent)" }}>{s.suffix}</span>
              </div>
              <div
                style={{
                  color: "var(--muted)",
                  fontSize: "0.85rem",
                  marginTop: "0.5rem",
                  fontWeight: 300,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
