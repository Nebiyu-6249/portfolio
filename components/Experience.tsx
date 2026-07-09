import { experience } from "@/data/experience";
import { Reveal, RevealGroup, RevealItem } from "./motion";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-edge">
        <Reveal>
          <SectionHeader
            kicker="Experience"
            title={
              <>
                Where I&apos;ve <span className="accent-underline">shipped</span>.
              </>
            }
            description="Most recent first. Product work, research, and client delivery across the UAE, the US, and Ethiopia."
          />
        </Reveal>

        <RevealGroup className="mt-10 border border-line">
          {experience.map((job, i) => (
            <RevealItem key={`${job.org}-${job.role}`}>
              <article
                className={`group grid gap-4 p-6 transition-colors hover:bg-raised sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8 sm:p-8 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg font-bold leading-tight tracking-tight">
                      {job.role}
                    </h3>
                    {job.current ? (
                      <span
                        className="inline-block h-1.5 w-1.5 rounded-full bg-teal"
                        aria-label="Current role"
                      />
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm font-semibold text-teal">{job.org}</p>
                  <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-wide text-faint">
                    {job.period}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                </div>

                <ul className="space-y-2.5 text-[0.95rem] leading-relaxed text-muted">
                  {job.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3">
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
