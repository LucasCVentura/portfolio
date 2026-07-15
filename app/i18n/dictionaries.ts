export type Locale = "pt" | "en";

export const dictionaries = {
  pt: {
    nav: {
      links: [
        { href: "#about", label: "Sobre" },
        { href: "#projects", label: "Projetos" },
        { href: "#skills", label: "Stack" },
        { href: "#contact", label: "Contato" },
      ],
    },
    hero: {
      kicker: "Full Stack Developer · Pleno · Node.js · React · TypeScript",
      subtitle: "Desenvolvedor Full Stack · Pleno",
      openTo: "Aberto a CLT e PJ",
      paragraph:
        "Quase 5 anos construindo sistemas complexos do zero até produção. Dois SaaS próprios no ar. Full cycle: escopo → deploy.",
      ctaProjects: "Ver projetos",
      ctaContact: "Fala comigo",
      scroll: "scroll",
    },
    about: {
      title: "Sobre",
      stats: [
        { num: "5", label: "Anos de experiência", sub: "Sistemas de alta complexidade" },
        { num: "2", label: "SaaS em produção", sub: "Saudy Gestão · Kira" },
        { num: "FC", label: "Full Cycle", sub: "Escopo → produção" },
        { num: "∞", label: "Vontade de construir", sub: "E café. Muito café." },
      ],
      paragraphs: [
        "Comecei como estagiário na Medilab Sistemas em 2021 e cresci entregando sistemas clínicos de alta complexidade — teleconsulta em tempo real, integrações com convênios via TISS/TUSS e API unificada para múltiplos sistemas PACS.",
        "Hoje lidero dois produtos próprios: a Kira (gestão para clínicas de estética), já com clínicas ativas e cliente pagante, e a Saudy Gestão (RIS/PACS para clínicas de imagem), liderada em equipe e em fase final de captação dos primeiros clientes.",
        "Trabalho full cycle — do levantamento de requisitos ao deploy em produção. Uso IA ativamente no fluxo de desenvolvimento para entregar mais, com mais qualidade.",
      ],
      quote: "A água não força. Ela encontra o caminho.",
      quoteAuthor: "— Tomioka Giyu, Pilar da Água",
    },
    skills: {
      title: "Stack",
      groups: [
        { name: "Backend", items: ["Node.js · TypeScript", "NestJS · Express", "Java", "REST · WebSockets"] },
        { name: "Frontend", items: ["React.js · Next.js", "TypeScript", "Vue.js", "Tailwind CSS"] },
        { name: "Mobile", items: ["Flutter · Dart", "iOS & Android", "Firebase"] },
        { name: "Banco de Dados", items: ["PostgreSQL", "MySQL", "Firestore"] },
        { name: "Infra & DevOps", items: ["Google Cloud (GCP)", "Docker", "CI/CD · GitHub Actions", "Firebase Hosting"] },
        { name: "IA & Automação", items: ["LLMs no desenvolvimento", "Reconhecimento facial", "Chatbots · WhatsApp API"] },
      ],
    },
    projects: {
      title: "Projetos",
      items: [
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
          badge: "Em produção",
        },
        {
          eyebrow: "SaaS próprio · Fundador",
          name: "Kira",
          desc: "Plataforma de gestão para clínicas de estética com agenda inteligente, prontuários fotográficos e lembretes automáticos via WhatsApp. Hoje com 7 clínicas cadastradas e cliente pagante ativo.",
          bullets: [
            "Agenda com notificações automáticas via WhatsApp",
            "Prontuários com histórico, fotos e evolução por cliente",
            "Módulo financeiro com receitas e relatórios",
          ],
          badge: "Em produção",
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
          badge: null,
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
          badge: null,
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
          badge: null,
        },
      ],
    },
    contact: {
      title: "Contato",
      eyebrow: "Entre em Contato",
      heading1: "Vamos construir",
      heading2: "algo juntos?",
      paragraph: "Aberto a oportunidades CLT e PJ, remoto ou híbrido.",
      paragraph2: "Me manda uma mensagem — respondo rápido.",
      download: "Baixar currículo",
      resumeHref: "/curriculo_lucas_coelho.pdf",
    },
    footer: "© 2026 Lucas Coelho · Construído com TypeScript e muito café.",
  },
  en: {
    nav: {
      links: [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Stack" },
        { href: "#contact", label: "Contact" },
      ],
    },
    hero: {
      kicker: "Full Stack Developer · Mid-level · Node.js · React · TypeScript",
      subtitle: "Full Stack Developer · Mid-level",
      openTo: "Open to full-time & contract",
      paragraph:
        "Almost 5 years building complex systems from scratch to production. Two of my own SaaS live. Full cycle: scope → deploy.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      scroll: "scroll",
    },
    about: {
      title: "About",
      stats: [
        { num: "5", label: "Years of experience", sub: "High-complexity systems" },
        { num: "2", label: "SaaS in production", sub: "Saudy Gestão · Kira" },
        { num: "FC", label: "Full Cycle", sub: "Scope → production" },
        { num: "∞", label: "Drive to build", sub: "And coffee. Lots of coffee." },
      ],
      paragraphs: [
        "I started as an intern at Medilab Sistemas in 2021 and grew into delivering high-complexity clinical systems — real-time teleconsultation, health insurance integrations via TISS/TUSS, and a unified API for multiple PACS systems.",
        "Today I lead two products of my own: Kira (management platform for aesthetics clinics), already with active clinics and a paying customer, and Saudy Gestão (RIS/PACS for imaging clinics), led with a team and in the final stage of onboarding its first clients.",
        "I work full cycle — from requirements gathering to production deployment. I use AI actively in my dev workflow to ship more, with more quality.",
      ],
      quote: "Water doesn't force. It finds its way.",
      quoteAuthor: "— Tomioka Giyu, Water Hashira",
    },
    skills: {
      title: "Stack",
      groups: [
        { name: "Backend", items: ["Node.js · TypeScript", "NestJS · Express", "Java", "REST · WebSockets"] },
        { name: "Frontend", items: ["React.js · Next.js", "TypeScript", "Vue.js", "Tailwind CSS"] },
        { name: "Mobile", items: ["Flutter · Dart", "iOS & Android", "Firebase"] },
        { name: "Databases", items: ["PostgreSQL", "MySQL", "Firestore"] },
        { name: "Infra & DevOps", items: ["Google Cloud (GCP)", "Docker", "CI/CD · GitHub Actions", "Firebase Hosting"] },
        { name: "AI & Automation", items: ["LLMs in development", "Facial recognition", "Chatbots · WhatsApp API"] },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          eyebrow: "Own SaaS · Founder",
          name: "Saudy Gestão",
          desc: "Multi-tenant RIS/PACS platform for diagnostic imaging clinics. Scheduling, reports, finance, inventory control and DICOM integration. Led by me, built with a team.",
          bullets: [
            "Multi-tenant architecture with full per-clinic isolation",
            "Facial authentication for access control on sensitive reports",
            "Automated CI/CD with deployment to Render via GitHub Actions",
            "BI dashboard with production and revenue indicators",
          ],
          badge: "In production",
        },
        {
          eyebrow: "Own SaaS · Founder",
          name: "Kira",
          desc: "Management platform for aesthetics clinics with smart scheduling, photographic patient records and automatic WhatsApp reminders. Now with 7 registered clinics and an active paying customer.",
          bullets: [
            "Scheduling with automatic WhatsApp notifications",
            "Patient records with history, photos and progress per client",
            "Financial module with revenue and reports",
          ],
          badge: "In production",
        },
        {
          eyebrow: "Client · Etech",
          name: "CBTEA Dashboard",
          desc: "Administrative dashboard with metrics and indicators for CBTEA's internal management, consuming a custom API.",
          bullets: [
            "Real-time metrics and indicators visualization",
            "Interface built with Mantine UI and React Query",
            "Backend API with Fastify and TypeScript",
          ],
          badge: null,
        },
        {
          eyebrow: "Client · Top Diagnóstico",
          name: "Top Diagnóstico Dashboard",
          desc: "Management dashboard for a diagnostic imaging clinic with multiple operational and financial metrics.",
          bullets: [
            "Dashboards with production, revenue and schedule indicators",
            "Filters by period, modality and professional",
            "REST API with Fastify, TypeScript and PostgreSQL",
          ],
          badge: null,
        },
        {
          eyebrow: "Client · Etech",
          name: "CBTEA App",
          desc: "Mobile app to make healthcare easier for families with autism spectrum needs, built for CBTEA.",
          bullets: [
            "Sign-up with CPF validation and biometric consent",
            "Secure login integrated with the backend",
            "Responsive interface for web and mobile",
          ],
          badge: null,
        },
      ],
    },
    contact: {
      title: "Contact",
      eyebrow: "Get in Touch",
      heading1: "Let's build",
      heading2: "something together?",
      paragraph: "Open to full-time and contract opportunities, remote or hybrid.",
      paragraph2: "Send me a message — I reply fast.",
      download: "Download resume",
      resumeHref: "/resume_lucas_coelho_en.pdf",
    },
    footer: "© 2026 Lucas Coelho · Built with TypeScript and lots of coffee.",
  },
} as const;

export const hasLocale = (locale: string): locale is Locale => locale in dictionaries;
