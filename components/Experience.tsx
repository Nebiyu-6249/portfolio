import { experience } from "@/data/experience";
import { Reveal, RevealGroup, RevealItem } from "./motion";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="container-edge">
        <Reveal>
          <SectionHeading kicker="Experience" title="Where I have shipped" />
        </Reveal>

        <RevealGroup className="mt-12 space-y-3">
          {experience.map((job) => (
            <RevealItem key={`${job.org}-${job.role}`}>
              <article className="group grid gap-4 rounded-card border border-line bg-surface p-6 transition-colors hover:border-teal/40 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-8 sm:p-7">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg font-semibold leading-tight">
                      {job.role}
                    </h3>
                    {job.current ? (
                      <span
                        className="inline-block h-1.5 w-1.5 rounded-full bg-teal"
                        title="Current"
                        aria-label="Current role"
                      />
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm font-medium text-teal">{job.org}</p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wide text-faint">
                    {job.period}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                </div>

                <ul className="space-y-2.5 text-[0.95rem] leading-relaxed text-muted">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
