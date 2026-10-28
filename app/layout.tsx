/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evolure Labs — Desenvolvimento de Software",
  description:
    "Desenvolvemos software personalizado que simplifica operações, acelera negócios e conecta pessoas em Moçambique e além.",
  keywords: [
    "evolure labs",
    "desenvolvimento de software moçambique",
    "software personalizado maputo",
    "sistemas à medida moçambique",
    "automação de processos moçambique",
    "desenvolvimento web maputo",
  ],
  authors: [{ name: "Evolure Labs", url: "https://evolurelabs.com" }],
  creator: "Evolure Labs",
  publisher: "Evolure Labs",

  metadataBase: new URL("https://evolurelabs.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://evolurelabs.com",
    title: "Evolure Labs — Desenvolvimento de Software em Moçambique",
    description:
      "Software personalizado que simplifica operações, acelera negócios e conecta pessoas em Moçambique e além.",
    siteName: "Evolure Labs",
    locale: "pt_MZ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Evolure Labs — Desenvolvimento de software em Moçambique",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Evolure Labs — Desenvolvimento de Software",
    description:
      "Software personalizado para simplificar operações e acelerar negócios em Moçambique.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: [{ url: "/favicon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://evolurelabs.com/" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
