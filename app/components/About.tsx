"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Layers, Zap, Clock } from "lucide-react";

const stats = [
  { num: "5",    label: "Anos de experiência",  sub: "Sistemas de alta complexidade", icon: Clock },
  { num: "2",    label: "SaaS em produção",      sub: "Saudy Gestão · Kira",          icon: Layers },
  { num: "FC",   label: "Full Cycle",            sub: "Escopo → produção",             icon: Briefcase },
  { num: "∞",    label: "Vontade de construir",  sub: "E café. Muito café.",           icon: Zap },
];

function StatCard({ num, label, sub, icon: Icon, delay }: typeof stats[0] & { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ x: 6 }}
      className="bg-[var(--surface)] border border-[var(--border)] p-5 flex items-center gap-5 relative overflow-hidden group"
    >
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[var(--water1)] to-[var(--water3)]" />
      <div className="text-[var(--water2)] opacity-30 group-hover:opacity-60 transition-opacity">
        <Icon size={20} />
      </div>
      <div>
        <div className="font-[family-name:var(--font-cinzel)] text-3xl font-black text-[var(--water2)] leading-none mb-1">{num}</div>
        <div className="text-[13px] text-[var(--text)] font-medium">{label}</div>
        <div className="text-[11px] text-[var(--muted)] mt-0.5">{sub}</div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-16 bg-[var(--navy)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-5 mb-16"
        >
          <span className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[4px] text-[var(--water2)]">01</span>
          <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-[var(--text)] tracking-wide">Sobre</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,180,216,.4)] to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-20 items-center">
          <div className="space-y-5">
            {[
              <>Comecei como estagiário na <strong className="text-[var(--text)]">Medilab Sistemas</strong> em 2021 e cresci entregando sistemas clínicos de alta complexidade — teleconsulta em tempo real, integrações com convênios via <span className="text-[var(--water3)]">TISS/TUSS</span> e API unificada para múltiplos sistemas PACS.</>,
              <>Em 2026 lancei dois produtos próprios: a <span className="text-[var(--water3)]">Kira</span> (gestão para clínicas de estética), já com usuários ativos, e a <span className="text-[var(--water3)]">Saudy Gestão</span> (RIS/PACS para clínicas de imagem), liderado em equipe e em fase final de captação dos primeiros clientes.</>,
              <>Trabalho <strong className="text-[var(--text)]">full cycle</strong> — do levantamento de requisitos ao deploy em produção. Uso IA ativamente no fluxo de desenvolvimento para entregar mais, com mais qualidade.</>,
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-[14.5px] text-[var(--muted)] leading-[2]"
              >
                {text}
              </motion.p>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 pl-5 border-l-2 border-[var(--water2)] bg-[rgba(0,180,216,.04)] py-4 pr-4"
            >
              <p className="text-[13px] text-[var(--water3)] italic leading-[1.7]">
                "A água não força. Ela encontra o caminho."
              </p>
              <cite className="text-[10px] tracking-[2px] uppercase text-[var(--muted)] not-italic mt-2 block">
                — Tomioka Giyu, Pilar da Água
              </cite>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            {stats.map((s, i) => <StatCard key={s.label} {...s} delay={i * 0.1} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
