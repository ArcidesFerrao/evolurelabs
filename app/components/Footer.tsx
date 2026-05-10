"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "3rem 4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        flexWrap: "wrap",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem" }}>
        Evolure<span style={{ color: "var(--accent)" }}>.</span>Labs
      </div>

      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        {[
          { label: "Serviços", href: "#servicos" },
          { label: "Contela", href: "#produto" },
          { label: "Processo", href: "#processo" },
          { label: "Contacto", href: "#contacto" },
        ].map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--foreground)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ color: "rgba(244,245,250,0.25)", fontSize: "0.8rem" }}>
        © 2025 Evolure Labs · Maputo, Moçambique
      </div>
    </footer>
  );
}
