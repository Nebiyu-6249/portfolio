"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { site } from "@/data/site";
import { heroStats } from "@/data/metrics";
import { CountUp } from "./CountUp";
import { ArrowRight } from "./Icons";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.05 },
    },
  };
  const item: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden="true" />

      <div className="container-edge relative pb-16 pt-14 sm:pt-20 md:pb-24 md:pt-28">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p variants={item} className="kicker flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>{site.role}</span>
            <span className="text-faint">/</span>
            <span className="text-muted normal-case tracking-normal">{site.location}</span>
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
          >
            {site.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            I build production RAG pipelines, AI agents, and full-stack apps, and I{" "}
            <span className="font-medium text-ink">measure whether they actually work</span>{" "}
            instead of shipping a demo that only looks good in a screenshot.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              View the work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-teal hover:text-teal"
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
          transition={{ delay: reduce ? 0 : 0.5, duration: 0.7, ease }}
          className="mt-14 md:mt-16"
        >
          <p className="kicker mb-4 text-muted">
            <span className="text-teal">Measured</span>, not asserted
          </p>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 bg-surface p-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-3xl font-semibold tracking-tight text-teal sm:text-[2rem]">
                  <CountUp value={stat.value} />
                </dd>
                <span className="text-sm leading-snug text-ink">{stat.label}</span>
                <span className="mt-1 font-mono text-[0.65rem] uppercase tracking-wider text-faint">
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
