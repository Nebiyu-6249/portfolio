export type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "github" | "site";
};

export type StatChip = { value: string; label: string };

export type CaseSection = { heading: string; body: string[] };

export type CaseStudy = {
  intro: string;
  sections: CaseSection[];
  // An honest note in his own voice: a limitation, a tradeoff, or a disclosure.
  honest?: { heading: string; body: string[] };
  // Which measured-metrics dataset to render on the case study page.
  metrics?: "uaeCopilot" | "fraud";
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  // Large card on the home page.
  featured: boolean;
  // Has a dedicated /projects/[slug] case study page.
  hasCaseStudy: boolean;
  status: { label: string; tone: "live" | "complete" | "internship" };
  tech: string[];
  links: ProjectLink[];
  // Card copy for the home page.
  summary: string;
  // Small preview chips on featured cards.
  preview?: StatChip[];
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "yenetta",
    name: "Yenetta",
    tagline:
      "An AI study companion for Ethiopian Grade 9-12 students, grounded in the actual Ministry of Education curriculum and past national exam papers, not generic internet knowledge.",
    featured: true,
    hasCaseStudy: true,
    status: { label: "M0-M7 complete", tone: "complete" },
    tech: [
      "Turborepo / pnpm",
      "NestJS",
      "PostgreSQL 16 + pgvector",
      "Redis + BullMQ",
      "Next.js",
      "React Native (Expo)",
      "SQLite (offline)",
      "OpenAI",
      "Chapa",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Nebiyu-6249/yenetta", kind: "github" },
    ],
    summary:
      "A chat-first RAG tutor where every answer cites the actual curriculum or past-paper source, and says “not in the curriculum yet” instead of guessing. Built around that core: study tools, timed past-exam practice, adaptive study plans, progress analytics, gamification, and Amharic support. Ships as an offline-first Android app alongside a web app.",
    preview: [
      { value: "M0-M7", label: "all milestones complete" },
      { value: "Offline", label: "first Android + web" },
      { value: "Amharic", label: "language support" },
    ],
    caseStudy: {
      intro:
        "Yenetta is a study companion for Ethiopian high schoolers in Grades 9 through 12. The core is a chat-first RAG tutor: every answer cites the actual curriculum or a past national exam paper, and when nothing in the corpus supports a question it says “not in the curriculum yet” rather than guessing. Everything else is built around that grounded core.",
      sections: [
        {
          heading: "What it does",
          body: [
            "Structured study tools (summaries, notes, flashcards, and spaced-repetition review), timed past-exam practice with graded explanations, personalized study plans that adapt over time, and progress analytics with weak-area detection.",
            "Streaks, XP, and opt-in leaderboards for motivation, plus Amharic-language support so a student can ask it to “explain in Amharic.”",
          ],
        },
        {
          heading: "Cost-controlled AI",
          body: [
            "Every model call is routed to the cheapest capable model, cached, and gated by per-tier quotas. Timed past-exam practice is pure retrieval, so it costs nothing in AI spend. That keeps the free tier viable by default and the premium tier cheap to run.",
          ],
        },
        {
          heading: "Data-residency-aware architecture",
          body: [
            "Personal data and the curriculum embeddings live in separate databases. If personal data needs to move to an in-country host, that happens without re-architecting the system.",
            "A shared design-token package keeps the brand identical across the web app and the native mobile app.",
          ],
        },
        {
          heading: "Offline first",
          body: [
            "The app ships as an offline-first Android build with local SQLite for study in low-connectivity areas, alongside the web app. Chapa handles payment for the premium tier; the free tier is the default.",
          ],
        },
        {
          heading: "Status",
          body: [
            "All milestones M0 through M7 are complete, including the phase-2 additions: long-term memory, personalized plans, deep analytics, gamification, and Amharic i18n. No public hosted demo is on file yet, so the repository is the reference.",
          ],
        },
      ],
    },
  },
  {
    slug: "uae-compliance-copilot",
    name: "UAE Compliance Copilot",
    tagline:
      "A RAG assistant for UAE VAT, corporate tax, and labour law that cites the exact article and page for every claim, and refuses rather than guesses when a question falls outside what it knows.",
    featured: true,
    hasCaseStudy: true,
    status: { label: "Complete, CI-gated eval", tone: "complete" },
    tech: [
      "FastAPI",
      "LangGraph",
      "PostgreSQL + pgvector",
      "BM25 hybrid retrieval",
      "Next.js",
      "Docker Compose",
      "GitHub Actions",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Nebiyu-6249/UAE-complience-copilot",
        kind: "github",
      },
    ],
    summary:
      "The evaluation and observability layer is the point, not the chat demo. A LangGraph state machine runs hybrid retrieval, reranking, a grounding check, and a faithfulness guardrail that verifies every citation in code. Measured against a hand-written 70-question golden set, with a CI gate that fails the build on regression.",
    preview: [
      { value: "97.3%", label: "recall@k" },
      { value: "100%", label: "faithfulness pass" },
      { value: "0.0%", label: "hallucinated citations" },
    ],
    caseStudy: {
      intro:
        "A grounded chat UI is table stakes. Knowing whether the answers are actually correct is what makes a RAG system trustworthy in a regulatory domain, so the evaluation and observability layer is the point of this project, not the chat demo.",
      metrics: "uaeCopilot",
      sections: [
        {
          heading: "The pipeline",
          body: [
            "The architecture is a LangGraph state machine: analyze the question (single vs multi-part), run hybrid retrieval (vector search plus BM25, fused with reciprocal rank fusion), rerank, run a grounding check, generate a structured answer, then run a faithfulness guardrail that verifies every citation actually traces back to a retrieved chunk, in code, not just in the prompt.",
            "On a guardrail failure it regenerates once with a stricter prompt, then downgrades to low confidence rather than shipping an unverified claim.",
          ],
        },
        {
          heading: "How it was measured",
          body: [
            "Evaluated against a hand-written 70-question golden set: 56 in-corpus questions across VAT, corporate tax, and labour law, and 14 deliberately out-of-corpus to test refusal.",
            "A GitHub Actions CI gate re-runs the full eval on every relevant push and fails the build if any of these numbers regress past a set floor. The metrics below are not a one-time screenshot; they are checked on every change.",
          ],
        },
        {
          heading: "Runs offline, swaps in for production",
          body: [
            "The system runs fully offline by default with a deterministic fallback and no API key required, with Claude as the pluggable production LLM. Every external dependency swaps in through a config change, not a rewrite.",
          ],
        },
      ],
      honest: {
        heading: "About the corpus",
        body: [
          "The reference corpus is a transparently disclosed, faithful reconstruction of the real UAE instruments. It was built in a network-restricted environment that blocked the government sites directly, so it reproduces the real article numbers and thresholds rather than inventing anything, and the actual official sources are documented for anyone running it with network access.",
        ],
      },
    },
  },
  {
    slug: "fraud-detection",
    name: "Fraud Detection",
    tagline:
      "Real-time card-fraud detection on a genuinely imbalanced dataset (1 fraud in 578 transactions), streamed through a Kafka-compatible broker, scored in milliseconds, then handed to an AI agent that writes analyst-style case notes.",
    featured: true,
    hasCaseStudy: true,
    status: { label: "Complete, measured", tone: "complete" },
    tech: [
      "FastAPI",
      "PyTorch autoencoder",
      "Isolation Forest",
      "SHAP",
      "Redpanda (Kafka-compatible)",
      "PostgreSQL",
      "LangGraph + Claude",
      "Next.js",
      "Docker Compose",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Nebiyu-6249/fraud-detection",
        kind: "github",
      },
    ],
    summary:
      "Transactions stream through Redpanda; an autoencoder scores each in a few milliseconds with a SHAP explanation; a separate LangGraph agent then writes a structured case note on every medium or high-risk transaction, citing only real evidence. The scoring path never waits on the LLM.",
    preview: [
      { value: "0.64%", label: "false-positive rate" },
      { value: "69%", label: "recall" },
      { value: "2.4ms", label: "scoring latency" },
    ],
    caseStudy: {
      intro:
        "Transactions stream through Redpanda. An autoencoder anomaly model, trained only on normal transactions so it degrades gracefully to fraud patterns it has never seen, scores each one in a few milliseconds with a SHAP explanation attached. Results land in Postgres and a live dashboard.",
      metrics: "fraud",
      sections: [
        {
          heading: "The investigation agent",
          body: [
            "Every medium or high-risk transaction is picked up by a separate LangGraph agent worker. It pulls real account history, merchant risk data, and deterministic rule flags (amount vs rolling average, unusual hour, high-risk merchant category, card-testing pattern) before an LLM writes a structured case note that cites only that evidence.",
            "If the LLM call fails, a deterministic rule-based fallback takes over, so an outage never breaks the pipeline.",
          ],
        },
        {
          heading: "Scoring never waits on the LLM",
          body: [
            "Investigation runs as an independent consumer group, so its latency cannot touch live scoring latency. The scoring path stays fast no matter what the agent is doing.",
          ],
        },
        {
          heading: "How it was measured",
          body: [
            "Evaluated with a strict time-ordered train, threshold, and test split, not randomly shuffled, to avoid training on the future.",
            "A classical Isolation Forest is trained and kept in the same artifact, not as the primary scorer but as a fast tree-based SHAP surrogate explainer, since exact SHAP on the autoencoder would cost hundreds of forward passes per request.",
          ],
        },
      ],
      honest: {
        heading: "The honest ceiling",
        body: [
          "PR-AUC 0.164 is the real ceiling of unsupervised anomaly detection on this problem. A supervised model with labels would score far higher, around 0.8, but it has nothing to say about fraud patterns it has not seen and depends on labels that arrive weeks late from real chargebacks.",
          "Stating that tradeoff plainly is more useful than only showing the win.",
        ],
      },
    },
  },
  {
    slug: "aibill",
    name: "AiBill",
    tagline:
      "A UAE business texts a description of what they sold on WhatsApp, and gets back a VAT-compliant, branded PDF invoice.",
    featured: true,
    hasCaseStudy: false,
    status: { label: "Live in production", tone: "live" },
    tech: [
      "Python",
      "WhatsApp Business API",
      "OpenAI",
      "PostgreSQL",
      "AWS (Ubuntu / Nginx)",
      "Fernet encryption",
    ],
    links: [
      {
        label: "Live walkthrough",
        href: "https://nomatech-ai-solutions.ae",
        kind: "live",
      },
    ],
    summary:
      "Multi-tenant, bilingual (English and Arabic) WhatsApp Business API assistant built on OpenAI, with tenant data in PostgreSQL (Alembic-migrated) under Fernet encryption, deployed on AWS with automated HTTPS renewal. Live in production and generating revenue right now for NomaTech clients: a 14-day free trial, then AED 99 per month.",
    preview: [
      { value: "Live", label: "in production" },
      { value: "AED 99", label: "per month" },
      { value: "EN / AR", label: "bilingual" },
    ],
  },
  {
    slug: "hotel-ms",
    name: "Hotel Transylvania",
    tagline:
      "A complete boutique-hotel booking site and back office, from the guest booking flow to the operations team's tape chart.",
    featured: false,
    hasCaseStudy: false,
    status: { label: "Live", tone: "live" },
    tech: [
      "Next.js 14",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Stripe",
      "Netlify",
    ],
    links: [
      { label: "Live site", href: "https://hotelstransylva.netlify.app", kind: "live" },
      { label: "GitHub", href: "https://github.com/Nebiyu-6249/Hotel-MS", kind: "github" },
    ],
    summary:
      "Public site for a restored 1867 castle hotel in Brasov County, Romania: five room types with live availability and Stripe booking. The admin side is a full property-management system with a visual tape chart, room and rate management, guest CRM, a housekeeping board, review moderation, and reporting with charts and CSV export.",
  },
  {
    slug: "fleuraya",
    name: "Fleuraya",
    tagline:
      "A bilingual Dubai flower-shop storefront with same-day delivery, built end to end with its own back office.",
    featured: false,
    hasCaseStudy: false,
    status: { label: "Live", tone: "live" },
    tech: ["Next.js 14", "TypeScript", "Tailwind", "Zustand", "Netlify"],
    links: [
      { label: "Live site", href: "https://fleuraya-flowers.netlify.app", kind: "live" },
      { label: "GitHub", href: "https://github.com/Nebiyu-6249/FlowerShop", kind: "github" },
    ],
    summary:
      "A full e-commerce storefront: occasion-based catalog, cart, and checkout with multiple UAE payment methods, plus customer accounts with loyalty points. The admin panel covers products, orders with print-ready delivery slips, customers, promo codes, and delivery zones. Bilingual English and Arabic with RTL support and AED pricing throughout.",
  },
  {
    slug: "nomatech-website",
    name: "NomaTech AI Solutions",
    tagline:
      "The production marketing site for the AI company he works for, designed, built, and deployed end to end, including the infrastructure behind it.",
    featured: false,
    hasCaseStudy: false,
    status: { label: "Live", tone: "live" },
    tech: ["Config-driven HTML / CSS / JS", "Netlify", "DNS + email infrastructure"],
    links: [
      { label: "Live site", href: "https://nomatech-ai-solutions.ae", kind: "live" },
    ],
    summary:
      "Config-driven, so a new AI product is added by editing one source-of-truth array with no layout changes. Full SEO package (Open Graph, schema.org structured data, sitemap, favicons). The deployment included a DNS migration onto Netlify DNS and Google Workspace email (MX, SPF, DMARC) for the domain.",
  },
  {
    slug: "rag-chatbot",
    name: "RAG Chatbot",
    tagline:
      "A retrieval-grounded chatbot webhook connecting Dialogflow to an OpenAI retrieval pipeline, built during his AMTEC Links internship.",
    featured: false,
    hasCaseStudy: false,
    status: { label: "Internship build", tone: "internship" },
    tech: ["Node.js", "OpenAI API", "Dialogflow", "Embedding-based semantic search"],
    links: [
      { label: "GitHub", href: "https://github.com/Nebiyu-6249/rag-chatbot", kind: "github" },
    ],
    summary:
      "A custom document chunking and embedding pipeline for semantic search, with a webhook service that retrieves relevant context before generating an answer instead of relying on the model's general knowledge, which cuts hallucination versus a bare LLM chatbot. Modular by design: the data source, the model, and the chat platform each swap independently.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const caseStudySlugs = projects
  .filter((p) => p.hasCaseStudy)
  .map((p) => p.slug);
