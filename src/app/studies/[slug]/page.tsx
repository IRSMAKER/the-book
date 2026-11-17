import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  categoryOf,
  publishedStudies,
  studyBySlug,
} from "@/data/studies";

export const instant = false;

export function generateStaticParams() {
  return publishedStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = studyBySlug.get(slug);
  if (!study) return { title: "Volume not found" };

  return {
    title: study.title,
    description: study.thesis,
    alternates: { canonical: `/studies/${study.slug}` },
    openGraph: {
      title: `${study.title} — ${study.subtitle}`,
      description: study.thesis,
      url: `/studies/${study.slug}`,
    },
  };
}

export default async function StudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = studyBySlug.get(slug);
  if (!study || study.status !== "published" || !study.href || !study.counts) {
    notFound();
  }

  const category = categoryOf(study.category);
  const index = publishedStudies.findIndex((item) => item.slug === study.slug);
  const previous = publishedStudies[index - 1] ?? publishedStudies[publishedStudies.length - 1];
  const next = publishedStudies[index + 1] ?? publishedStudies[0];
  const neighbours =
    previous.slug === next.slug
      ? [{ study: previous, label: "The other volume" }]
      : [
          { study: previous, label: "Previous volume" },
          { study: next, label: "Next volume" },
        ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="hero-glow" aria-hidden="true" />
        <div className="grid-fade" aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <Link
            href="/library"
            className="inline-flex items-center gap-1.5 text-[0.78rem] text-faint transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-3.5" />
            The library
          </Link>

          <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-mono text-[0.66rem] tracking-[0.16em] text-gold">
              VOL. {study.volume}
            </span>
            <span className="text-[0.58rem] uppercase tracking-[0.16em] text-faint">
              {category.label}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.58rem] uppercase tracking-[0.14em] text-mint">
              <span className="status-dot" aria-hidden="true" />
              Open
            </span>
          </div>

          <div className="mt-5 grid items-end gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="font-display text-[3rem] leading-[0.96] tracking-[-0.035em] text-ink sm:text-6xl lg:text-7xl">
                {study.title}
              </h1>
              <p className="mt-3 text-[0.85rem] uppercase tracking-[0.16em] text-faint">
                {study.subtitle}
              </p>
              <p className="mt-7 max-w-2xl border-l-2 border-gold/60 pl-4 font-display text-[1.08rem] leading-relaxed text-ink/85 sm:text-[1.2rem]">
                {study.thesis}
              </p>
            </div>

            <div className="md:text-right">
              <p className="arabic text-[3.6rem] leading-none text-ink sm:text-[4.2rem]">
                {study.rootArabic}
              </p>
              <p className="mt-2 font-mono text-[0.66rem] tracking-[0.24em] text-faint">
                {study.root}
              </p>
              <p className="mt-4 text-[0.72rem] leading-relaxed text-faint">
                {study.counts.verses} verses · {study.counts.occurrences} occurrences ·{" "}
                {study.counts.forms} forms
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={study.href}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Open the study
              <ArrowUpRight className="size-4" />
            </a>
            <Link href="/library" className="btn">
              All volumes
            </Link>
            <span className="text-[0.7rem] text-faint sm:ml-2">
              Opens in a new tab at{" "}
              <span className="font-mono text-[0.66rem]">
                {study.href.replace("https://", "")}
              </span>
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-5">
          {[
            [study.counts.verses, "verses"],
            [study.counts.occurrences, "occurrences"],
            [study.counts.forms, "word forms"],
            [study.counts.direct, "direct fits"],
            [study.counts.nuance, "explained nuances"],
          ].map(([value, label]) => (
            <div key={String(label)} className="bg-background px-5 py-5 text-center">
              <p className="font-display text-2xl tracking-tight text-ink">{value}</p>
              <p className="mt-1.5 text-[0.58rem] uppercase tracking-[0.14em] text-faint">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-18">
        <section>
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">What the study found</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink sm:text-3xl">
              One root, three poles
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The same stem names a quality, an act, and a grant. The poles are not
              separate meanings; they are three directions of one structure.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {study.poles?.map((pole, poleIndex) => (
              <div key={pole.name} className="card-flat p-5">
                <span className="font-mono text-xs text-gold">
                  {String(poleIndex + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold">
                  {pole.name}
                </p>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                  {pole.gloss}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-line pb-4">
            <div>
              <p className="eyebrow">Inside the volume</p>
              <h2 className="mt-3 font-display text-2xl tracking-tight text-ink sm:text-3xl">
                Five ways into the study
              </h2>
            </div>
            <span className="text-[0.6rem] uppercase tracking-[0.16em] text-faint">
              Opens the volume
            </span>
          </div>

          <ul className="divide-y divide-line">
            {study.sections?.map((section) => (
              <li key={section.label}>
                <a
                  href={`${study.href}${section.href}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-6 py-5 transition-colors hover:text-ink"
                >
                  <span className="min-w-0">
                    <span className="block font-display text-lg text-ink">
                      {section.label}
                    </span>
                    <span className="mt-1 block text-[0.82rem] leading-relaxed text-muted">
                      {section.body}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 grid gap-6 rounded-2xl border border-line bg-surface/40 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Why a separate app</p>
            <h2 className="mt-3 font-display text-2xl leading-snug tracking-tight text-ink">
              The volume stays whole.
            </h2>
          </div>
          <div className="space-y-3 text-[0.87rem] leading-relaxed text-muted">
            <p>
              This study was built as its own app so that its verse library, filters,
              print view, downloads, and offline reading could be designed around its own
              corpus — {study.counts.verses} verses, not a shared template.
            </p>
            <p>
              The Book does not copy or merge that work. It keeps the shelf: one place to
              see what exists, what each volume found, and where to enter it.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <p className="eyebrow">Keep reading</p>
          <div
            className={
              neighbours.length > 1
                ? "mt-4 grid gap-4 sm:grid-cols-2"
                : "mt-4 grid gap-4"
            }
          >
            {neighbours.map((neighbour) => (
              <Link
                key={neighbour.study.slug}
                href={`/studies/${neighbour.study.slug}`}
                className="card-flat group flex items-center justify-between gap-4 p-5 transition-colors hover:border-line-strong"
              >
                <span>
                  <span className="flex items-center gap-1.5 text-[0.58rem] uppercase tracking-[0.14em] text-faint">
                    <ArrowLeft className="size-3" />
                    {neighbour.label}
                  </span>
                  <span className="mt-2 block font-display text-lg text-ink">
                    {neighbour.study.title}
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <span className="arabic text-xl text-gold">
                    {neighbour.study.rootArabic}
                  </span>
                  <ArrowRight className="size-4 text-faint transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-line pt-6">
          <p className="text-[0.72rem] leading-relaxed text-faint">
            <span className="text-muted">Cite this volume.</span> Idrees, Muhammad.{" "}
            <em>
              {study.title}: {study.subtitle}
            </em>
            . 2026. Web.{" "}
            <span className="font-mono text-[0.68rem]">{study.href}</span>
          </p>
        </section>
      </div>
    </>
  );
}
