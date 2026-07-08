import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Contact, Footer } from "@/components/Contact";
import { site, siteUrl } from "@/data/site";

// Person structured data so the site is legible to search engines.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: siteUrl,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ras Al Khaimah",
    addressCountry: "AE",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: site.education.institution,
  },
  knowsAbout: [
    "Retrieval-Augmented Generation",
    "AI Agents",
    "LLM Evaluation",
    "Full-Stack Web Development",
  ],
  sameAs: [site.links.github, site.links.linkedin],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
