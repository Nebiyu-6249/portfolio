import type { ReactNode } from "react";

// Two header patterns, restyled hand-drawn:
//  - "split": handwritten kicker + big display title, with a note on the right.
//  - "box":   a pencil-black chalkboard label beside the big display title.
export function SectionHeader({
  kicker,
  title,
  description,
  variant = "split",
}: {
  kicker: string;
  title: ReactNode;
  description?: string;
  variant?: "split" | "box";
}) {
  if (variant === "box") {
    return (
      <div className="grid gap-6 md:grid-cols-[minmax(0,19rem)_1fr] md:items-center md:gap-10">
        <div className="sk-card rot-e rad-3 bg-box p-6 text-box-ink sm:p-7">
          <p className="font-hand text-base font-bold text-yellow">/ {kicker}</p>
          <span className="mt-3 block h-0.5 w-12 bg-box-muted" aria-hidden="true" />
          {description ? (
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-box-muted">{description}</p>
          ) : null}
        </div>
        <h2 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
          {title}
        </h2>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-[1.5fr_1fr] md:items-end md:gap-10">
      <div>
        <p className="kicker">/ {kicker}</p>
        <h2 className="mt-2 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="text-base leading-relaxed text-muted md:pb-2 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
