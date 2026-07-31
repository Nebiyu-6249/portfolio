"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { site } from "@/data/site";
import { heroStats } from "@/data/metrics";
import { CountUp } from "./CountUp";
import { ArrowUpRight } from "./Icons";
import { HandArrow, Tape } from "./Sketch";
import { TechLogos } from "./TechLogos";

const ease = [0.16, 1, 0.3, 1] as const;
const rots = ["rot-a", "rot-b", "rot-c", "rot-d", "rot-e"];

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.04 } },
  };
  const item: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    <section id="home" className="relative scroll-mt-20">
      <div className="container-edge pb-16 pt-14 sm:pt-20 md:pb-24 md:pt-24">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <p className="kicker">/ {site.role}</p>
            <span className="font-hand text-base text-muted">{site.location}</span>
            <span className="chip rot-b bg-yellow font-hand text-[0.8rem] font-bold normal-case tracking-normal">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-red" />
              Available for work
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-6xl leading-[0.92] tracking-tight sm:text-8xl"
          >
            Nebiyu Elias <span className="mark-red">Gemedu</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            I build production RAG pipelines, AI agents, and full-stack apps, and I{" "}
            <span className="mark-yellow font-semibold text-ink">measure whether they actually work</span>{" "}
            instead of shipping a demo that only looks good in a screenshot.
          </motion.p>

          <motion.div variants={item} className="relative mt-9 flex flex-wrap items-center gap-4">
            <a href="/#projects" className="sk-btn sk-btn-primary rot-c">
              View the work
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="sk-btn sk-btn-ghost rot-a"
            >
              GitHub
            </a>
            {/* hand-drawn arrow pointing at the primary CTA */}
            <span className="pointer-events-none absolute -right-2 top-1/2 hidden -translate-y-1/2 items-center gap-1 text-red lg:flex xl:-right-16">
              <span className="font-hand text-base font-bold text-red">start here</span>
              <HandArrow className="h-10 w-10 -scale-x-100 rotate-[8deg]" />
            </span>
          </motion.div>
        </motion.div>

        {/* Signature: real, measured numbers as first-class content. */}
        <motion.div
          variants={item}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "show"}
          transition={{ delay: reduce ? 0 : 0.45, duration: 0.7, ease }}
          className="relative mt-16 md:mt-20"
        >
          <div className="mb-6 flex items-center gap-2">
            <HandArrow className="h-9 w-9 rotate-[100deg] text-ink" />
            <p className="font-hand text-lg font-bold text-ink">measured, not asserted</p>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-5">
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`sk-card ${rots[i % rots.length]} ${i % 2 === 0 ? "rad-1" : "rad-2"} relative min-w-[9rem] flex-1 p-4`}
              >
                {i === 0 ? <Tape className="-left-3 -top-3" rotate={-10} /> : null}
                <div className="font-mono text-3xl font-bold leading-none tracking-tight text-ink">
                  <CountUp value={stat.value} />
                </div>
                <div className="mt-2 text-sm leading-snug text-muted">{stat.label}</div>
                <span className="mt-1.5 block font-hand text-xs text-faint">{stat.source}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Language and platform logos he actually builds with. */}
        <div className="mt-16">
          <p className="mb-4 font-hand text-base font-bold text-muted">built with</p>
          <TechLogos />
        </div>
      </div>
    </section>
  );
}
