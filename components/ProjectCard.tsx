import Link from "next/link";
import type { Project, ProjectLink } from "@/data/projects";
import { ArrowRight, ArrowUpRight, GitHubIcon } from "./Icons";

function StatusBadge({ status }: { status: Project["status"] }) {
  const live = status.tone === "live";
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted">
      {live ? (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
        </span>
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-faint" />
      )}
      {status.label}
    </span>
  );
}

function ExternalLinks({ links }: { links: ProjectLink[] }) {
  return (
    <>
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-teal"
        >
          {l.kind === "github" ? (
            <GitHubIcon className="h-4 w-4" />
          ) : (
            <ArrowUpRight className="h-4 w-4" />
          )}
          {l.label}
        </a>
      ))}
    </>
  );
}

function TechRow({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-md bg-raised px-2 py-1 font-mono text-[0.7rem] text-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="group grid overflow-hidden rounded-card border border-line bg-surface transition-colors hover:border-teal/40 lg:grid-cols-[1.55fr_1fr]">
      <div className="p-7 sm:p-9">
        <div className="flex items-center justify-between gap-3">
          <StatusBadge status={project.status} />
          <span className="font-mono text-xs text-faint">
            {String(index).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {project.hasCaseStudy ? (
            <Link
              href={`/projects/${project.slug}`}
              className="transition-colors hover:text-teal"
            >
              {project.name}
            </Link>
          ) : (
            project.name
          )}
        </h3>

        <p className="mt-3 text-[0.95rem] font-medium leading-relaxed text-ink/80">
          {project.tagline}
        </p>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-6">
          <TechRow tech={project.tech} />
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          {project.hasCaseStudy ? (
            <Link
              href={`/projects/${project.slug}`}
              className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-teal"
            >
              Read the case study
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5" />
            </Link>
          ) : null}
          <ExternalLinks links={project.links} />
        </div>
      </div>

      {/* Right rail: the project's headline numbers as a small instrument readout. */}
      {project.preview ? (
        <div className="flex flex-col justify-center gap-px border-t border-line bg-line lg:border-l lg:border-t-0">
          {project.preview.map((chip) => (
            <div key={chip.label} className="flex-1 bg-raised px-7 py-5 sm:px-8">
              <div className="font-mono text-2xl font-semibold tracking-tight text-teal">
                {chip.value}
              </div>
              <div className="mt-1 text-sm text-muted">{chip.label}</div>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export function CompactProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-card border border-line bg-surface p-6 transition-colors hover:border-teal/40 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <StatusBadge status={project.status} />
      </div>

      <h3 className="mt-4 font-display text-xl font-bold tracking-tight">{project.name}</h3>
      <p className="mt-2 text-sm font-medium leading-relaxed text-ink/75">
        {project.tagline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

      <div className="mt-5">
        <TechRow tech={project.tech} />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5">
        <ExternalLinks links={project.links} />
      </div>
    </article>
  );
}
