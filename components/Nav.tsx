"use client";

import Link from "next/link";

// The magnification dock at the bottom is the primary navigation, so the top
// bar is just a small brand mark.
export function Nav() {
  return (
    <header className="relative z-30">
      <div className="container-edge flex h-16 items-center">
        <Link href="/" className="inline-flex items-center gap-2.5 sk-card sk-press rot-e rad-blob px-3 py-1.5">
          <span className="grid h-6 w-6 place-items-center rounded-[10px_4px_10px_4px/4px_10px_4px_10px] border-2 border-ink bg-red font-display text-sm text-paper">
            n
          </span>
          <span className="font-display text-lg leading-none">Nebiyu Elias</span>
        </Link>
      </div>
    </header>
  );
}
