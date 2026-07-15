"use client";
import { motion } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const meta = [
  { link: "https://saudygestao.com.br", linkLabel: "saudygestao.com.br", wide: true },
  { link: "https://www.kiraclinic.com.br", linkLabel: "kiraclinic.com.br", wide: false },
  { link: null, linkLabel: null, wide: false },
  { link: null, linkLabel: null, wide: false },
  { link: null, linkLabel: null, wide: false },
];

const tags = [
  ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "GCP", "DICOM", "Render", "Multi-tenant"],
  ["Next.js", "TypeScript", "PostgreSQL", "WhatsApp API", "Drizzle ORM"],
  ["React", "TypeScript", "React Query", "Mantine", "Fastify", "PostgreSQL"],
  ["React", "TypeScript", "React Query", "Mantine", "Fastify", "PostgreSQL"],
  ["Flutter", "Dart", "Firebase"],
];

type ProjectItem = {
  eyebrow: string;
  name: string;
  desc: string;
  bullets: readonly string[];
  badge: string | null;
};

function ProjectCard({ p, meta: m, tags: t, delay }: { p: ProjectItem; meta: typeof meta[0]; tags: string[]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -4 }}
      className={`bg-[var(--surface)] border border-[var(--border)] p-8 relative overflow-hidden group transition-all duration-300 hover:border-[rgba(0,180,216,.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,.4),0_0_40px_rgba(0,180,216,.05)] ${m.wide ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-12 md:items-center" : ""}`}
    >
      {/* Top shimmer on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--water2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {p.badge && (
          <span className="absolute top-5 right-5 text-[9px] tracking-[2px] uppercase text-[var(--water2)] border border-[rgba(0,180,216,.3)] px-2.5 py-1">
            {p.badge}
          </span>
        )}
        <p className="text-[10px] tracking-[3px] uppercase text-[var(--muted)] mb-2.5">{p.eyebrow}</p>
        <h3 className="font-[family-name:var(--font-cinzel)] text-xl font-bold text-[var(--text)] mb-3">{p.name}</h3>
        <p className="text-[13px] text-[var(--muted)] leading-[1.8] mb-5">{p.desc}</p>
        <ul className="space-y-2 mb-6">
          {p.bullets.map(b => (
            <li key={b} className="flex items-start gap-2 text-[12.5px] text-[var(--muted)]">
              <ChevronRight size={12} className="text-[var(--water2)] mt-[3px] flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-6">
          {t.map(tag => (
            <span key={tag} className="text-[10px] text-[var(--water3)] border border-[rgba(0,180,216,.2)] px-2.5 py-1 tracking-[.5px]">{tag}</span>
          ))}
        </div>
        {m.link && (
          <a href={m.link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-[var(--water2)] hover:text-[var(--water3)] transition-colors duration-200 group/link">
            <span className="group-hover/link:underline">{m.linkLabel}</span>
            <ExternalLink size={12} />
          </a>
        )}
      </div>

      {/* Wave visual for wide card */}
      {m.wide && (
        <div className="flex items-center justify-center h-48">
          <svg viewBox="0 0 200 180" fill="none" className="w-full h-full opacity-60">
            <path d="M10 130 Q50 90 90 130 Q130 170 170 130 Q190 110 200 100" stroke="rgba(0,180,216,.3)" strokeWidth="2" fill="none"/>
            <path d="M10 110 Q50 70 90 110 Q130 150 170 110 Q190 90 200 80" stroke="rgba(0,180,216,.2)" strokeWidth="1.5" fill="none"/>
            <path d="M10 90 Q50 50 90 90 Q130 130 170 90 Q190 70 200 60" stroke="rgba(0,180,216,.12)" strokeWidth="1" fill="none"/>
            <path d="M10 150 Q50 110 90 150 Q130 190 170 150 Q190 130 200 120" stroke="rgba(0,180,216,.08)" strokeWidth="1" fill="none"/>
            <circle cx="100" cy="90" r="36" stroke="rgba(0,180,216,.12)" strokeWidth="1" fill="none"/>
            <circle cx="100" cy="90" r="22" stroke="rgba(0,180,216,.08)" strokeWidth="1" fill="none"/>
            <text x="100" y="96" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="14" fontWeight="900" fill="rgba(0,180,216,.2)" letterSpacing="3">SAUDY</text>
          </svg>
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-16 bg-[var(--deep)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-5 mb-16"
        >
          <span className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[4px] text-[var(--water2)]">02</span>
          <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-[var(--text)] tracking-wide">{t.projects.title}</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,180,216,.4)] to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.projects.items.map((p, i) => (
            <ProjectCard key={p.name} p={p} meta={meta[i]} tags={tags[i]} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
