import { certifications } from "@/data/certifications";
import { Reveal, RevealGroup, RevealItem } from "./motion";
import { SectionHeading } from "./SectionHeading";
import { CheckIcon } from "./Icons";

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="container-edge">
        <Reveal>
          <SectionHeading kicker="Certifications" title="Courses and credentials" />
        </Reveal>

        <RevealGroup className="mt-12 grid gap-3 sm:grid-cols-2">
          {certifications.map((cert) => (
            <RevealItem key={cert.title}>
              <div className="flex items-start gap-3.5 rounded-card border border-line bg-surface p-5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-soft text-teal">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-sm font-medium leading-snug text-ink">{cert.title}</p>
                  <p className="mt-1 font-mono text-xs text-faint">{cert.issuer}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
