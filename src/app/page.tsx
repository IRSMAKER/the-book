import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { StudyCard, ShelfRow } from "@/components/StudyCard";
import {
  SERIES,
  publishedStudies,
  preparingStudies,
  categoryOf,
} from "@/data/studies";

export const metadata: Metadata = {
  title: "The Book — A Library of Quranic Studies",
  description:
    "A shelf of Quranic studies, each built from the root up: every verse collected, every context read, one meaning tested against the whole.",
};

const steps = [
  {
    number: "01",
    title: "Collect the family",
    body: "Every word carrying the root letters is pulled from the full 6,236-verse corpus, then filtered by reading each candidate in context.",
  },
  {
    number: "02",
    title: "Read every verse",
    body: "No sampling. Each verse is studied with its passage, its grammar, its word-form, and the parallel formulas elsewhere in the Quran.",
  },
  {
    number: "03",
    title: "Test one meaning",
    body: "A meaning is proposed only after the whole corpus is read, then taken back through every verse and counted as a direct fit, a nuance, or a contradiction.",
  },
  {
    number: "04",
    title: "Publish the working",
    body: "The verses, the notes, the tables, and the full research document are published together, so a reader can check the work rather than trust it.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="hero-glow" aria-hidden="true" />
        <div className="grid-fade" aria-hidden="true" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 md:grid-cols-[1.08fr_0.92fr] md:py-24 lg:py-28">
          <div>
            <p className="eyebrow animate-rise">The Book · Quranic studies</p>
            <h1 className="animate-rise mt-5 font-display text-[3.3rem] leading-[0.94] tracking-[-0.035em] text-ink sm:text-6xl lg:text-7xl">
              Read the Book,{" "}
              <span className="italic text-gold">word by word.</span>
            </h1>
            <p className="animate-rise-2 mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted sm:text-lg">
              The Book is a library of Quranic studies. Each volume begins with one Arabic
              word, collects every verse that carries it, reads each one in context, and
              tests a single meaning against the whole.
            </p>
            <p className="animate-rise-2 mt-4 max-w-xl text-[0.92rem] leading-relaxed text-faint">
              No dictionary in the driver’s seat. No school, no translation, no inherited
              definition. The Quran is read as its own witness.
            </p>

            <div className="animate-rise-3 mt-8 flex flex-wrap items-center gap-3">
              <Link href="/library" className="btn btn-primary">
                Enter the library
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/method" className="btn">
                How a volume is made
              </Link>
            </div>

            <p className="animate-rise-3 mt-6 text-[0.74rem] uppercase tracking-[0.14em] text-faint">
              {publishedStudies.length} volumes open · {SERIES.verses} verses read ·{" "}
              {SERIES.contradictions} contradictions
            </p>
          </div>

          <div className="relative animate-rise-2">
            <div
              className="absolute inset-x-4 -bottom-3 top-4 rounded-[22px] border border-line bg-surface/40"
              aria-hidden="true"
            />
            <div className="card relative p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <p className="eyebrow">On the shelf</p>
                <span className="inline-flex items-center gap-1.5 text-[0.6rem] uppercase tracking-[0.14em] text-mint">
                  <span className="status-dot" aria-hidden="true" />
                  {publishedStudies.length} open
                </span>
              </div>

              <div className="mt-1">
                {publishedStudies.map((study) => (
                  <ShelfRow key={study.slug} study={study} />
                ))}
              </div>

              <div className="mt-2 border-t border-line pt-4">
                <p className="eyebrow">Being written</p>
                <div className="mt-1">
                  {preparingStudies.map((study) => (
                    <ShelfRow key={study.slug} study={study} />
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-line pt-4 text-center">
                {[
                  [SERIES.verses, "verses"],
                  [SERIES.occurrences, "occurrences"],
                  [SERIES.direct, "direct fits"],
                ].map(([value, label]) => (
                  <div key={String(label)}>
                    <p className="font-display text-lg text-ink">{value}</p>
                    <p className="text-[0.58rem] uppercase tracking-[0.12em] text-faint">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">The shelf</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Two volumes, one method
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Each study is a complete app of its own — journey, word map, verse library,
              conclusion, and full document. The Book holds the shelf; the volumes stay
              whole.
            </p>
          </div>
          <Link
            href="/library"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            See the full library
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {publishedStudies.map((study) => (
            <StudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface/30">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">The method</p>
              <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
                A study you can check,
                <br />
                not a claim you must trust.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                The method is the same in every volume, and it is published with the work.
                Nothing depends on a source the reader cannot open.
              </p>
              <Link
                href="/method"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-gold transition-colors hover:text-ink"
              >
                Read the full method
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <ol className="grid gap-3 sm:grid-cols-2">
              {steps.map((step) => (
                <li key={step.number} className="card-flat p-5">
                  <span className="font-mono text-xs text-gold">{step.number}</span>
                  <h3 className="mt-3 font-display text-lg leading-snug text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">The standard</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Every verse is counted
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            The verification is not an average. Direct fits, explained nuances, and
            contradictions are reported separately, so a reader can see exactly where the
            reading is strong and where it is stretched.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {[
            [SERIES.verses, "verses read"],
            [SERIES.occurrences, "occurrences"],
            [SERIES.forms, "word forms"],
            [SERIES.direct, "direct fits"],
            [SERIES.nuance, "explained nuances"],
            [SERIES.contradictions, "contradictions"],
          ].map(([value, label]) => (
            <div key={String(label)} className="bg-surface px-5 py-6 text-center">
              <p className="font-display text-3xl tracking-tight text-ink">{value}</p>
              <p className="mt-2 text-[0.6rem] uppercase tracking-[0.14em] text-faint">
                {label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[0.74rem] leading-relaxed text-faint">
          Totals across the {publishedStudies.length} open volumes. Each volume also
          publishes its own verse-by-verse verification.
        </p>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto w-full max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <p className="quote-mark" aria-hidden="true">
            “
          </p>
          <p className="mt-4 font-display text-2xl leading-snug tracking-tight text-ink sm:text-3xl">
            My Lord, increase me in knowledge.
          </p>
          <p className="mt-3 text-[0.72rem] uppercase tracking-[0.18em] text-faint">
            Qur’an 20:114
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Being written</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink sm:text-3xl">
              Next on the shelf
            </h2>
          </div>
          <p className="max-w-sm text-[0.78rem] leading-relaxed text-faint">
            A volume is listed only when its reading is complete enough to stand on its
            own. These are still in research.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {preparingStudies.map((study) => (
            <article key={study.slug} className="card-flat p-5">
              <div className="flex items-center justify-between">
                <span className="text-[0.58rem] uppercase tracking-[0.16em] text-faint">
                  {categoryOf(study.category).label}
                </span>
                <span className="status-dot status-dot-wait" aria-hidden="true" />
              </div>
              <h3 className="mt-3 font-display text-xl leading-snug text-ink">
                {study.title}
              </h3>
              <p className="mt-1 text-[0.72rem] text-faint">{study.subtitle}</p>
              <p className="mt-3 text-[0.82rem] leading-relaxed text-muted">
                {study.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div className="card flex flex-col items-start justify-between gap-6 p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="eyebrow">Start anywhere</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink sm:text-3xl">
              Each volume stands alone.
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
              Begin with the word you came for, or read how the shelf is built.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/library" className="btn btn-gold">
              Browse the shelf
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="https://zakah-research.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Open the newest volume
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
