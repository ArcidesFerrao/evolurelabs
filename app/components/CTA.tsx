"use client";

import { useReveal } from "@/app/hooks/useReveal";

export default function CTA() {
  const ref = useReveal();

  return (
    <section
      id="contacto"
      style={{ padding: "6rem 2rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          ref={ref}
          className="reveal"
          style={{
            background: "var(--admin-card)",
            border: "1px solid var(--border-accent)",
            borderRadius: 20,
            padding: "5rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center bottom, rgba(29,158,117,0.1) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />

          <span
            style={{
              display: "inline-block",
              color: "var(--accent)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Vamos começar
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              maxWidth: 600,
              margin: "0 auto 1rem",
              lineHeight: 1.1,
            }}
          >
            Pronto para digitalizar o seu negócio?
          </h2>
          <p
            style={{
              color: "var(--muted)",
              maxWidth: 460,
              margin: "0 auto 2.5rem",
              fontWeight: 300,
              fontSize: "1rem",
              lineHeight: 1.75,
            }}
          >
            Conte-nos o seu desafio. Em 48 horas temos uma proposta
            personalizada para a sua realidade.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://webstudio.evolurelabs.com"
              style={{
                background: "var(--accent)",
                color: "#04342c",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "1rem 2.5rem",
                borderRadius: 8,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "#23c48e";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 8px 32px rgba(29,158,117,0.35)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "var(--accent)";
                el.style.transform = "";
                el.style.boxShadow = "";
              }}
            >
              WebStudio
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://wa.me/258852740554"
              style={{
                background: "transparent",
                color: "var(--foreground)",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "1rem",
                padding: "1rem 2.5rem",
                borderRadius: 8,
                textDecoration: "none",
                border: "1px solid var(--border)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(244,245,250,0.25)";
                el.style.background = "var(--dash-bg)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.background = "transparent";
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
