"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.2rem 4rem",
        background: "rgba(20,17,26,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "1.3rem",
          letterSpacing: "-0.02em",
          color: "var(--foreground)",
          textDecoration: "none",
        }}
      >
        <Image
          src="/favicon.png"
          alt="Evolure Labs"
          width={32}
          height={32}
          style={{ display: "inline-block", marginRight: "0.5rem" }}
        />
        Evolure<span style={{ color: "var(--accent)" }}>.</span>Labs
      </Link>

      <ul
        style={{
          display: "flex",
          gap: "2.5rem",
          listStyle: "none",
          alignItems: "center",
        }}
      >
        {[
          { label: "Serviços", href: "#servicos" },
          { label: "Produto", href: "#produto" },
          { label: "Processo", href: "#processo" },
        ].map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--foreground)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--muted)")
              }
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contacto"
            style={{
              background: "var(--accent)",
              color: "#04342c",
              padding: "0.5rem 1.25rem",
              borderRadius: "6px",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.9rem",
              transition: "background 0.2s, transform 0.15s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#23c48e";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--accent)";
              el.style.transform = "translateY(0)";
            }}
          >
            Falar Connosco
          </a>
        </li>
      </ul>
    </nav>
  );
}
