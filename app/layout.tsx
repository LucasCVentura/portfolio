import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400","700","900"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  title: "Lucas Coelho — Desenvolvedor Full Stack",
  description: "Portfólio de Lucas Coelho, Desenvolvedor Full Stack com quase 5 anos de experiência. Node.js, React, TypeScript, Flutter, GCP.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cinzel.variable}`} suppressHydrationWarning>
      <body className="font-[family-name:var(--font-inter)] antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
