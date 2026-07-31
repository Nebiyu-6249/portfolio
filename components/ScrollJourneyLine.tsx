"use client";

import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

// A hand-drawn red "margin" line down the left of the page, like the ruled
// margin of a notebook. It draws itself forward from top to bottom in step with
// the reader's scroll percentage, with a pen nib riding the drawn end.
const PATH =
  "M 18 3 C 5 80, 31 150, 16 232 C 4 312, 31 392, 17 472 C 7 552, 30 632, 15 712 C 5 792, 29 862, 18 940 L 20 998";

function PenNib() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 -rotate-90 drop-shadow-[1px_1px_0_rgba(31,31,31,0.35)]" fill="none" aria-hidden="true">
      <path d="M5 19 L15 9 L18 12 L8 22 Z" fill="rgb(var(--yellow))" stroke="rgb(var(--ink))" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M15 9 l 3 -3 a 1.5 1.5 0 0 1 2.1 0 l 0.9 0.9 a 1.5 1.5 0 0 1 0 2.1 l -3 3 z" fill="rgb(var(--red))" stroke="rgb(var(--ink))" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M5 19 l 2.6 -0.8 l -1.8 -1.8 z" fill="rgb(var(--ink))" />
    </svg>
  );
}

export function ScrollJourneyLine() {
  const pathRef = useRef<SVGPathElement>(null);
  const reduce = useReducedMotion();

  // Whole-page scroll percentage: 0 at the top, 1 at the bottom.
  const { scrollYProgress } = useScroll();
  const drawn = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });

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

  useMotionValueEvent(drawn, "change", (p) => {
    if (!reduce) place(p);
  });

  return (
    <div className="pointer-events-none fixed left-1.5 top-0 z-30 hidden h-screen w-9 sm:left-3 sm:block md:w-10 lg:left-5">
      <svg className="h-full w-full" viewBox="0 0 36 1000" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          ref={pathRef}
          d={PATH}
          fill="none"
          stroke="rgb(var(--red))"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: reduce ? 1 : drawn }}
        />
      </svg>

      {!reduce ? (
        <motion.div
          className="fixed left-0 top-0 h-7 w-7"
          style={{ x: penX, y: penY, translateX: "-46%", translateY: "-50%" }}
        >
          <PenNib />
        </motion.div>
      ) : null}
    </div>
  );
}
