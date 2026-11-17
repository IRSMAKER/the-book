import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { publishedStudies, preparingStudies, SERIES } from "@/data/studies";

export const metadata: Metadata = {
  title: "About & Citation",
  description:
    "What The Book is, how the shelf is built, who made it, how the studies are limited, and how to cite them.",
};

const principles = [
  {
    number: "01",
    title: "The Quran as its own witness",
    body: "A word is allowed to mean what the whole corpus shows it doing. The study does not begin from a dictionary, a school, or a received translation.",
  },
  {
    number: "02",
    title: "The whole corpus, not the useful verses",
    body: "Every verse carrying the root is collected and read, including the ones that make the thesis uncomfortable. The awkward cases are where the work is tested.",
  },
  {
    number: "03",
    title: "Publish the working",
    body: "Notes, tables, exclusions, and failures are published beside the conclusion. A reader should be able to disagree with a specific step, not just the ending.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="hero-glow opacity-70" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="eyebrow">About the library</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.0] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
            A working library,
            <br />
            <span className="italic text-gold">not a pulpit.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            The Book collects independent, Quran-internal word studies. Each volume takes
            one Arabic word, reads every verse that carries it, and argues for a single
            meaning in public.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-3 sm:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.number} className="card-flat p-5">
              <span className="font-mono text-xs text-gold">{principle.number}</span>
              <h2 className="mt-3 font-display text-lg leading-snug text-ink">
                {principle.title}
              </h2>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface/30">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">How the shelf is built</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink">
              One shelf, separate volumes
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <p>
                The Book is a catalogue, not a container. Each study keeps its own app so
                that its verse library, filters, search, print view, downloads, and offline
                reading can be built around its own corpus.
              </p>
              <p>
                The cover page on this site gives the thesis, the counts, the three poles,
                and the five ways in. The study itself opens in its own tab and stays
                there.
              </p>
              <p>
                That separation is deliberate. It keeps each volume honest to its own
                material, and it keeps the shelf from turning into a single undifferentiated
                wall of text.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">What is open</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink">
              On the shelf today
            </h2>
            <ul className="mt-4 divide-y divide-line">
              {publishedStudies.map((study) => (
                <li key={study.slug}>
                  <Link
                    href={`/studies/${study.slug}`}
                    className="group flex items-center justify-between gap-4 py-3.5"
                  >
                    <span>
                      <span className="block text-sm text-ink">{study.title}</span>
                      <span className="mt-0.5 block text-[0.72rem] text-faint">
                        {study.subtitle}
                      </span>
                    </span>
                    <span className="flex items-center gap-2 text-[0.72rem] text-faint">
                      {study.counts?.verses} verses
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-[0.68rem] uppercase tracking-[0.16em] text-faint">
              In research
            </p>
            <ul className="mt-2 space-y-1.5 text-[0.82rem] text-muted">
              {preparingStudies.map((study) => (
                <li key={study.slug}>{study.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">The author</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink">
              Muhammad Idrees
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Research and writing by Muhammad Idrees. The studies are independent work,
              published openly so that the argument, the corpus, and the counts can be
              inspected by anyone who wants to check them.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The library is not affiliated with a school or institution. It is a public
              research notebook, kept in the open.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/IRSMAKER/the-book"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Source on GitHub
                <ArrowUpRight className="size-4" />
              </a>
              <Link href="/method" className="btn">
                The method
              </Link>
            </div>
          </div>

          <div>
            <p className="eyebrow">Limits</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink">
              What this is not
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li>
                <span className="text-ink">Not a fatwa.</span> No ruling is issued here. A
                root study describes how a word works in the text.
              </li>
              <li>
                <span className="text-ink">Not a translation.</span> The renderings are
                research tools, not a substitute for the Arabic.
              </li>
              <li>
                <span className="text-ink">Not complete.</span> The shelf grows, and a
                volume can be revised when a verse demands it.
              </li>
              <li>
                <span className="text-ink">Not the last word.</span> The counts are
                published so that a better reading can be argued against them.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
          <p className="eyebrow">Citation</p>
          <div className="card-flat mt-4 p-6">
            <p className="text-sm leading-relaxed text-muted">
              Idrees, Muhammad. <em>The Book: A Library of Quranic Studies</em>. 2026. Web.{" "}
              <span className="font-mono text-[0.78rem] text-ink">
                https://the-book-sage.vercel.app
              </span>
            </p>
            <p className="mt-3 text-[0.76rem] leading-relaxed text-faint">
              Cite an individual volume from its own cover page. The shelf totals are{" "}
              {SERIES.verses} verses, {SERIES.occurrences} occurrences, {SERIES.forms} forms,{" "}
              {SERIES.direct} direct fits, {SERIES.nuance} explained nuances, and{" "}
              {SERIES.contradictions} contradictions.
            </p>
          </div>
          <p className="mt-4 text-[0.72rem] leading-relaxed text-faint">
            Last updated November 2026.
          </p>
        </div>
      </section>
    </>
  );
}
