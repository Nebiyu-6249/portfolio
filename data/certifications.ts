export type Certification = { slug: string; title: string; issuer: string };

// Kept tight and relevant to full-stack or AI engineering.
// `slug` is the filename to upload the certificate image as:
// drop the file at public/certificates/<slug>.jpg and it appears automatically.
export const certifications: Certification[] = [
  { slug: "llm-engineering", title: "LLM Engineering & Generative AI", issuer: "Udemy" },
  { slug: "genai-software-dev", title: "Generative AI in Software Development", issuer: "Coursera, Amazon" },
  { slug: "genai-intro", title: "Generative AI: Introduction & Applications", issuer: "Coursera, IBM" },
  { slug: "javascript-course", title: "The Complete JavaScript Course", issuer: "Udemy" },
  { slug: "sql", title: "Advanced Relational Database & SQL", issuer: "Coursera" },
  { slug: "uiux", title: "Fundamentals of UI/UX Design", issuer: "Coursera, Microsoft" },
  { slug: "algorithms", title: "Advanced Algorithms & Complexity", issuer: "Coursera, UC San Diego" },
  { slug: "pentesting", title: "Breaking the Web: Web Application Pentesting", issuer: "REDTEAM Hacker Academy" },
];

// Excluded pending verification. Uncomment individual entries to re-add them
// once confirmed. (Huawei ICT Academy certs and the basic-level Python/DataCamp
// courses are intentionally left out for now.)
// export const excludedPendingVerification: Certification[] = [
//   { slug: "huawei-ai-tech", title: "AI Technology & Applications", issuer: "Huawei ICT Academy" },
//   { slug: "huawei-ai-apps", title: "AI & Applications", issuer: "Huawei ICT Academy" },
//   { slug: "huawei-hcia-security", title: "HCIA-Security V4.0", issuer: "Huawei ICT Academy" },
// ];
