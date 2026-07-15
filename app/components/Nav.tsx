"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center border border-[var(--border)] text-[10px] tracking-[1px] uppercase overflow-hidden">
      <button
        onClick={() => setLocale("pt")}
        className={`px-2.5 py-1.5 transition-colors duration-200 ${locale === "pt" ? "bg-[rgba(0,180,216,.15)] text-[var(--water3)]" : "text-[var(--muted)] hover:text-[var(--water3)]"}`}
      >
        PT
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1.5 transition-colors duration-200 ${locale === "en" ? "bg-[rgba(0,180,216,.15)] text-[var(--water3)]" : "text-[var(--muted)] hover:text-[var(--water3)]"}`}
      >
        EN
      </button>
    </div>
  );
}

export default function Nav() {
  const { t } = useLanguage();
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = document.querySelectorAll("section[id]");
      let cur = "";
      sections.forEach(s => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 120) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 py-4 md:py-5 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-[#020b18]/80 border-b border-[var(--border)]" : ""}`}>
      <span className="font-[family-name:var(--font-cinzel)] text-[17px] font-bold tracking-[3px] text-[var(--foam)]">
        LC<span className="text-[var(--water2)]">.</span>
      </span>
      <div className="hidden md:flex items-center gap-10">
        <ul className="flex gap-10">
          {t.nav.links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-[11px] tracking-[2px] uppercase transition-colors duration-200 ${active === l.href.slice(1) ? "text-[var(--water3)]" : "text-[var(--muted)] hover:text-[var(--water3)]"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <LanguageToggle />
      </div>
      {/* Mobile links */}
      <div className="flex md:hidden items-center gap-5">
        {t.nav.links.map(l => (
          <a key={l.href} href={l.href}
            className={`text-[10px] tracking-[1px] uppercase transition-colors duration-200 ${active === l.href.slice(1) ? "text-[var(--water3)]" : "text-[var(--muted)]"}`}>
            {l.label}
          </a>
        ))}
        <LanguageToggle />
      </div>
    </nav>
  );
}
