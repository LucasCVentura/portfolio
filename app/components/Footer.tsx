"use client";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="px-16 py-6 border-t border-[var(--border)] flex justify-between items-center">
      <p className="text-[12px] text-[var(--muted)]">{t.footer}</p>
      <span className="font-[family-name:var(--font-cinzel)] text-[12px] tracking-[4px] text-[var(--water2)]">LC.</span>
    </footer>
  );
}
