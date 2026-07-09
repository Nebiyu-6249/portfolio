"use client";

import { useState } from "react";
import type { Certification } from "@/data/certifications";

// Shows the uploaded certificate image if one exists at
// public/certificates/<slug>.jpg, otherwise a styled placeholder. When the file
// is added and the site is redeployed, the image replaces the placeholder with
// no code change needed.
export function CertCard({ cert }: { cert: Certification }) {
  const [failed, setFailed] = useState(false);
  const src = `/certificates/${cert.slug}.jpg`;

  return (
    <article className="flex h-full flex-col border border-line bg-surface">
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line bg-raised">
        {failed ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-faint">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </span>
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-faint">
              Image to upload
            </span>
            <code className="font-mono text-[0.62rem] text-faint/80">{cert.slug}.jpg</code>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={`${cert.title} certificate`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-bold leading-snug tracking-tight">
          {cert.title}
        </h3>
        <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-wide text-faint">
          {cert.issuer}
        </p>
      </div>
    </article>
  );
}
