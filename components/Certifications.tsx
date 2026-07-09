import { certifications } from "@/data/certifications";
import { Reveal, RevealGroup, RevealItem } from "./motion";
import { SectionHeader } from "./SectionHeader";
import { CertCard } from "./CertCard";

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-edge">
        <Reveal>
          <SectionHeader
            variant="box"
            kicker="Credentials"
            title="Certifications & Courses"
            description={`${certifications.length} credentials across AI engineering and full-stack development.`}
          />
        </Reveal>

        <RevealGroup className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <RevealItem key={cert.slug} className="h-full">
              <CertCard cert={cert} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
