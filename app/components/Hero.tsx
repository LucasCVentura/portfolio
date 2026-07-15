"use client";
import { motion } from "framer-motion";
import WaterCanvas from "./WaterCanvas";
import { useLanguage } from "../i18n/LanguageContext";

import type { Transition } from "framer-motion";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" } as Transition,
});

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">

      {/* SVG waves — full background */}
      <WaterCanvas />

      {/* Dark overlay so text stays legível */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020b18]/60 via-[#020b18]/30 to-[#020b18]/70 pointer-events-none" />

      {/* Content — full width, centered */}
      <div className="relative z-10 px-6 md:px-8 max-w-4xl w-full mx-auto">
        <motion.p {...fade(0.2)} className="text-[10px] tracking-[5px] uppercase text-[var(--water3)] mb-4">
          {t.hero.kicker}
        </motion.p>

        <motion.h1 {...fade(0.4)}
          className="font-[family-name:var(--font-cinzel)] font-black leading-[1.05] mb-6"
          style={{ fontSize: "clamp(52px,9vw,110px)" }}>
          <span className="text-[var(--text)]">Lucas </span>
          <span style={{
            color: "transparent",
            WebkitTextStroke: "2px var(--water2)",
            filter: "drop-shadow(0 0 30px rgba(0,180,216,.6))",
          }}>
            Coelho
          </span>
        </motion.h1>

        <motion.p {...fade(0.55)} className="text-[14px] text-[var(--muted)] tracking-wide mb-6">
          {t.hero.subtitle} &nbsp;|&nbsp; <span className="text-[var(--gold)]">{t.hero.openTo}</span>
        </motion.p>

        <motion.p {...fade(0.7)} className="text-[15px] text-[var(--muted)] leading-[1.9] max-w-[500px] mx-auto mb-12">
          {t.hero.paragraph}
        </motion.p>

        <motion.div {...fade(0.9)} className="flex gap-4 flex-wrap justify-center">
          <a href="#projects"
            className="btn-water clip-blade px-10 py-3.5 text-[11px] font-semibold tracking-[2px] uppercase text-[var(--deep)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,180,216,.5)] hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, var(--water1), var(--water2))" }}>
            {t.hero.ctaProjects}
          </a>
          <a href="#contact"
            className="clip-blade px-10 py-3.5 text-[11px] font-semibold tracking-[2px] uppercase text-[var(--water3)] border border-[rgba(0,180,216,.35)] transition-all duration-300 hover:bg-[rgba(0,180,216,.08)] hover:border-[var(--water2)]">
            {t.hero.ctaContact}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] tracking-[4px] uppercase text-[var(--muted)]">{t.hero.scroll}</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-[var(--water2)] to-transparent rounded-full drop-fall" />
      </motion.div>
    </section>
  );
}
