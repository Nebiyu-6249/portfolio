import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectThumb } from "./ProjectThumb";
import { ArrowUpRight, GitHubIcon } from "./Icons";
import { HandArrow, Tape } from "./Sketch";

const rots = ["rot-a", "rot-b", "rot-c", "rot-d", "rot-e", "rot-f"];
const rads = ["rad-1", "rad-2", "rad-3", "rad-4", "rad-5", "rad-blob"];

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const caseStudy = project.hasCaseStudy;
  const primaryHref = caseStudy ? `/projects/${project.slug}` : project.links[0]?.href;
  const ctaLabel = caseStudy ? "Read case study" : "View project";
  const live = project.status.tone === "live";
  const shownTech = project.tech.slice(0, 6);
  const extraTech = project.tech.length - shownTech.length;
  const isFlagshipMetric = project.slug === "uae-compliance-copilot";

  const Title = caseStudy ? (
    <Link href={primaryHref} className="transition-colors hover:text-red">
      {project.name}
    </Link>
  ) : (
    <a href={primaryHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-red">
      {project.name}
    </a>
  );

  return (
    <article className={`sk-card sk-press ${rots[index % rots.length]} ${rads[index % rads.length]} relative flex h-full flex-col overflow-hidden`}>
      {project.slug === "aibill" ? <Tape className="right-6 -top-3 z-10" rotate={5} /> : null}
      {caseStudy ? (
        <Link href={primaryHref} aria-label={`${project.name}, read case study`}>
          <ProjectThumb slug={project.slug} />
        </Link>
      ) : (
        <a href={primaryHref} target="_blank" rel="noopener noreferrer" aria-label={`${project.name}, view project`}>
          <ProjectThumb slug={project.slug} />
        </a>
      )}

      <div className="flex flex-1 flex-col p-6">
        <ul className="flex flex-wrap gap-1.5">
          {shownTech.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
          {extraTech > 0 ? <li className="chip bg-yellow">+{extraTech}</li> : null}
        </ul>

        <h3 className="mt-4 flex items-center gap-2 font-display text-2xl leading-none">
          {Title}
          {live ? (
            <span className="inline-block h-2.5 w-2.5 shrink-0 rounded-full border-2 border-ink bg-red" title="Live in production" />
          ) : null}
        </h3>

        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted">{project.summary}</p>

        {project.preview ? (
          <div className="relative mt-4">
            <div className="flex divide-x-2 divide-ink overflow-hidden rounded-[16px_6px_16px_6px/6px_16px_6px_16px] border-2 border-ink bg-raised">
              {project.preview.map((chip) => (
                <div key={chip.label} className="flex-1 px-3 py-2">
                  <div className="font-mono text-base font-bold leading-tight text-ink">{chip.value}</div>
                  <div className="mt-0.5 font-hand text-[0.7rem] leading-tight text-muted">{chip.label}</div>
                </div>
              ))}
            </div>
            {isFlagshipMetric ? (
              <span className="pointer-events-none absolute -right-1 -top-9 hidden items-center gap-1 text-red sm:flex">
                <span className="font-hand text-sm font-bold">not a demo</span>
                <HandArrow className="h-8 w-8 rotate-[150deg]" />
              </span>
            ) : null}
          </div>
        ) : null}

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          {caseStudy ? (
            <Link href={primaryHref} className="inline-flex items-center gap-1.5 font-display text-lg text-ink transition-colors hover:text-red">
              {ctaLabel}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : (
            <a href={primaryHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-display text-lg text-ink transition-colors hover:text-red">
              {ctaLabel}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}

          <div className="flex items-center gap-2.5">
            {project.links
              .filter((l) => l.kind === "github")
              .map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub`} className="text-ink transition-colors hover:text-red">
                  <GitHubIcon className="h-5 w-5" />
                </a>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}
