import { site } from "@/data/site";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

const facts = [
  { k: "Based in", v: "Ras Al Khaimah, UAE" },
  { k: "Work spans", v: "UAE, US, Ethiopia" },
  { k: "Ships in", v: "Python, TypeScript" },
  { k: "Models", v: "OpenAI, Claude" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="container-edge grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <SectionHeading kicker="About" title="I ship systems, then check that they hold up." />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I am a full-stack and AI engineer who builds and ships production systems:
              RAG pipelines with real evaluation harnesses, AI agents, and full-stack web
              applications, in Python, TypeScript, OpenAI, Claude, LangChain and LangGraph,
              and AWS.
            </p>
            <p>
              I built{" "}
              <span className="font-medium text-ink">AiBill</span>, a live multi-tenant
              WhatsApp invoicing product serving UAE businesses, and I have shipped client
              and production work across the UAE, the US, and Ethiopia. When I say a system
              works, I mean I can show you the retrieval recall, the false-positive rate,
              and the citation faithfulness, scored against a test set I wrote by hand.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line">
            {facts.map((f) => (
              <div key={f.k} className="bg-surface p-5">
                <dt className="font-mono text-[0.65rem] uppercase tracking-wider text-faint">
                  {f.k}
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 rounded-card border border-line bg-surface p-5">
            <dt className="font-mono text-[0.65rem] uppercase tracking-wider text-faint">
              Education
            </dt>
            <dd className="mt-1.5 text-sm font-medium text-ink">{site.education.degree}</dd>
            <dd className="text-sm text-muted">{site.education.institution}</dd>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
