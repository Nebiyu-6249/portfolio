export type Certification = { title: string; issuer: string };

// Kept tight and relevant to full-stack or AI engineering.
export const certifications: Certification[] = [
  { title: "LLM Engineering & Generative AI", issuer: "Udemy" },
  { title: "Generative AI in Software Development", issuer: "Coursera, Amazon" },
  { title: "Generative AI: Introduction & Applications", issuer: "Coursera, IBM" },
  { title: "The Complete JavaScript Course", issuer: "Udemy" },
  { title: "Advanced Relational Database & SQL", issuer: "Coursera" },
  { title: "Fundamentals of UI/UX Design", issuer: "Coursera, Microsoft" },
  { title: "Advanced Algorithms & Complexity", issuer: "Coursera, UC San Diego" },
  {
    title: "Breaking the Web: Web Application Pentesting",
    issuer: "REDTEAM Hacker Academy",
  },
];

// Excluded pending verification. Uncomment individual entries to re-add them
// once confirmed. (Huawei ICT Academy certs and the basic-level Python/DataCamp
// courses are intentionally left out for now.)
// export const excludedPendingVerification: Certification[] = [
//   { title: "AI Technology & Applications", issuer: "Huawei ICT Academy" },
//   { title: "AI & Applications", issuer: "Huawei ICT Academy" },
//   { title: "HCIA-Security V4.0", issuer: "Huawei ICT Academy" },
// ];
