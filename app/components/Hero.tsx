"use client";

export default function Hero() {
  return (
    <header
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "8rem 2rem 5rem",
        position: "relative",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(29,158,117,0.12) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
          pointerEvents: "none",
        }}
      />

      {/* Tag */}
      <div
        className="animate-fadeup"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "var(--accent-subtle)",
          border: "1px solid var(--border-accent)",
          color: "var(--accent)",
          fontSize: "0.78rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          lineHeight: 1,
          textTransform: "uppercase",
          padding: "0.5rem 1rem",
          borderRadius: 100,
          marginBottom: "2rem",
        }}
      >
        <span
          className="animate-pulse-dot"
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "var(--accent)",
            display: "inline-block",
          }}
        />
        Software Studio · Moçambique
      </div>

      {/* Headline */}
      <h1
        className="animate-fadeup-1"
        style={{
          fontSize: "clamp(2rem, 7vw, 5.5rem)",
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          maxWidth: 900,
        }}
      >
        Processos manuais
        <br />
        <span style={{ color: "var(--accent)" }}>transformados</span> em
        <br />
        sistemas digitais.
      </h1>

      {/* Sub */}
      <p
        className="animate-fadeup-2"
        style={{
          marginTop: "1.5rem",
          maxWidth: 560,
          color: "var(--muted)",
          fontSize: "1.1rem",
          fontWeight: 300,
          lineHeight: 1.75,
        }}
      >
        Desenvolvemos software personalizado que simplifica operações, acelera
        negócios e conecta pessoas em Moçambique e além.
      </p>

      {/* Actions */}
      <div
        className="animate-fadeup-3"
        style={{
          marginTop: "2.5rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://contela.evolurelabs.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "var(--accent)",
            color: "#04342c",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "0.95rem",
            padding: "0.85rem 2rem",
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
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "none";
          }}
        >
          Ver o Contela
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
          href="#servicos"
          style={{
            background: "transparent",
            color: "var(--foreground)",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "0.95rem",
            padding: "0.85rem 2rem",
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
          Explorar serviços
        </a>
      </div>

      {/* Scroll hint */}
      <div
        className="animate-fadeup-slow"
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          color: "var(--muted)",
          fontSize: "0.72rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <div
          className="animate-scroll-pulse"
          style={{
            width: 1,
            height: 36,
            background:
              "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />
      </div>
    </header>
  );
}
