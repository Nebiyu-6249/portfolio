"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

// Counts a numeric value up to its target when it scrolls into view.
// If the display string is not a single clean number (for example "M0-M7"
// or "EN / AR"), it renders the string as-is with no animation.
export function CountUp({
  value,
  duration = 1.1,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const reduce = useReducedMotion();
  const [text, setText] = useState<string>(() => initialText(value, reduce));

  const digitGroups = value.match(/\d+(?:\.\d+)?/g);
  const animatable = digitGroups != null && digitGroups.length === 1;

  useEffect(() => {
    if (!animatable || reduce) {
      setText(value);
      return;
    }
    if (!inView) return;

    const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
    if (!match) {
      setText(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      // easeOutExpo for a readout that settles instead of stopping dead.
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      const current = (target * eased).toFixed(decimals);
      setText(`${prefix}${current}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animatable, inView, reduce, value, duration]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}

function initialText(value: string, reduce: boolean | null): string {
  const digitGroups = value.match(/\d+(?:\.\d+)?/g);
  const animatable = digitGroups != null && digitGroups.length === 1;
  if (!animatable || reduce) return value;
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  if (!match) return value;
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return `${prefix}${(0).toFixed(decimals)}${suffix}`;
}
