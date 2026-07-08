import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <p className="kicker">404</p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          This page is not in the corpus.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you are looking for does not exist. Rather than guess, here is the way
          back.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
        >
          Back home
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
