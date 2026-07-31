import { site } from "@/data/site";
import { Reveal } from "./motion";
import { SectionHeader } from "./SectionHeader";
import { Tape } from "./Sketch";

const facts = [
  { k: "Based in", v: "Ras Al Khaimah, UAE", rot: "rot-a", rad: "rad-1" },
  { k: "Work spans", v: "UAE, US, Ethiopia", rot: "rot-d", rad: "rad-2" },
  { k: "Ships in", v: "Python, TypeScript", rot: "rot-c", rad: "rad-4" },
  { k: "Models", v: "OpenAI, Claude", rot: "rot-b", rad: "rad-3" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-edge">
        <Reveal>
          <SectionHeader
            kicker="About"
            title={
              <>
                Built, then <span className="mark-yellow">measured</span>.
              </>
            }
            description="Full-stack and AI engineer who ships production systems and can prove they work."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                I build and ship production systems: RAG pipelines with real evaluation
                harnesses, AI agents, and full-stack web applications, in Python, TypeScript,
                OpenAI, Claude, LangChain and LangGraph, and AWS.
              </p>
              <p>
                I built{" "}
                <span className="mark-red font-semibold text-ink">AiBill</span>, a live
                multi-tenant WhatsApp invoicing product serving UAE businesses, and I have
                shipped client and production work across the UAE, the US, and Ethiopia. When I
                say a system works, I mean I can show you the retrieval recall, the false-positive
                rate, and the citation faithfulness, scored against a test set I wrote by hand.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {facts.map((f) => (
                <div key={f.k} className={`sk-card ${f.rot} ${f.rad} p-4`}>
                  <p className="font-hand text-sm font-bold text-red">{f.k}</p>
                  <p className="mt-1 text-sm font-semibold text-ink">{f.v}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-6 sk-card rot-c rad-5 p-5">
              <Tape className="left-1/2 -top-3 -translate-x-1/2" rotate={2} />
              <p className="font-hand text-sm font-bold text-red">Education</p>
              <p className="mt-1.5 text-base font-semibold text-ink">{site.education.degree}</p>
              <p className="text-sm text-muted">{site.education.institution}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
