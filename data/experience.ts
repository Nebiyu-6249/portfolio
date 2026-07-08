export type Experience = {
  role: string;
  org: string;
  location?: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

// Most recent first. Tight and outcome-focused.
export const experience: Experience[] = [
  {
    role: "AI Developer",
    org: "NomaTech AI Solutions",
    location: "Dubai, UAE",
    period: "Aug 2025 - Present",
    current: true,
    bullets: [
      "Designed and built AiBill, a production multi-tenant WhatsApp chatbot that generates VAT-compliant branded PDF invoices for multiple UAE businesses.",
      "Wrote the backend in Python on the WhatsApp Business API, OpenAI, and PostgreSQL with Alembic migrations, supporting bilingual English and Arabic invoicing.",
      "Deployed and maintain it on AWS (Ubuntu, Nginx, automated HTTPS) with Fernet encryption on tenant data, and shipped the company website end to end including DNS migration, Google Workspace email, and SEO.",
    ],
  },
  {
    role: "AI Research Project Contributor",
    org: "AURAK ATAI Center & RAK Statistics Center",
    period: "Jan 2026 - Present",
    current: true,
    bullets: [
      "Contributing to an applied AI research project on real datasets, including Survey Quest, a gamified survey tool that turns standard questionnaires into a short XP, levels, and badges experience to cut drop-off.",
      "Built the project's Docker and deployment setup so it runs identically for every reviewer.",
    ],
  },
  {
    role: "Research Assistant",
    org: "AURAK",
    period: "Dec 2025 - Present",
    current: true,
    bullets: [
      'Co-authoring a research paper on AI in education, "Cognitive Autonomy in AI Tutoring Predicts Exam Success": literature review, citation formatting, and statistical analysis support.',
    ],
  },
  {
    role: "Web Developer & Technical Advisor",
    org: "Sofia Sands Realty",
    location: "Ras Al Khaimah, UAE",
    period: "Oct - Dec 2025",
    bullets: [
      "Advised on digital presence strategy, technology adoption, and process improvements.",
    ],
  },
  {
    role: "AI Developer, Intern",
    org: "AMTEC Links International FZ-LLC",
    location: "UAE",
    period: "May - Jul 2025",
    bullets: [
      "Built a production RAG chatbot connecting Dialogflow to a vector retrieval layer and an LLM response pipeline for knowledge-grounded answers, delivered from architecture through deployment.",
    ],
  },
  {
    role: "Freelance AI & Web Developer",
    org: "Upwork, Fiverr",
    period: "Sep 2023 - Present",
    current: true,
    bullets: [
      "Deliver AI chatbots, AI agents, and web applications for international clients.",
      "Built a 24/7 AI concierge assistant for a US hospitality business that handles guest inquiries, booking help, and escalation to a human, using OpenAI and LangChain with RAG.",
    ],
  },
];
