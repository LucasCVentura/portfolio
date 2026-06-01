"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#about",    label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#skills",   label: "Stack" },
  { href: "#contact",  label: "Contato" },
];

export default function Nav() {
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
      <ul className="hidden md:flex gap-10">
        {links.map(l => (
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
      {/* Mobile links */}
      <div className="flex md:hidden gap-5">
        {links.map(l => (
          <a key={l.href} href={l.href}
            className={`text-[10px] tracking-[1px] uppercase transition-colors duration-200 ${active === l.href.slice(1) ? "text-[var(--water3)]" : "text-[var(--muted)]"}`}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
