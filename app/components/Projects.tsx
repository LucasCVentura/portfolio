"use client";
import { motion } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";

const projects = [
  {
    eyebrow: "SaaS próprio · Fundador",
    name: "Saudy Gestão",
    desc: "Plataforma multi-tenant de RIS/PACS para clínicas de diagnóstico por imagem. Agendamento, laudos, finanças, controle de estoque e integração DICOM. Liderado por mim, desenvolvido em equipe.",
    bullets: [
      "Arquitetura multi-tenant com isolamento completo por clínica",
      "Autenticação facial para controle de acesso a laudos sensíveis",
      "CI/CD automatizado com deploy no Render via GitHub Actions",
      "Painel de BI com indicadores de produção e faturamento",
    ],
    tags: ["Next.js","Node.js","TypeScript","PostgreSQL","GCP","DICOM","Render","Multi-tenant"],
    link: "https://saudygestao.com.br",
    linkLabel: "saudygestao.com.br",
    badge: "Em produção",
    wide: true,
  },
  {
    eyebrow: "SaaS próprio · Fundador",
    name: "Kira",
    desc: "Plataforma de gestão para clínicas de estética com agenda inteligente, prontuários fotográficos e lembretes automáticos via WhatsApp.",
    bullets: [
      "Agenda com notificações automáticas via WhatsApp",
      "Prontuários com histórico, fotos e evolução por cliente",
      "Módulo financeiro com receitas e relatórios",
    ],
    tags: ["Next.js","TypeScript","PostgreSQL","WhatsApp API","Drizzle ORM"],
    link: "https://www.kiraclinic.com.br",
    linkLabel: "kiraclinic.com.br",
    badge: "Em produção",
    wide: false,
  },
  {
    eyebrow: "Cliente · Etech",
    name: "Dashboard CBTEA",
    desc: "Dashboard administrativo com métricas e indicadores para gestão interna da CBTEA, consumindo API própria.",
    bullets: [
      "Visualização de métricas e indicadores em tempo real",
      "Interface construída com Mantine UI e React Query",
      "API backend com Fastify e TypeScript",
    ],
    tags: ["React","TypeScript","React Query","Mantine","Fastify","PostgreSQL"],
    link: null,
    linkLabel: null,
    badge: null,
    wide: false,
  },
  {
    eyebrow: "Cliente · Top Diagnóstico",
    name: "Dashboard Top Diagnóstico",
    desc: "Dashboard de gestão para clínica de diagnóstico por imagem com múltiplas métricas operacionais e financeiras.",
    bullets: [
      "Painéis com indicadores de produção, faturamento e agenda",
      "Filtros por período, modalidade e profissional",
      "API REST com Fastify, TypeScript e PostgreSQL",
    ],
    tags: ["React","TypeScript","React Query","Mantine","Fastify","PostgreSQL"],
    link: null,
    linkLabel: null,
    badge: null,
    wide: false,
  },
  {
    eyebrow: "Cliente · Etech",
    name: "App CBTEA",
    desc: "App mobile para facilitar o cuidado com a saúde de famílias com TEA, desenvolvido para a CBTEA.",
    bullets: [
      "Cadastro com validação de CPF e aceite de biometria",
      "Login seguro integrado ao backend",
      "Interface responsiva para web e mobile",
    ],
    tags: ["Flutter","Dart","Firebase"],
    link: null,
    linkLabel: null,
    badge: null,
    wide: false,
  },
];

function ProjectCard({ p, delay }: { p: typeof projects[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -4 }}
      className={`bg-[var(--surface)] border border-[var(--border)] p-8 relative overflow-hidden group transition-all duration-300 hover:border-[rgba(0,180,216,.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,.4),0_0_40px_rgba(0,180,216,.05)] ${p.wide ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-12 md:items-center" : ""}`}
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
          {p.tags.map(t => (
            <span key={t} className="text-[10px] text-[var(--water3)] border border-[rgba(0,180,216,.2)] px-2.5 py-1 tracking-[.5px]">{t}</span>
          ))}
        </div>
        {p.link && (
          <a href={p.link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-[var(--water2)] hover:text-[var(--water3)] transition-colors duration-200 group/link">
            <span className="group-hover/link:underline">{p.linkLabel}</span>
            <ExternalLink size={12} />
          </a>
        )}
      </div>

      {/* Wave visual for wide card */}
      {p.wide && (
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
          <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-[var(--text)] tracking-wide">Projetos</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,180,216,.4)] to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => <ProjectCard key={p.name} p={p} delay={i * 0.1} />)}
        </div>
      </div>
    </section>
  );
}
