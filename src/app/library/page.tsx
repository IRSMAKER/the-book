import type { Metadata } from "next";
import { StudyCard } from "@/components/StudyCard";
import {
  CATEGORIES,
  publishedStudies,
  preparingStudies,
  studies,
} from "@/data/studies";

export const metadata: Metadata = {
  title: "The Library",
  description:
    "Every volume on the shelf: two open Quranic studies and the volumes still in research.",
};

export default function LibraryPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="hero-glow opacity-70" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="eyebrow">The library</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.0] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
            The <span className="italic text-gold">shelf</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Two volumes are open. Each is a complete study in its own app: a journey, a
            word map, every verse, a conclusion, and the full research document. The Book
            is the shelf that holds them.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="chip chip-active">{publishedStudies.length} volumes open</span>
            <span className="chip">{preparingStudies.length} in preparation</span>
            <span className="chip">{studies.length} projected</span>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        {CATEGORIES.map((category) => {
          const items = studies.filter((study) => study.category === category.id);
          if (items.length === 0) return null;
          const open = items.filter((study) => study.status === "published").length;

          return (
            <section key={category.id} className="mb-14 last:mb-0">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-line pb-4">
                <div>
                  <h2 className="font-display text-2xl tracking-tight text-ink">
                    {category.label}
                  </h2>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted">
                    {category.description}
                  </p>
                </div>
                <span className="text-[0.6rem] uppercase tracking-[0.16em] text-faint">
                  {open} of {items.length} open
                </span>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {items.map((study) => (
                  <StudyCard key={study.slug} study={study} />
                ))}
              </div>
            </section>
          );
        })}

        <div className="mt-16 rounded-2xl border border-line bg-surface/50 p-6 sm:p-8">
          <p className="eyebrow">How to read the shelf</p>
          <div className="mt-4 grid gap-5 text-[0.85rem] leading-relaxed text-muted sm:grid-cols-3">
            <p>
              <span className="text-ink">Each volume is complete.</span> Opening a study
              leaves The Book and enters its own app. Your place in one study is not tied to
              another.
            </p>
            <p>
              <span className="text-ink">The method is shared.</span> Every volume uses the
              same corpus, the same root hygiene, and the same verse-by-verse verification.
            </p>
            <p>
              <span className="text-ink">Nothing is merged.</span> A verse library stays in
              its own study, with its own forms, filters, and notes. The shelf only points.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
