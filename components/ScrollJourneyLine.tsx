"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";

// A rough, hand-traced winding path (irregular control points, not a smooth
// machine curve) in a 100x1000 box. It stretches to the region behind the
// experience and project cards and draws itself in as the reader scrolls.
const PATH =
  "M 18 4 C 42 60, 6 118, 24 188 C 38 250, 8 300, 27 372 C 44 430, 10 502, 23 560 C 34 624, 6 690, 30 758 C 46 818, 12 878, 21 940 L 24 998";

export function ScrollJourneyLine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Screen position of the pen nib, updated from the path as the user scrolls.
  const penX = useMotionValue(-100);
  const penY = useMotionValue(-100);

  const place = (p: number) => {
    const path = pathRef.current;
    if (!path) return;
    const total = path.getTotalLength();
    const pt = path.getPointAtLength(total * Math.min(Math.max(p, 0), 1));
    const ctm = path.getScreenCTM();
    if (!ctm) return;
    penX.set(pt.x * ctm.a + pt.y * ctm.c + ctm.e);
    penY.set(pt.x * ctm.b + pt.y * ctm.d + ctm.f);
  };

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (!reduce) place(p);
  });

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 -z-10">
      <svg
        ref={svgRef}
        className="sticky top-0 h-screen w-full"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          ref={pathRef}
          d={PATH}
          fill="none"
          stroke="rgb(var(--red))"
          strokeWidth="2.4"
          strokeLinecap="round"
          style={{ pathLength: reduce ? 1 : scrollYProgress }}
          onAnimationComplete={() => reduce && place(1)}
        />
      </svg>

      {/* Pen nib riding the current end of the drawn line (skipped when the
          reader prefers reduced motion). */}
      {!reduce ? (
        <motion.div
          className="fixed left-0 top-0 h-6 w-6"
          style={{ x: penX, y: penY, translateX: "-50%", translateY: "-90%" }}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 -rotate-45" fill="none" aria-hidden="true">
            <path d="M4 20 L15 9 l 0 0 l -11 11 z" fill="rgb(var(--ink))" />
            <path
              d="M14 8 l 3 -3 a 1.4 1.4 0 0 1 2 0 l 0 0 a 1.4 1.4 0 0 1 0 2 l -3 3 z"
              fill="rgb(var(--red))"
              stroke="rgb(var(--ink))"
              strokeWidth="1.2"
            />
            <path d="M4 20 l 3 -1 l -2 -2 z" fill="rgb(var(--ink))" />
          </svg>
        </motion.div>
      ) : null}
    </div>
  );
}
