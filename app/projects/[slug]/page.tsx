import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Contact";
import { Reveal } from "@/components/motion";
import { MetricsPanel } from "@/components/MetricsPanel";
import { ProjectThumb } from "@/components/ProjectThumb";
import { ArrowRight, ArrowUpRight, GitHubIcon } from "@/components/Icons";
import { caseStudySlugs, getProject } from "@/data/projects";
import { uaeCopilotMetrics, fraudMetrics } from "@/data/metrics";
import { site } from "@/data/site";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} · ${site.name}`,
      description: project.tagline,
      url: `/projects/${project.slug}`,
    },
  };
}

const panelConfig = {
  uaeCopilot: {
    eyebrow: "Golden-set evaluation · CI-gated",
    title: "Measured results",
    tags: ["70 questions", "56 in-corpus", "14 out-of-corpus"],
    groups: uaeCopilotMetrics,
    footnote:
      "A GitHub Actions CI gate re-runs this full eval on every relevant push and fails the build if any of these numbers regress past a set floor. They are checked on every change, not captured once.",
    showBaseline: false,
  },
  fraud: {
    eyebrow: "Time-ordered split · measured",
    title: "Measured results",
    tags: ["1 fraud in 578", "no shuffle", "train / threshold / test"],
    groups: fraudMetrics,
    footnote:
      "The split is time-ordered, not shuffled, so the model is never evaluated on transactions from before its own training window.",
    showBaseline: true,
  },
} as const;

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project || !project.caseStudy) notFound();

  const cs = project.caseStudy;
  const panel = cs.metrics ? panelConfig[cs.metrics] : null;
  const live = project.status.tone === "live";

  return (
    <>
      <Nav />
      <main id="main">
        <article className="pb-16">
          {/* Header */}
          <header className="border-b border-line">
            <div className="container-edge py-14 sm:py-20">
              <Link
                href="/#projects"
                className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-teal"
              >
                <ArrowRight className="h-3.5 w-3.5 rotate-180 transition-transform duration-300 group-hover:-translate-x-0.5" />
                All projects
              </Link>

              <div className="mt-6 flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                  {live ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-faint" />
                  )}
                  {project.status.label}
                </span>
              </div>

              <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                {project.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                {project.tagline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                {project.links.map((l) => (
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
              </div>
            </div>
          </header>

          <div className="container-edge pt-10">
            <div className="mx-auto max-w-4xl border border-line">
              <ProjectThumb slug={project.slug} />
            </div>
          </div>

          <div className="container-edge grid gap-12 py-14 lg:grid-cols-[1fr_18rem] lg:gap-16 lg:py-20">
            <div className="min-w-0">
              <Reveal>
                <p className="max-w-2xl text-lg leading-relaxed text-ink/85">{cs.intro}</p>
              </Reveal>

              {panel ? (
                <Reveal delay={0.05}>
                  <div className="mt-10">
                    <MetricsPanel
                      eyebrow={panel.eyebrow}
                      title={panel.title}
                      tags={[...panel.tags]}
                      groups={panel.groups}
                      footnote={panel.footnote}
                      showBaseline={panel.showBaseline}
                    />
                  </div>
                </Reveal>
              ) : null}

              <div className="mt-12 space-y-10">
                {cs.sections.map((section) => (
                  <Reveal key={section.heading}>
                    <section>
                      <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                        {section.heading}
                      </h2>
                      <div className="mt-3 space-y-4 text-[0.98rem] leading-relaxed text-muted">
                        {section.body.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </section>
                  </Reveal>
                ))}
              </div>

              {cs.honest ? (
                <Reveal>
                  <aside className="mt-12 border-l-2 border-teal bg-teal-soft/50 p-6 sm:p-7">
                    <p className="kicker">Honest note</p>
                    <h2 className="mt-2 font-display text-lg font-semibold tracking-tight">
                      {cs.honest.heading}
                    </h2>
                    <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-ink/80">
                      {cs.honest.body.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </aside>
                </Reveal>
              ) : null}
            </div>

            {/* Sidebar: tech stack */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="border border-line bg-surface p-6">
                <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-teal">
                  Stack
                </h2>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-2 border-t border-line pt-5">
                  {project.links.map((l) => (
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
                </div>
              </div>
            </aside>
          </div>

          <div className="container-edge">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to all projects
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
