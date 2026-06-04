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
    secondary: {
      label: "Ver Plataforma",
      href: "https://digimart.evolurelabs.com",
    },
    mock: "digimart",
  },
  {
    id: "theject",
    badge: "Marketplace de Projectos",
    name: "The Ject",
    tagline: "Compre e venda projectos digitais verificados",
    desc: "Marketplace onde empreendedores compram e vendem projectos digitais com receita verificada. Cada listagem passa por um sistema de verificação em 3 níveis — Legal, Receita e Lucro.",
    accent: "var(--purple)",
    accentRaw: "#7F77DD",
    accentSubtle: "rgba(127,119,221,0.08)",
    accentBorder: "rgba(127,119,221,0.35)",
    features: [
      "Verificação em 3 níveis: Legal ✔ / Receita ✔✔ / Lucro ✔✔✔",
      "Blueprint protegido por NDA — acesso só após aceitação",
      "Deal flow exclusivo para compradores verificados",
      "Painel de vendedor com toggle de listagem à venda",
      "Roles distintos: Vendedor / Comprador / Admin",
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
  const listings = [
    {
      name: "SaaS Analytics Tool",
      price: "$4 200",
      badges: 3,
      category: "SaaS",
    },
    {
      name: "E-commerce Store MZ",
      price: "$1 800",
      badges: 2,
      category: "E-commerce",
    },
    {
      name: "Newsletter Platform",
      price: "$950",
      badges: 1,
      category: "Media",
    },
  ];
  const badgeColor = ["var(--amber)", "var(--accent)", "#7F77DD"];

  return (
    <div
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
          The Ject · Deal Flow
        </span>
      </div>

      <div style={{ padding: "1.25rem" }}>
        {/* Platform stats */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
          {[
            { val: "124", label: "Projectos", color: "#7F77DD" },
            { val: "38", label: "Verificados", color: "var(--accent)" },
            { val: "$2.1M", label: "Volume", color: "var(--amber)" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: "var(--dash-bg)",
                borderRadius: 8,
                padding: "0.65rem 0.75rem",
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
                  fontSize: "0.62rem",
                  color: "var(--muted)",
                  marginTop: "0.15rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Filter bar */}
        <div
          style={{
            display: "flex",
            gap: "0.35rem",
            marginBottom: "0.85rem",
            flexWrap: "wrap",
          }}
        >
          {["Todos", "Verificados", "À Venda"].map((f, i) => (
            <span
              key={f}
              style={{
                fontSize: "0.65rem",
                fontWeight: 600,
                padding: "0.2rem 0.55rem",
                borderRadius: 100,
                background: i === 0 ? "#7F77DD" : "var(--dash-bg)",
                color: i === 0 ? "#fff" : "var(--muted)",
                border: "1px solid " + (i === 0 ? "#7F77DD" : "var(--border)"),
              }}
            >
              {f}
            </span>
          ))}
        </div>

        {/* Listings */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
        >
          {listings.map((l) => (
            <div
              key={l.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.6rem 0.75rem",
                background: "var(--dash-bg)",
                borderRadius: 8,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.18rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--foreground)",
                    fontWeight: 500,
                  }}
                >
                  {l.name}
                </span>
                <span style={{ fontSize: "0.62rem", color: "var(--muted)" }}>
                  {l.category}
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}
              >
                {/* verification badges */}
                <div style={{ display: "flex", gap: "0.18rem" }}>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      key={i}
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background:
                          i < l.badges
                            ? badgeColor[i]
                            : "rgba(255,255,255,0.1)",
                        display: "inline-block",
                      }}
                    />
                  ))}
                </div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#7F77DD",
                    fontWeight: 700,
                  }}
                >
                  {l.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* NDA gate hint */}
        <div
          style={{
            marginTop: "0.75rem",
            padding: "0.6rem 0.75rem",
            background: "rgba(127,119,221,0.08)",
            border: "1px solid rgba(127,119,221,0.25)",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontSize: "0.9rem" }}>🔒</span>
          <span style={{ fontSize: "0.7rem", color: "rgba(127,119,221,0.9)" }}>
            Blueprint disponível após aceitação do NDA
          </span>
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
