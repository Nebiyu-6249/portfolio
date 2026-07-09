"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { site } from "@/data/site";
import { heroStats } from "@/data/metrics";
import { CountUp } from "./CountUp";
import { ArrowUpRight } from "./Icons";

const ease = [0.16, 1, 0.3, 1] as const;

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
    <section className="relative scroll-mt-20">
      <div className="container-edge pb-16 pt-16 sm:pt-24 md:pb-24 md:pt-28">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className="kicker">— {site.role}</p>
            <span className="hidden text-faint sm:inline">/</span>
            <p className="kicker">{site.location}</p>
            <span className="inline-flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-wider text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Available for work
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl font-black leading-[0.92] tracking-tight sm:text-7xl lg:text-[5.5rem]"
          >
            Nebiyu Elias{" "}
            <span className="accent-underline">Gemedu</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            I build production RAG pipelines, AI agents, and full-stack apps, and I{" "}
            <span className="font-semibold text-ink">measure whether they actually work</span>{" "}
            instead of shipping a demo that only looks good in a screenshot.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/#projects"
              className="group inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
            >
              View the work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Signature element: real, measured numbers as first-class content. */}
        <motion.div
          variants={item}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "show"}
          transition={{ delay: reduce ? 0 : 0.45, duration: 0.7, ease }}
          className="mt-14 md:mt-20"
        >
          <p className="kicker mb-4">
            [ <span className="text-teal">Measured</span>, not asserted ]
          </p>
          <dl className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 bg-surface p-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-[1.75rem] font-bold leading-none tracking-tight text-teal sm:text-[2rem]">
                  <CountUp value={stat.value} />
                </dd>
                <span className="mt-1 text-sm leading-snug text-ink">{stat.label}</span>
                <span className="mt-1 font-mono text-[0.6rem] uppercase tracking-wider text-faint">
                  {stat.source}
                </span>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
