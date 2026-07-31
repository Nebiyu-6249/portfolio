import type { SVGProps } from "react";

// A hand-drawn wavy divider used instead of a plain <hr>.
export function SketchDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        className="h-4 w-full"
        fill="none"
      >
        <path
          d="M2 14 C 60 6, 110 22, 170 13 S 290 4, 350 14 T 520 13 C 590 6, 640 21, 710 12 S 840 5, 900 15 T 1050 12 C 1110 7, 1160 19, 1198 12"
          stroke="rgb(var(--ink))"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="1 10"
        />
      </svg>
    </div>
  );
}

// A small hand-drawn arrow. Rotate/position via className on the wrapper.
export function HandArrow({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M8 12 C 30 6, 54 14, 60 40 C 62 50, 60 58, 56 66"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M44 56 L 56 68 L 68 54"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// A strip of masking tape holding down a corner of a card.
export function Tape({
  className = "",
  rotate = -4,
}: {
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      aria-hidden="true"
      className={`tape ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  );
}
