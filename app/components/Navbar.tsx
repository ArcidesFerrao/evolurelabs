"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Produto", href: "#produto" },
  { label: "Processo", href: "#processo" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
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
          padding: "1.1rem 2rem",
          background:
            scrolled || open ? "rgba(20,17,26,0.97)" : "rgba(20,17,26,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
          transition: "background 0.3s",
        }}
      >
        {/* Logo */}
        <Link
          className="flex items-center"
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.8rem",
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

        {/* Desktop links */}
        <ul className="hidden md:flex items-center list-none gap-6">
          {NAV_LINKS.map((item) => (
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
                  (e.currentTarget.style.color = "var(--foreground)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
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
                e.currentTarget.style.background = "#23c48e";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Falar Connosco
            </a>
          </li>
        </ul>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex md:hidden items-center justify-center bg-none border-none text-var(--foreground) cursor-pointer p-1 rounded transition-opacity duration-200"
        >
          {open ? (
            /* X icon */
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M4 4l14 14M18 4L4 18"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            /* Hamburger icon */
            <span className="material-symbols-light--menu"></span>
            // <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            //   <path
            //     d="M3 6h16M3 11h16M3 16h10"
            //     stroke="currentColor"
            //     strokeWidth="1.7"
            //     strokeLinecap="round"
            //   />
            // </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        onClick={close}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 98,
          background: "rgba(14,12,20,0.5)",
          backdropFilter: "blur(4px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transition: "opacity 0.3s",
        }}
      />

      {/* Mobile menu drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          width: "min(320px, 85vw)",
          background: "#17141f",
          borderLeft: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          padding: "5.5rem 1.75rem 2.5rem",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Nav links */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            marginBottom: "2rem",
          }}
        >
          {NAV_LINKS.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={close}
                style={{
                  display: "block",
                  color: "var(--foreground)",
                  textDecoration: "none",
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-display)",
                  padding: "0.85rem 0",
                  borderBottom: "1px solid var(--border)",
                  transition: "color 0.2s",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateX(0)" : "translateX(16px)",
                  transitionDelay: `${i * 60}ms`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--foreground)")
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          onClick={close}
          style={{
            background: "var(--accent)",
            color: "#04342c",
            padding: "0.9rem 1.5rem",
            borderRadius: "8px",
            fontWeight: 700,
            fontFamily: "var(--font-display)",
            textDecoration: "none",
            fontSize: "0.95rem",
            textAlign: "center",
            display: "block",
            transition: "background 0.2s",
            opacity: open ? 1 : 0,
            transform: open ? "translateX(0)" : "translateX(16px)",
            transitionDelay: `${NAV_LINKS.length * 60}ms`,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#23c48e")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--accent)")
          }
        >
          Falar Connosco
        </a>

        {/* Bottom info */}
        <div
          style={{
            marginTop: "auto",
            color: "var(--muted)",
            fontSize: "0.78rem",
            lineHeight: 1.6,
          }}
        >
          <div
            style={{
              fontWeight: 600,
              color: "var(--foreground)",
              marginBottom: "0.25rem",
            }}
          >
            Evolure Labs
          </div>
          Maputo, Moçambique
        </div>
      </div>
    </>
  );
}
