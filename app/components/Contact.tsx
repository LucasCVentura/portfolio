"use client";
import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";

const LinkedInIcon = () => (
  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.842L.057 23.535a.75.75 0 0 0 .908.908l5.694-1.453A11.934 11.934 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 0 1-4.964-1.362l-.355-.212-3.683.940.956-3.594-.232-.368A9.716 9.716 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
  </svg>
);

const links = [
  { href: "mailto:dev.lucasc@gmail.com",                    Icon: Mail,          label: "dev.lucasc@gmail.com" },
  { href: "https://wa.me/5521991609030",                    Icon: WhatsAppIcon,  label: "(21) 99160-9030" },
  { href: "https://linkedin.com/in/lucas-coelho-9b297416a", Icon: LinkedInIcon,  label: "LinkedIn" },
  { href: "https://github.com/LucasCVentura",               Icon: GitHubIcon,    label: "GitHub" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-16 bg-[var(--deep)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-5 mb-16"
        >
          <span className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[4px] text-[var(--water2)]">04</span>
          <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-[var(--text)] tracking-wide">Contato</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,180,216,.4)] to-transparent" />
        </motion.div>

        <div className="max-w-xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[6px] uppercase text-[var(--water2)] mb-4 glow-pulse"
          >
            Entre em Contato
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-cinzel)] font-black leading-[1.15] mb-6"
            style={{ fontSize: "clamp(30px,5vw,50px)" }}
          >
            Vamos construir{" "}
            <span style={{
              color: "transparent",
              WebkitTextStroke: "1px var(--water2)",
              filter: "drop-shadow(0 0 16px rgba(0,180,216,.4))",
            }}>
              algo juntos?
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] text-[var(--muted)] leading-[1.9] mb-12"
          >
            Aberto a oportunidades CLT e PJ, remoto ou híbrido.<br />
            Me manda uma mensagem — respondo rápido.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4 flex-wrap mb-10"
          >
            {links.map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-3 bg-[var(--surface)] border border-[var(--border)] text-[12px] text-[var(--muted)] hover:text-[var(--water3)] hover:border-[rgba(0,180,216,.35)] hover:bg-[rgba(0,180,216,.05)] transition-all duration-300">
                <l.Icon />
                {l.label}
              </a>
            ))}
          </motion.div>

          <motion.a
            href="/curriculo.pdf"
            download
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(0,180,216,.4)" }}
            className="inline-flex items-center gap-3 clip-blade px-10 py-4 text-[11px] font-semibold tracking-[2px] uppercase text-[var(--deep)]"
            style={{ background: "linear-gradient(135deg, var(--water1), var(--water2))" }}
          >
            <Download size={14} />
            Baixar currículo
          </motion.a>
        </div>
      </div>
    </section>
  );
}
