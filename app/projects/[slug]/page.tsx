import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Contact";
import { Reveal } from "@/components/motion";
import { MetricsPanel } from "@/components/MetricsPanel";
import { ProjectThumb } from "@/components/ProjectThumb";
import { DockNav } from "@/components/DockNav";
import { Tape } from "@/components/Sketch";
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
          <header className="border-b-2 border-ink">
            <div className="container-edge py-12 sm:py-16">
              <Link href="/#projects" className="inline-flex items-center gap-1.5 font-hand text-base font-bold text-red">
                <ArrowRight className="h-4 w-4 rotate-180" />
                All projects
              </Link>

              <div className="mt-6">
                <span className="chip rot-b">
                  <span className={`mr-1.5 inline-block h-2 w-2 rounded-full ${live ? "bg-red" : "bg-ink"}`} />
                  {project.status.label}
                </span>
              </div>

              <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
                {project.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                {project.tagline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                {project.links.map((l, i) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`sk-btn ${i === 0 ? "sk-btn-primary rot-c" : "sk-btn-ghost rot-a"}`}
                  >
                    {l.kind === "github" ? <GitHubIcon className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </header>

          <div className="container-edge pt-12">
            <div className="mx-auto max-w-4xl sk-card rot-e rad-2 overflow-hidden">
              <ProjectThumb slug={project.slug} />
            </div>
          </div>

          <div className="container-edge grid gap-12 py-14 lg:grid-cols-[1fr_18rem] lg:gap-16 lg:py-20">
            <div className="min-w-0">
              <Reveal>
                <p className="max-w-2xl text-lg leading-relaxed text-ink">{cs.intro}</p>
              </Reveal>

              {panel ? (
                <Reveal delay={0.05}>
                  <div className="mt-12">
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
                      <h2 className="font-display text-3xl leading-none">{section.heading}</h2>
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
                  <aside className="relative mt-14 sk-card rot-d rad-4 !bg-yellow p-6 sm:p-7">
                    <Tape className="left-8 -top-3.5" rotate={-6} />
                    <p className="font-hand text-base font-bold text-red">honest note</p>
                    <h2 className="mt-1 font-display text-2xl leading-none">{cs.honest.heading}</h2>
                    <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-ink">
                      {cs.honest.body.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </aside>
                </Reveal>
              ) : null}
            </div>

            {/* Sidebar: tech stack */}
            <aside className="lg:sticky lg:top-8 lg:self-start">
              <div className="sk-card rot-f rad-3 p-6">
                <h2 className="font-display text-xl leading-none text-ink">Stack</h2>
                <span className="mt-2 block h-0.5 w-12 bg-red" aria-hidden="true" />
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <li key={t} className="chip">{t}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-2.5 border-t-2 border-ink/15 pt-5">
                  {project.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-red"
                    >
                      {l.kind === "github" ? <GitHubIcon className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="container-edge">
            <Link href="/#projects" className="sk-btn sk-btn-ghost rot-b">
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to all projects
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <DockNav />
    </>
  );
}
