"use client";

import { useState } from "react";
import type { Certification } from "@/data/certifications";

const rots = ["rot-a", "rot-b", "rot-c", "rot-d", "rot-e", "rot-f"];
const rads = ["rad-1", "rad-2", "rad-3", "rad-4", "rad-5", "rad-blob"];

// Shows the uploaded certificate image if one exists at
// public/certificates/<slug>.jpg, otherwise a hand-drawn placeholder. When the
// file is added and the site is redeployed, the image replaces the placeholder
// with no code change needed.
export function CertCard({ cert, index = 0 }: { cert: Certification; index?: number }) {
  const [failed, setFailed] = useState(false);
  const src = `/certificates/${cert.slug}.jpg`;

  return (
    <article className={`sk-card sk-press ${rots[index % rots.length]} ${rads[index % rads.length]} flex h-full flex-col overflow-hidden`}>
      <div className="relative aspect-[4/3] w-full border-b-2 border-ink bg-raised">
        {failed ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
            <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-yellow text-ink">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </span>
            <span className="font-hand text-sm font-bold text-ink">image to upload</span>
            <code className="font-mono text-[0.65rem] text-muted">{cert.slug}.jpg</code>
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
        <h3 className="font-display text-lg leading-tight">{cert.title}</h3>
        <p className="mt-2 font-hand text-sm text-red">{cert.issuer}</p>
      </div>
    </article>
  );
}
