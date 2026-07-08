import { featuredProjects, otherProjects } from "@/data/projects";
import { Reveal, RevealGroup, RevealItem } from "./motion";
import { SectionHeading } from "./SectionHeading";
import { CompactProjectCard, FeaturedProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="container-edge">
        <Reveal>
          <SectionHeading kicker="Selected work" title="Projects">
            Eight projects, not one template repeated. Two of them ship with real,
            measured evaluation numbers, scored against test sets I wrote by hand. The
            others are live products you can open and use right now.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 space-y-5">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i === 0 ? 0 : 0.05}>
              <FeaturedProjectCard project={project} index={i + 1} />
            </Reveal>
          ))}
        </div>

        <RevealGroup className="mt-5 grid gap-5 sm:grid-cols-2">
          {otherProjects.map((project) => (
            <RevealItem key={project.slug} className="h-full">
              <CompactProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
