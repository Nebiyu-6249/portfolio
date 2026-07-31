import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Space_Mono, Chewy, Kalam } from "next/font/google";
import "./globals.css";
import { site, siteUrl } from "@/data/site";

// Handwriting faces for display and short accents only. Chewy is a thick,
// bouncy marker hand for the big display type; Kalam is a lighter hand for
// short accents and tags.
const display = Chewy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const hand = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-hand",
  display: "swap",
});

// Clean sans for body, typewriter mono for the metrics and tech, so the data
// that makes this portfolio different stays legible.
const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Full-stack and AI engineer in Ras Al Khaimah, UAE. I build production RAG pipelines, AI agents, and full-stack web apps, and I measure whether they work: retrieval recall, false-positive rate, citation faithfulness, latency, all scored against hand-written test sets.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: [
    "Nebiyu Elias",
    "AI engineer",
    "full-stack engineer",
    "RAG",
    "LangGraph",
    "LLM evaluation",
    "Next.js",
    "UAE",
  ],
  authors: [{ name: site.name, url: site.links.github }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${site.name} · ${site.role}`,
    description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F3E9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${hand.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
