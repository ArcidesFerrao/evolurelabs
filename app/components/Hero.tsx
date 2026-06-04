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
        padding: "7rem 1.5rem 4rem",
        position: "relative",
        overflow: "hidden",
        background: "var(--background)",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage:
            "linear-gradient(rgba(244,245,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(244,245,250,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          pointerEvents: "none",
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(29,158,117,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 820,
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          className="animate-fadeup"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(29,158,117,0.08)",
            border: "1px solid rgba(29,158,117,0.28)",
            color: "var(--accent)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "0.32rem 0.9rem",
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

        {/* H1 — controlled size, max 2 lines on mobile */}
        <h1
          className="animate-fadeup-1"
          style={{
            fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.06,
            letterSpacing: "-0.03em",
            margin: "0 auto",
          }}
        >
          Processos manuais{" "}
          <span style={{ color: "var(--accent)" }}>transformados</span> em
          sistemas digitais.
        </h1>

        {/* Sub */}
        <p
          className="animate-fadeup-2"
          style={{
            marginTop: "1.5rem",
            color: "rgba(244,245,250,0.5)",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            fontWeight: 300,
            lineHeight: 1.78,
            maxWidth: 520,
            margin: "1.5rem auto 0",
          }}
        >
          Desenvolvemos software personalizado que simplifica operações, acelera
          negócios e conecta pessoas em Moçambique e além.
        </p>

        {/* CTAs */}
        <div
          className="animate-fadeup-3"
          style={{
            marginTop: "2.5rem",
            display: "flex",
            gap: "0.9rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://webstudio.evolurelabs.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--accent)",
              color: "#04342c",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "0.92rem",
              padding: "0.85rem 1.85rem",
              borderRadius: 8,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#22c48d";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 28px rgba(29,158,117,0.32)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            Começar o meu projecto
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
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
              fontSize: "0.92rem",
              padding: "0.85rem 1.85rem",
              borderRadius: 8,
              textDecoration: "none",
              border: "1px solid rgba(244,245,250,0.12)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(244,245,250,0.28)";
              e.currentTarget.style.background = "rgba(244,245,250,0.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(244,245,250,0.12)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Explorar serviços
          </a>
        </div>

        {/* Social proof strip */}
        <div
          className="animate-fadeup-3"
          style={{
            marginTop: "3.5rem",
            display: "flex",
            justifyContent: "center",
            gap: "0px",
            background: "rgba(244,245,250,0.04)",
            border: "1px solid rgba(244,245,250,0.08)",
            borderRadius: 12,
            overflow: "hidden",
            maxWidth: 480,
            margin: "3.5rem auto 0",
          }}
        >
          {[
            { val: "10+", label: "Anos de JS" },
            { val: "< 24h", label: "Resposta" },
            { val: "100%", label: "Foco em MZ" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                padding: "1rem 0.75rem",
                textAlign: "center",
                borderRight:
                  i < 2 ? "1px solid rgba(244,245,250,0.07)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  color: "var(--accent)",
                  lineHeight: 1,
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  color: "rgba(244,245,250,0.3)",
                  fontSize: "0.68rem",
                  marginTop: "0.28rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      {/* <div
        className="animate-fadeup-slow"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.35rem",
          color: "rgba(244,245,250,0.2)",
          fontSize: "0.66rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          zIndex: 1,
        }}
      >
        <span>Scroll</span>
        <div
          style={{
            width: 1,
            height: 28,
            background:
              "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />
      </div> */}
    </header>
  );
}
