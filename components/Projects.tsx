import { projects } from "@/data/projects";
import { Reveal, RevealGroup, RevealItem } from "./motion";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-edge">
        <Reveal>
          <SectionHeader
            kicker="Selected work"
            title={
              <>
                Projects I&apos;ve <span className="mark-yellow">built</span>.
              </>
            }
            description="From live production products to RAG systems with real evaluation harnesses. Two of them ship with measured numbers scored against test sets I wrote by hand."
          />
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <RevealItem key={project.slug} className="h-full">
              <ProjectCard project={project} index={i} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
