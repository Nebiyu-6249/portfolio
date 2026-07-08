import type { ReactNode } from "react";

export function SectionHeading({
  kicker,
  title,
  children,
  id,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
  id?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="kicker" id={id ? `${id}-kicker` : undefined}>
        {kicker}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}
