import { skillGroups } from "@/data/skills";
import { Reveal, RevealGroup, RevealItem } from "./motion";
import { SectionHeader } from "./SectionHeader";

const rots = ["rot-a", "rot-d", "rot-c", "rot-b"];
const rads = ["rad-1", "rad-2", "rad-3", "rad-4"];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-edge">
        <Reveal>
          <SectionHeader
            variant="box"
            kicker="Tech stack"
            title="Tools & Technologies"
            description="The tools I reach for to build and ship production systems."
          />
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <RevealItem key={group.title} className="h-full">
              <div className={`sk-card ${rots[gi % rots.length]} ${rads[gi % rads.length]} h-full p-6 sm:p-7`}>
                <h3 className="font-display text-2xl leading-none">{group.title}</h3>
                <span className="mt-3 block h-0.5 w-14 bg-red" aria-hidden="true" />
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item, ii) => (
                    <li key={item} className={`chip ${ii % 3 === 0 ? "bg-yellow" : ""}`}>
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
