"use client";
import { motion } from "framer-motion";
import { Server, Monitor, Smartphone, Database, Cloud, Bot } from "lucide-react";

const groups = [
  { icon: Server,     name: "Backend",       items: ["Node.js · TypeScript","NestJS · Express","Java","REST · WebSockets"] },
  { icon: Monitor,    name: "Frontend",      items: ["React.js · Next.js","TypeScript","Vue.js","Tailwind CSS"] },
  { icon: Smartphone, name: "Mobile",        items: ["Flutter · Dart","iOS & Android","Firebase"] },
  { icon: Database,   name: "Banco de Dados",items: ["PostgreSQL","MySQL","Firestore"] },
  { icon: Cloud,      name: "Infra & DevOps",items: ["Google Cloud (GCP)","Docker","CI/CD · GitHub Actions","Firebase Hosting"] },
  { icon: Bot,        name: "IA & Automação",items: ["LLMs no desenvolvimento","Reconhecimento facial","Chatbots · WhatsApp API"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 px-6 md:px-16 bg-[var(--navy)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-5 mb-16"
        >
          <span className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[4px] text-[var(--water2)]">03</span>
          <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-[var(--text)] tracking-wide">Stack</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,180,216,.4)] to-transparent" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[var(--surface)] border border-[var(--border)] p-6 relative overflow-hidden group hover:border-[rgba(0,180,216,.25)] transition-colors duration-300"
            >
              {/* Bottom water bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--water1)] to-[var(--water3)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />

              <div className="text-[var(--water2)] opacity-40 group-hover:opacity-70 transition-opacity mb-3">
                <g.icon size={20} />
              </div>
              <p className="font-[family-name:var(--font-cinzel)] text-[11px] tracking-[2px] uppercase text-[var(--water3)] mb-4">{g.name}</p>
              <div className="space-y-2.5">
                {g.items.map(item => (
                  <div key={item} className="flex items-center gap-2.5 text-[12.5px] text-[var(--muted)]">
                    <span className="w-1 h-1 rounded-full bg-[var(--water1)] flex-shrink-0 shadow-[0_0_6px_var(--water1)]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
