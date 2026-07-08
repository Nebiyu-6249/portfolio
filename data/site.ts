export const site = {
  name: "Nebiyu Elias Gemedu",
  shortName: "Nebiyu Elias",
  role: "Full-Stack & AI Engineer",
  location: "Ras Al Khaimah, UAE",
  // The hero thesis. His real differentiator: he measures whether the AI works.
  thesis:
    "I build production RAG pipelines, AI agents, and full-stack apps, and I measure whether they actually work instead of shipping a demo that only looks good in a screenshot.",
  email: "nebaelias95@gmail.com",
  links: {
    github: "https://github.com/Nebiyu-6249",
    linkedin: "https://linkedin.com/in/nebiyu-elias95",
  },
  // Phone is intentionally left off the public page to avoid scraper spam.
  // Add it here only if Nebiyu asks for it to be visible.
  phone: null as string | null,
  // Drop a resume PDF into /public and set this path to enable the download button.
  // The PDF must use the same completed-education framing as this site (no grades, no dates).
  resumePath: null as string | null,
  education: {
    degree: "BSc Computer Science",
    institution: "American University of Ras Al Khaimah (AURAK)",
  },
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nebiyu-elias.netlify.app";
