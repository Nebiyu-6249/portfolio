"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Metric, MetricGroup } from "@/data/metrics";
import { fraudBaseline } from "@/data/metrics";
import { CountUp } from "./CountUp";

const ease = [0.16, 1, 0.3, 1] as const;

function MetricRow({ metric }: { metric: Metric }) {
  const reduce = useReducedMotion();
  const hasBar = metric.fill !== undefined;
  // Rare-event fills (like a 0.64% false-positive rate) would be invisible at
  // true scale, so give tiny values a readable floor while keeping the label honest.
  const displayFill =
    metric.fill !== undefined ? Math.max(metric.fill, metric.fill > 0 ? 0.02 : 0) : 0;

  return (
    <div className="py-3.5">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm text-white/70">{metric.label}</span>
        <span className="font-mono text-lg font-semibold tracking-tight text-[#2FD4BF]">
          <CountUp value={metric.display} />
        </span>
      </div>
      {hasBar ? (
        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-[#2FD4BF]"
            initial={reduce ? false : { width: 0 }}
            whileInView={{ width: `${displayFill * 100}%` }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            style={reduce ? { width: `${displayFill * 100}%` } : undefined}
          />
        </div>
      ) : null}
      {metric.note ? (
        <p className="mt-2 text-xs leading-relaxed text-white/45">{metric.note}</p>
      ) : null}
    </div>
  );
}

function BaselineCompare() {
  const reduce = useReducedMotion();
  // Log scale, because the model beats random chance by about 126x and a linear
  // bar would flatten the smaller value to nothing.
  const toWidth = (v: number) => {
    const min = Math.log10(0.0008);
    const max = Math.log10(0.2);
    return ((Math.log10(v) - min) / (max - min)) * 100;
  };
  const rows = [
    { ...fraudBaseline.model, color: "#2FD4BF", strong: true },
    { ...fraudBaseline.chance, color: "rgba(255,255,255,0.35)", strong: false },
  ];

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[0.65rem] uppercase tracking-wider text-white/40">
          Autoencoder vs random chance
        </span>
        <span className="rounded-full bg-[#2FD4BF]/15 px-2.5 py-1 font-mono text-[0.65rem] font-medium text-[#8FB0A9]">
          {fraudBaseline.ratioLabel}
        </span>
      </div>
      <div className="space-y-4">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="mb-1.5 flex items-baseline justify-between gap-3">
              <span className={`text-sm ${r.strong ? "text-white/80" : "text-white/50"}`}>
                {r.label}
              </span>
              <span
                className={`font-mono text-sm ${
                  r.strong ? "font-semibold text-[#2FD4BF]" : "text-white/50"
                }`}
              >
                {r.value}
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: r.color }}
                initial={reduce ? false : { width: 0 }}
                whileInView={{ width: `${toWidth(r.value)}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 font-mono text-[0.65rem] text-white/35">log scale</p>
    </div>
  );
}

export function MetricsPanel({
  eyebrow,
  title,
  tags,
  groups,
  footnote,
  showBaseline = false,
}: {
  eyebrow: string;
  title: string;
  tags?: string[];
  groups: MetricGroup[];
  footnote?: string;
  showBaseline?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-card border border-white/10 bg-gradient-to-b from-[#0e2b25] to-[#06150f] text-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]">
      <div className="border-b border-white/10 p-6 sm:p-7">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2FD4BF] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2FD4BF]" />
          </span>
          <span className="font-mono text-[0.7rem] uppercase tracking-wider text-white/50">
            {eyebrow}
          </span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{title}</h3>
        {tags && tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[0.7rem] text-white/60"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="p-6 sm:p-7">
        {showBaseline ? (
          <div className="mb-6">
            <BaselineCompare />
          </div>
        ) : null}

        <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title}>
              <div className="mb-1 flex items-baseline justify-between border-b border-white/10 pb-2">
                <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-[#8FB0A9]">
                  {group.title}
                </h4>
              </div>
              {group.caption ? (
                <p className="mt-2.5 text-xs leading-relaxed text-white/45">{group.caption}</p>
              ) : null}
              <div className="mt-1 divide-y divide-white/[0.06]">
                {group.metrics.map((m) => (
                  <MetricRow key={m.label} metric={m} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {footnote ? (
          <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/50">
            {footnote}
          </p>
        ) : null}
      </div>
    </div>
  );
}
