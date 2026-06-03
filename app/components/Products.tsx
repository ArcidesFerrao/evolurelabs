"use client";

import { useReveal } from "@/app/hooks/useReveal";

/* ─── PRODUCT DATA ─── */
const PRODUCTS = [
  {
    id: "contela",
    badge: "Gestão Empresarial",
    name: "Contela",
    tagline: "Gestão de negócios simplificada",
    desc: "Plataforma SaaS que centraliza encomendas, stock, fornecedores e entregas numa única interface — desenhada para o mercado moçambicano.",
    accent: "var(--accent)",
    accentRaw: "#1D9E75",
    accentSubtle: "var(--accent-subtle)",
    accentBorder: "var(--border-accent)",
    features: [
      "Gestão de stock e fornecedores em tempo real",
      "Controlo de encomendas e entregas",
      "Dashboard de despesas e relatórios",
      "Interface em Português · MZN integrado",
      "Dois perfis: Loja / Fornecedor",
    ],
    cta: { label: "Agendar uma demo", href: "#contacto" },
    secondary: {
      label: "Ver Plataforma",
      href: "https://contela.evolurelabs.com",
    },
    mock: "contela",
  },
  {
    id: "digimart",
    badge: "Comércio Digital",
    name: "DigiMart",
    tagline: "A sua loja online, pronta a vender",
    desc: "Plataforma de e-commerce para pequenos e médios negócios moçambicanos. Crie a sua loja, gira produtos e receba encomendas sem complicações.",
    accent: "var(--blue)",
    accentRaw: "#378ADD",
    accentSubtle: "rgba(55,138,221,0.08)",
    accentBorder: "rgba(55,138,221,0.35)",
    features: [
      "Criação de loja em minutos",
      "Catálogo de produtos com variantes",
      "Gestão de encomendas e clientes",
      "Pagamentos via M-Pesa e transferência",
      "Painel de analytics e relatórios",
    ],
    cta: { label: "Entrar em lista de espera", href: "#contacto" },
    secondary: { label: "Saber mais", href: "#contacto" },
    mock: "digimart",
  },
  {
    id: "theject",
    badge: "Gestão de Projectos",
    name: "The Ject",
    tagline: "Projectos entregues a tempo, sempre",
    desc: "Ferramenta de gestão de projectos e tarefas pensada para equipas africanas. Simples, rápida e sem a complexidade desnecessária das alternativas ocidentais.",
    accent: "var(--purple)",
    accentRaw: "#7F77DD",
    accentSubtle: "rgba(127,119,221,0.08)",
    accentBorder: "rgba(127,119,221,0.35)",
    features: [
      "Quadros Kanban e listas de tarefas",
      "Gestão de equipas e permissões",
      "Tracking de tempo por tarefa",
      "Relatórios de progresso automáticos",
      "Integrações com WhatsApp e email",
    ],
    cta: { label: "Entrar em lista de espera", href: "#contacto" },
    secondary: { label: "Saber mais", href: "#contacto" },
    mock: "theject",
  },
];

/* ─── MOCK COMPONENTS ─── */
const stockItems = [
  { label: "Arroz 5kg", pct: 78, color: "var(--accent)" },
  { label: "Óleo 1L", pct: 45, color: "var(--amber)" },
  { label: "Farinha", pct: 22, color: "var(--red)" },
  { label: "Açúcar", pct: 90, color: "var(--accent)" },
];

function ContelaMock() {
  return (
    <div
      style={{
        background: "#0d0b12",
        border: "1px solid var(--border)",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
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
      <div style={{ padding: "1.25rem" }}>
        <div style={{ display: "flex", marginBottom: "1rem", gap: "0.5rem" }}>
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
  );
}

function DigiMartMock() {
  const products = [
    { name: "Camiseta Branca", price: "MT 450", stock: 12, status: "active" },
    { name: "Calças Jeans", price: "MT 890", stock: 5, status: "low" },
    { name: "Tênis Running", price: "MT 1200", stock: 0, status: "out" },
    { name: "Boné Evolure", price: "MT 250", stock: 24, status: "active" },
  ];
  const statusColor: Record<string, string> = {
    active: "var(--accent)",
    low: "var(--amber)",
    out: "var(--red)",
  };
  const statusLabel: Record<string, string> = {
    active: "Em stock",
    low: "Pouco stock",
    out: "Esgotado",
  };
  return (
    <div
      style={{
        background: "#0d0b12",
        border: "1px solid var(--border)",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
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
        {[{ c: "var(--red)" }, { c: "var(--amber)" }, { c: "#378ADD" }].map(
          ({ c }, i) => (
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
          ),
        )}
        <span
          style={{
            color: "var(--muted)",
            fontSize: "0.75rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          DigiMart · Loja
        </span>
      </div>
      <div style={{ padding: "1.25rem" }}>
        {/* Stats row */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
          {[
            { val: "MT 24k", label: "Hoje", color: "#378ADD" },
            { val: "8", label: "Encomendas", color: "var(--accent)" },
            { val: "47", label: "Produtos", color: "var(--amber)" },
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
                  fontSize: "1rem",
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
        {/* Product list */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
        >
          {products.map((p) => (
            <div
              key={p.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.55rem 0.75rem",
                background: "var(--dash-bg)",
                borderRadius: 7,
              }}
            >
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "var(--foreground)",
                  fontWeight: 500,
                }}
              >
                {p.name}
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
                  {p.price}
                </span>
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: statusColor[p.status],
                    fontWeight: 600,
                    background: `${statusColor[p.status]}18`,
                    padding: "0.15rem 0.5rem",
                    borderRadius: 100,
                  }}
                >
                  {statusLabel[p.status]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TheJectMock() {
  const cols = [
    {
      title: "A fazer",
      color: "var(--muted)",
      tasks: ["Redesign homepage", "Setup DB"],
    },
    {
      title: "Em progresso",
      color: "var(--amber)",
      tasks: ["API auth", "Dashboard UI"],
    },
    {
      title: "Concluído",
      color: "var(--accent)",
      tasks: ["Wireframes", "Tech stack"],
    },
  ];
  return (
    <div
      style={{
        background: "#0d0b12",
        border: "1px solid var(--border)",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
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
        {[{ c: "var(--red)" }, { c: "var(--amber)" }, { c: "#7F77DD" }].map(
          ({ c }, i) => (
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
          ),
        )}
        <span
          style={{
            color: "var(--muted)",
            fontSize: "0.75rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          The Ject · Board
        </span>
      </div>
      <div style={{ padding: "1.25rem" }}>
        {/* Progress bar */}
        <div style={{ marginBottom: "1rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.7rem",
              color: "var(--muted)",
              marginBottom: "0.4rem",
            }}
          >
            <span>Progresso do sprint</span>
            <span>67%</span>
          </div>
          <div
            style={{ height: 6, borderRadius: 3, background: "var(--dash-bg)" }}
          >
            <div
              style={{
                height: "100%",
                width: "67%",
                borderRadius: 3,
                background: "#7F77DD",
              }}
            />
          </div>
        </div>
        {/* Kanban columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "0.5rem",
          }}
        >
          {cols.map((col) => (
            <div
              key={col.title}
              style={{
                background: "var(--dash-bg)",
                borderRadius: 8,
                padding: "0.6rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.65rem",
                  color: col.color,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "0.5rem",
                }}
              >
                {col.title}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                }}
              >
                {col.tasks.map((t) => (
                  <div
                    key={t}
                    style={{
                      background: "rgba(244,245,250,0.05)",
                      borderRadius: 5,
                      padding: "0.45rem 0.5rem",
                      fontSize: "0.72rem",
                      color: "var(--foreground)",
                      borderLeft: `2px solid ${col.color}`,
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Team row */}
        <div
          style={{
            marginTop: "0.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.5rem 0.75rem",
            background: "var(--dash-bg)",
            borderRadius: 7,
          }}
        >
          <span style={{ fontSize: "0.72rem", color: "var(--muted)" }}>
            Equipa activa
          </span>
          <div style={{ display: "flex", gap: "-4px" }}>
            {["A", "B", "C"].map((l, i) => (
              <div
                key={i}
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: ["#1D9E75", "#378ADD", "#7F77DD"][i],
                  border: "2px solid #0d0b12",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  marginLeft: i > 0 ? -6 : 0,
                }}
              >
                {l}
              </div>
            ))}
            <div
              style={{
                fontSize: "0.68rem",
                color: "var(--muted)",
                marginLeft: "0.5rem",
                lineHeight: "22px",
              }}
            >
              +2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const MOCKS: Record<string, React.ReactNode> = {
  contela: <ContelaMock />,
  digimart: <DigiMartMock />,
  theject: <TheJectMock />,
};

/* ─── PRODUCT SPOTLIGHT ─── */
function ProductSpotlight({
  product,
  reverse,
}: {
  product: (typeof PRODUCTS)[0];
  reverse?: boolean;
}) {
  const ref = useReveal();

  return (
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
          right: reverse ? "auto" : -100,
          left: reverse ? -100 : "auto",
          top: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${product.accentRaw}18 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: "3rem", alignItems: "center" }}
      >
        {/* Text — swap order on reverse */}
        <div style={{ order: reverse ? 2 : 1 }}>
          <span
            style={{
              display: "inline-block",
              background: product.accentSubtle,
              border: `1px solid ${product.accentBorder}`,
              color: product.accent,
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.3rem 0.8rem",
              borderRadius: 100,
              marginBottom: "1.2rem",
            }}
          >
            {product.badge}
          </span>

          <h3
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}
          >
            <span style={{ color: product.accent }}>{product.name}</span> —{" "}
            {product.tagline}
          </h3>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.93rem",
              fontWeight: 300,
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            {product.desc}
          </p>

          <ul
            style={{
              listStyle: "none",
              marginBottom: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.55rem",
            }}
          >
            {product.features.map((f) => (
              <li
                key={f}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  color: "var(--muted)",
                  fontSize: "0.88rem",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: product.accent,
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
              href={product.cta.href}
              style={{
                background: product.accent,
                color: "#04342c",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.92rem",
                padding: "0.82rem 1.75rem",
                borderRadius: 8,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "brightness(1.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 8px 28px ${product.accentRaw}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "";
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              {product.cta.label}
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
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
              href={product.secondary.href}
              style={{
                background: "transparent",
                color: "var(--foreground)",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "0.92rem",
                padding: "0.82rem 1.75rem",
                borderRadius: 8,
                textDecoration: "none",
                border: "1px solid var(--border)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(244,245,250,0.25)";
                e.currentTarget.style.background = "var(--dash-bg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {product.secondary.label}
            </a>
          </div>
        </div>

        {/* Mock UI */}
        <div className="hidden md:block" style={{ order: reverse ? 1 : 2 }}>
          {MOCKS[product.mock]}
        </div>
      </div>
    </div>
  );
}

/* ─── SECTION ─── */
export default function Products() {
  const ref = useReveal();

  return (
    <section
      id="produto"
      style={{ padding: "2rem 2rem 6rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div ref={ref} className="reveal" style={{ marginBottom: "3rem" }}>
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
            Os nossos produtos
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 640,
            }}
          >
            Software feito para o mercado moçambicano
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1rem",
              maxWidth: 520,
              marginTop: "0.75rem",
              fontWeight: 300,
              lineHeight: 1.75,
            }}
          >
            Cada produto nasce de um problema real. Construímos ferramentas que
            as pessoas de Moçambique realmente precisam e usam.
          </p>
        </div>

        {/* Spotlights */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {PRODUCTS.map((product, i) => (
            <ProductSpotlight
              key={product.id}
              product={product}
              reverse={i % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
