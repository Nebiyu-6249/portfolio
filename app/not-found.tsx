import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="sk-card rot-c rad-2 max-w-lg p-8 text-center sm:p-10">
        <p className="kicker">404</p>
        <h1 className="mt-2 font-display text-4xl leading-none sm:text-5xl">
          This page is not in the corpus.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you are looking for does not exist. Rather than guess, here is the way
          back.
        </p>
        <Link href="/" className="sk-btn sk-btn-primary rot-a mt-8">
          Back home
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
