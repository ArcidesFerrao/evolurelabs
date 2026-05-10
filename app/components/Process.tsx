"use client";

import { useReveal } from "@/app/hooks/useReveal";

const steps = [
  {
    num: "01",
    title: "Descoberta",
    desc: "Mergulhamos no seu negócio — entendemos os processos, os desafios e os objetivos antes de escrever uma linha de código.",
  },
  {
    num: "02",
    title: "Arquitectura",
    desc: "Desenhamos a solução técnica ideal, escolhendo as ferramentas certas para o contexto certo — sem over-engineering.",
  },
  {
    num: "03",
    title: "Desenvolvimento",
    desc: "Construímos de forma iterativa, com entregas regulares e feedback contínuo. O cliente vê o progresso em tempo real.",
  },
  {
    num: "04",
    title: "Entrega & Suporte",
    desc: "Lançamos, formamos a equipa e mantemos o sistema. O nosso trabalho não termina na entrega.",
  },
];

export default function Process() {
  const ref = useReveal();
  const stepsRef = useReveal();

  return (
    <section
      id="processo"
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
            Como trabalhamos
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
            Do problema ao produto
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
            Um processo claro e colaborativo que garante que entregamos
            exactamente o que o seu negócio precisa.
          </p>
        </div>

        <div
          ref={stepsRef}
          className="reveal grid grid-cols-2 md:grid-cols-4"
          style={{
            gap: "1.5px",
            marginTop: "4rem",
          }}
        >
          {steps.map((s) => (
            <div
              key={s.num}
              style={{
                background: "var(--admin-card)",
                border: "1px solid var(--border)",
                padding: "2rem",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(29,158,117,0.04)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--admin-card)")
              }
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3rem",
                  fontWeight: 800,
                  color: "rgba(29,158,117,0.15)",
                  lineHeight: 1,
                  marginBottom: "1rem",
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                {s.title}
              </div>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.85rem",
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
