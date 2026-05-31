"use client";

import { useReveal } from "@/app/hooks/useReveal";

const services = [
  {
    title: "Plataformas Web",
    desc: "Sistemas completos de gestão empresarial, marketplaces e portais web construídos com tecnologias modernas e escaláveis.",
    iconColor: "#1D9E75",
    iconBg: "rgba(29,158,117,0.15)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Aplicações Mobile",
    desc: "Apps intuitivas para Android e iOS que colocam o poder do seu negócio na palma da mão dos seus clientes e equipa.",
    iconColor: "#EF9F27",
    iconBg: "rgba(239,159,39,0.15)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "Software Personalizado",
    desc: "Substituímos processos manuais por sistemas automáticos — desde controlo de stock até gestão de encomendas e relatórios.",
    iconColor: "#378ADD",
    iconBg: "rgba(55,138,221,0.15)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    title: "Consultoria Digital",
    desc: "Mapeamos os seus processos, identificamos os gargalos e desenhamos a arquitectura tecnológica ideal para o seu crescimento.",
    iconColor: "#7F77DD",
    iconBg: "rgba(127,119,221,0.15)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section
      id="servicos"
      style={{ padding: "6rem 2rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div ref={ref} className="reveal">
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
            O que fazemos
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 640,
            }}
          >
            Soluções digitais feitas para o seu negócio
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
            Cada sistema que entregamos nasce da compreensão profunda do
            problema. Sem templates — apenas código que resolve.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(366px, 1fr))",
            gap: "1.5px",
            marginTop: "4rem",
            border: "1.5px solid var(--border)",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  desc,
  icon,
  iconColor,
  iconBg,
}: (typeof services)[0]) {
  return (
    <div
      style={{
        background: "var(--admin-card)",
        padding: "2.5rem",
        position: "relative",
        transition: "background 0.3s",
        cursor: "default",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "rgba(29,158,117,0.06)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = "var(--admin-card)")
      }
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.5rem",
          background: iconBg,
          color: iconColor,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontSize: "1.15rem",
          fontWeight: 700,
          marginBottom: "0.6rem",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "var(--muted)",
          fontSize: "0.9rem",
          lineHeight: 1.7,
          fontWeight: 300,
        }}
      >
        {desc}
      </p>
    </div>
  );
}
