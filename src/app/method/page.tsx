import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { publishedStudies, SERIES } from "@/data/studies";

export const metadata: Metadata = {
  title: "The Method",
  description:
    "How every volume in The Book is made: the corpus, root hygiene, contextual reading, late synthesis, and a verse-by-verse fit test.",
};

const steps = [
  {
    number: "01",
    title: "Collect the whole family",
    body: "Every word containing the root letters is pulled from the full 6,236-verse corpus. Matching is done on a diacritics-stripped copy so that no word is missed because of a vowel mark.",
  },
  {
    number: "02",
    title: "Exclude look-alikes",
    body: "A letter match is not a root match. Each candidate is read in context and either kept or excluded. In the Z-K-W study, Zechariah (root Z-K-R) and a pronoun suffix in 9:58 were read and removed.",
  },
  {
    number: "03",
    title: "Read every verse",
    body: "No sampling and no proof-texting. Each verse is studied with its surrounding passage, its grammar, its word-form, and the parallel formulas elsewhere in the Quran.",
  },
  {
    number: "04",
    title: "Order by function",
    body: "The verses are grouped into clusters by what they do — anchor, claim, commission, covenant, institution — and kept in canonical order inside each cluster.",
  },
  {
    number: "05",
    title: "Synthesize late",
    body: "No meaning is proposed until the whole corpus has been read. The thesis is written last, then taken back through every verse as a test rather than an illustration.",
  },
  {
    number: "06",
    title: "Publish the count",
    body: "The verification reports direct fits, explained nuances, and contradictions separately. A reading is only as strong as its published weak points.",
  },
];

export default function MethodPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="hero-glow opacity-70" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="eyebrow">The method</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.0] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
            How a volume is <span className="italic text-gold">actually made</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            The same six moves are used in every study on the shelf. The corpus, the
            exclusions, the notes, and the failures are published with the work, so the
            reading can be checked instead of trusted.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="card-flat p-5">
              <span className="font-mono text-xs text-gold">{step.number}</span>
              <h2 className="mt-3 font-display text-lg leading-snug text-ink">
                {step.title}
              </h2>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface/30">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow">The corpus</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink">
              A complete text, checked twice
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The studies use the Tanzil Simple-Minimal text: 6,236 verses, UTF-8, with
              partial diacritics. A stripped copy is built for reliable matching, and every
              candidate is verified by reading the verse itself.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-gold">·</span> 6,236 verses in the corpus
              </li>
              <li className="flex gap-2">
                <span className="text-gold">·</span> {SERIES.verses} verses read across the
                open volumes
              </li>
              <li className="flex gap-2">
                <span className="text-gold">·</span> {SERIES.occurrences} root occurrences
              </li>
              <li className="flex gap-2">
                <span className="text-gold">·</span> {SERIES.forms} word forms
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">The verification</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink">
              Three outcomes, never an average
            </h2>
            <dl className="mt-4 divide-y divide-line">
              {[
                [
                  "Direct fit",
                  "The verse reads naturally under the proposed meaning, with no adjustment.",
                ],
                [
                  "Explained nuance",
                  "The verse needs a stated adjustment. The adjustment is published in full.",
                ],
                [
                  "Contradiction",
                  "The verse cannot be reconciled with the meaning. The reading fails here.",
                ],
              ].map(([term, definition]) => (
                <div key={term} className="py-3.5">
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold">
                    {term}
                  </dt>
                  <dd className="mt-1.5 text-[0.84rem] leading-relaxed text-muted">
                    {definition}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[0.78rem] leading-relaxed text-faint">
              Current shelf: {SERIES.direct} direct fits, {SERIES.nuance} explained
              nuances, {SERIES.contradictions} contradictions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">The boundaries</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink">
              What these studies are not
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li>
                <span className="text-ink">Not a tafsīr survey.</span> The work does not
                collect commentators and adjudicate between them.
              </li>
              <li>
                <span className="text-ink">Not comparative Semitics.</span> No cognate
                language is used to settle a Quranic meaning.
              </li>
              <li>
                <span className="text-ink">Not a fatwa.</span> A root study describes how a
                word works in the text; it does not issue rulings.
              </li>
              <li>
                <span className="text-ink">Not a translation.</span> Renderings are
                research tools, kept consistent so that a reader can follow the argument.
              </li>
              <li>
                <span className="text-ink">Not final.</span> A verse that breaks a reading
                is published, and the count changes.
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">The rendering</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink">
              Do not smuggle the answer into the English
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <p>
                A translation can decide a study before it begins. So the renderings follow
                one rule: where an English word would import a meaning the research is
                testing, the Arabic term is left standing.
              </p>
              <p>
                In the Z-K-W volume, the noun <span className="text-ink">zakāh</span> is
                never translated. Hovering or focusing it shows the root meaning the study
                arrived at: <span className="text-gold">purity-with-growth</span>.
              </p>
              <p>
                In the S-L-W volume, the noun is rendered{" "}
                <span className="text-ink">the Standing</span>, capitalised, to mark it as
                the study’s technical rendering rather than the ordinary English word.
              </p>
              <p>
                Verbs, elatives, and adjectives are rendered normally. Each volume lists
                its own convention and keeps it consistent across every verse.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow">See it in practice</p>
              <h2 className="mt-3 font-display text-2xl tracking-tight text-ink sm:text-3xl">
                The method is only an argument until a volume uses it.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                Every study publishes its own verse-by-verse verification, including the
                cases that needed an explanation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {publishedStudies.map((study) => (
                <Link key={study.slug} href={`/studies/${study.slug}`} className="btn">
                  {study.title}
                  <ArrowRight className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          <p className="mt-8 text-[0.72rem] leading-relaxed text-faint">
            Found a verse that breaks a reading? Open an issue at{" "}
            <a
              href="https://github.com/IRSMAKER/the-book/issues"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-gold hover:text-ink"
            >
              github.com/IRSMAKER/the-book
              <ArrowUpRight className="size-3" />
            </a>
            . Corrections are published with the volume they change.
          </p>
        </div>
      </section>
    </>
  );
}
