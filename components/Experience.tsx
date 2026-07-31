import { experience } from "@/data/experience";
import { Reveal, RevealGroup, RevealItem } from "./motion";
import { SectionHeader } from "./SectionHeader";

const rots = ["rot-a", "rot-d", "rot-c", "rot-b", "rot-e", "rot-f"];
const rads = ["rad-1", "rad-2", "rad-3", "rad-4", "rad-5", "rad-blob"];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-edge">
        <Reveal>
          <SectionHeader
            kicker="Experience"
            title={
              <>
                Where I&apos;ve <span className="mark-red">shipped</span>.
              </>
            }
            description="Most recent first. Product work, research, and client delivery across the UAE, the US, and Ethiopia."
          />
        </Reveal>

        <RevealGroup className="mt-12 space-y-6">
          {experience.map((job, i) => (
            <RevealItem key={`${job.org}-${job.role}`}>
              <article
                className={`sk-card sk-press ${rots[i % rots.length]} ${rads[i % rads.length]} grid gap-4 p-6 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8 sm:p-7`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block h-3 w-3 shrink-0 rounded-full border-2 border-ink bg-red"
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-2xl leading-none">{job.role}</h3>
                  </div>
                  <p className="mt-2 font-hand text-base font-bold text-red">{job.org}</p>
                  <p className="mt-1.5 font-mono text-xs text-muted">
                    {job.period}
                    {job.location ? ` · ${job.location}` : ""}
                    {job.current ? " · now" : ""}
                  </p>
                </div>

                <ul className="space-y-2.5 text-[0.95rem] leading-relaxed text-muted">
                  {job.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow ring-1 ring-ink" />
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
