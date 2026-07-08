import { skillGroups } from "@/data/skills";
import { Reveal, RevealGroup, RevealItem } from "./motion";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="container-edge">
        <Reveal>
          <SectionHeading kicker="Toolkit" title="What I work with" />
        </Reveal>

        <RevealGroup className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <RevealItem key={group.title} className="h-full">
              <div className="h-full rounded-card border border-line bg-surface p-6 sm:p-7">
                <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-teal">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-line bg-raised px-3 py-1.5 text-sm text-ink transition-colors hover:border-teal/50"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
