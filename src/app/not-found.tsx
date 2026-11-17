import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow opacity-60" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl">
          This page is not <span className="italic text-gold">on the shelf</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted">
          The volume you asked for is not here. The library has two open studies, and the
          rest are still being written.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/library" className="btn btn-primary">
            <ArrowLeft className="size-4" />
            The library
          </Link>
          <Link href="/" className="btn">
            The Book
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
