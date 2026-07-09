import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectThumb } from "./ProjectThumb";
import { ArrowUpRight, GitHubIcon } from "./Icons";

export function ProjectCard({ project }: { project: Project }) {
  const caseStudy = project.hasCaseStudy;
  const primaryHref = caseStudy ? `/projects/${project.slug}` : project.links[0]?.href;
  const ctaLabel = caseStudy ? "View case study" : "View project";
  const live = project.status.tone === "live";
  const shownTech = project.tech.slice(0, 6);
  const extraTech = project.tech.length - shownTech.length;

  const Title = caseStudy ? (
    <Link href={primaryHref} className="transition-colors hover:text-teal">
      {project.name}
    </Link>
  ) : (
    <a href={primaryHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-teal">
      {project.name}
    </a>
  );

  return (
    <article className="group flex h-full flex-col border border-line bg-surface transition-colors hover:border-teal/40">
      {caseStudy ? (
        <Link href={primaryHref} aria-label={`${project.name}, view case study`}>
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
            <li key={t} className="chip">
              {t}
            </li>
          ))}
          {extraTech > 0 ? <li className="chip">+{extraTech}</li> : null}
        </ul>

        <h3 className="mt-4 flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          {Title}
          {live ? (
            <span className="relative flex h-2 w-2" title="Live in production">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
          ) : null}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{project.summary}</p>

        {project.preview ? (
          <dl className="mt-4 flex divide-x divide-line border border-line bg-raised">
            {project.preview.map((chip) => (
              <div key={chip.label} className="flex-1 px-3 py-2">
                <dt className="font-mono text-sm font-bold leading-tight text-teal">{chip.value}</dt>
                <dd className="mt-0.5 font-mono text-[0.6rem] uppercase leading-tight tracking-wide text-faint">
                  {chip.label}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          {caseStudy ? (
            <Link
              href={primaryHref}
              className="group/cta inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:text-teal"
            >
              {ctaLabel}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </Link>
          ) : (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:text-teal"
            >
              {ctaLabel}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </a>
          )}

          <div className="flex items-center gap-2.5">
            {project.links
              .filter((l) => l.kind === "github")
              .map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  className="text-faint transition-colors hover:text-ink"
                >
                  <GitHubIcon className="h-4 w-4" />
                </a>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}
