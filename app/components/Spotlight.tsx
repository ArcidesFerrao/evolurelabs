"use client";

import { useReveal } from "@/app/hooks/useReveal";

const stockItems = [
  { label: "Arroz 5kg", pct: 78, color: "var(--accent)" },
  { label: "Óleo 1L", pct: 45, color: "var(--amber)" },
  { label: "Farinha", pct: 22, color: "var(--red)" },
  { label: "Açúcar", pct: 90, color: "var(--accent)" },
];

export default function Spotlight() {
  const ref = useReveal();

  return (
    <section
      id="produto"
      // className="p-2 md:p-5"
      style={{
        padding: "2rem 2rem 6rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          ref={ref}
          className="reveal"
          style={{
            background: "var(--admin-card)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: "2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* bg glow */}
          <div
            style={{
              position: "absolute",
              right: -100,
              top: -100,
              width: 400,
              height: 400,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(29,158,117,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Left */}
            <div>
              <span
                style={{
                  display: "inline-block",
                  background: "var(--accent-subtle)",
                  border: "1px solid var(--border-accent)",
                  color: "var(--accent)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.3rem 0.8rem",
                  borderRadius: 100,
                  marginBottom: "1.2rem",
                }}
              >
                Produto Principal
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginBottom: "1rem",
                }}
              >
                Contela — Gestão de
                <br />
                negócios simplificada
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.95rem",
                  fontWeight: 300,
                  lineHeight: 1.75,
                }}
              >
                Plataforma SaaS que centraliza encomendas, stock, fornecedores e
                entregas numa única interface — desenhada para o mercado
                moçambicano.
              </p>

              <ul
                style={{
                  listStyle: "none",
                  margin: "1.5rem 0 2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {[
                  "Gestão de stock e fornecedores em tempo real",
                  "Controlo de encomendas e entregas",
                  "Dashboard de despesas e relatórios",
                  "Interface em Português · MZN integrado",
                  "Dois perfis: Loja / Fornecedor",
                ].map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.65rem",
                      color: "var(--muted)",
                      fontSize: "0.9rem",
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col md:flex-row gap-2">
                <a
                  href="#contacto"
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
                    transition:
                      "background 0.2s, transform 0.15s, box-shadow 0.2s",
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
                  Agendar uma demo
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
                  href="https://contela.evolurelabs.com"
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
                  Ver Plataforma
                </a>
              </div>
            </div>

            {/* Right: mock */}
            <div
              className="hidden md:block"
              style={{
                background: "#0d0b12",
                border: "1px solid var(--border)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              {/* topbar */}
              <div
                style={{
                  background: "var(--dash-bg)",
                  borderBottom: "1px solid var(--border)",
                  padding: "0.75rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                {[
                  { c: "var(--red)" },
                  { c: "var(--amber)" },
                  { c: "var(--accent)" },
                ].map(({ c }, i) => (
                  <span
                    key={i}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: c,
                      display: "inline-block",
                    }}
                  />
                ))}
                <span
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.75rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Contela · Dashboard
                </span>
              </div>

              {/* body */}
              <div style={{ padding: "1.25rem" }}>
                <div
                  style={{
                    display: "flex",
                    marginBottom: "1rem",
                    gap: "0.5rem",
                  }}
                >
                  {[
                    { val: "142", label: "Encomendas", color: "var(--accent)" },
                    { val: "38", label: "Pendentes", color: "var(--amber)" },
                    { val: "MT 84k", label: "Receita", color: "var(--blue)" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      style={{
                        background: "var(--dash-bg)",
                        borderRadius: 8,
                        padding: "0.75rem 1rem",
                        flex: 1,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                          color: s.color,
                        }}
                      >
                        {s.val}
                      </div>
                      <div
                        style={{
                          fontSize: "0.65rem",
                          color: "var(--muted)",
                          marginTop: "0.2rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {stockItems.map((item) => (
                  <div key={item.label} style={{ marginBottom: "0.5rem" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.7rem",
                        color: "var(--muted)",
                        marginBottom: "0.3rem",
                      }}
                    >
                      <span>{item.label}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div
                      style={{
                        height: 6,
                        borderRadius: 3,
                        background: "var(--dash-bg)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${item.pct}%`,
                          borderRadius: 3,
                          background: item.color,
                        }}
                      />
                    </div>
                  </div>
                ))}

                <div
                  style={{
                    marginTop: "1rem",
                    padding: "0.75rem",
                    background: "var(--dash-bg)",
                    borderRadius: 8,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
                    Última entrega
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    ✓ Concluída · 14:32
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
