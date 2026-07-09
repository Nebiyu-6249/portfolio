import { skillGroups } from "@/data/skills";
import { Reveal } from "./motion";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-edge">
        <Reveal>
          <SectionHeader
            variant="box"
            kicker="Tech stack"
            title="Tools & Technologies"
            description="The tools I reach for to build and ship production systems."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-5 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="flex flex-col bg-surface">
                <div className="border-b border-line px-5 py-3.5">
                  <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] text-teal">
                    {group.title}
                  </span>
                </div>
                <ul className="flex flex-1 flex-col divide-y divide-line">
                  {group.items.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-center justify-between gap-3 px-5 py-3 text-[0.95rem] text-ink"
                    >
                      <span>{item}</span>
                      <span className="shrink-0 font-mono text-[0.65rem] text-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
