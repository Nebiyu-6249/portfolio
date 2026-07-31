import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiFastapi,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiLangchain,
  SiAnthropic,
  SiNetlify,
} from "react-icons/si";

// Language and platform logos, rendered monochrome (pencil black) so they sit
// inside the four-color palette and read as hand-stamped marks.
const logos: { Icon: IconType; label: string }[] = [
  { Icon: SiReact, label: "React" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiPython, label: "Python" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiFastapi, label: "FastAPI" },
  { Icon: SiTailwindcss, label: "Tailwind CSS" },
  { Icon: SiPostgresql, label: "PostgreSQL" },
  { Icon: SiDocker, label: "Docker" },
  { Icon: SiLangchain, label: "LangChain" },
  { Icon: SiAnthropic, label: "Claude" },
  { Icon: SiNetlify, label: "Netlify" },
];

const rots = ["rot-a", "rot-b", "rot-c", "rot-d", "rot-e", "rot-f"];

export function TechLogos({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-3">
        {logos.map((l, i) => (
          <span
            key={l.label}
            title={l.label}
            className={`sk-card sk-press ${rots[i % rots.length]} rad-blob grid h-12 w-12 place-items-center`}
          >
            <l.Icon className="h-6 w-6 text-ink" aria-hidden="true" />
            <span className="sr-only">{l.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
