import type { ReactNode } from "react";

// Two header patterns lifted from the reference:
//  - "split": mono kicker + giant heading on the left, description on the right.
//  - "box":   a dark kicker box on the left, giant heading filling the rest.
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
      <div className="grid border border-line md:grid-cols-[minmax(0,20rem)_1fr]">
        <div className="flex flex-col justify-center gap-4 bg-box p-7 text-box-ink sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-box-muted">
            — {kicker}
          </p>
          <span className="h-px w-10 bg-box-muted/50" aria-hidden="true" />
          {description ? (
            <p className="max-w-xs text-sm leading-relaxed text-box-muted">{description}</p>
          ) : null}
        </div>
        <div className="flex items-center border-t border-line p-7 sm:p-10 md:border-l md:border-t-0">
          <h2 className="font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 border-b border-line pb-6 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-10">
      <div>
        <p className="kicker">— {kicker}</p>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="text-base leading-relaxed text-muted md:pb-2 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
