"use client";

import { useEffect, useRef, useState } from "react";
import { Tape } from "./Sketch";

// Shows the portrait photo if one exists at public/nebiyu.jpg, otherwise a
// hand-drawn placeholder. Drop the file in and it appears on the next deploy,
// no code change needed.
export function Portrait() {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // If the image 404s during SSR, the error event fires before React attaches
  // onError, so also check the loaded state once on mount.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-xs sk-card rot-b rad-3 p-3">
      <Tape className="left-1/2 -top-4 -translate-x-1/2" rotate={-3} />
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[6px_20px_6px_20px/20px_6px_20px_6px] border-2 border-ink bg-raised">
        {failed ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-ink bg-yellow text-ink">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 21a8 8 0 0 0-16 0" />
                <circle cx="12" cy="8" r="4" />
              </svg>
            </span>
            <span className="font-hand text-sm font-bold text-ink">add your photo</span>
            <code className="font-mono text-[0.65rem] text-muted">public/nebiyu.jpg</code>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src="/nebiyu.jpg"
            alt="Nebiyu Elias Gemedu"
            decoding="async"
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <p className="mt-2 text-center font-hand text-sm text-red">Nebiyu, in person</p>
    </div>
  );
}
