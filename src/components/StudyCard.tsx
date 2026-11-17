import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { categoryOf, type Study } from "@/data/studies";
import { cn } from "@/lib/utils";

export function StudyCard({ study }: { study: Study }) {
  const published = study.status === "published";
  const category = categoryOf(study.category);

  const body = (
    <>
      <div className="relative flex items-start justify-between gap-5 p-6 sm:p-7">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-mono text-[0.64rem] tracking-[0.16em] text-gold">
              VOL. {study.volume}
            </span>
            <span className="text-[0.58rem] uppercase tracking-[0.16em] text-faint">
              {category.label}
            </span>
            {published ? (
              <span className="inline-flex items-center gap-1.5 text-[0.58rem] uppercase tracking-[0.14em] text-mint">
                <span className="status-dot" aria-hidden="true" />
                Open
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[0.58rem] uppercase tracking-[0.14em] text-faint">
                <span className="status-dot status-dot-wait" aria-hidden="true" />
                In preparation
              </span>
            )}
          </div>

          <h3 className="mt-3 font-display text-[1.65rem] leading-tight tracking-[-0.02em] text-ink sm:text-[1.8rem]">
            {published ? (
              <Link href={`/studies/${study.slug}`} className="transition-colors hover:text-gold">
                {study.title}
              </Link>
            ) : (
              study.title
            )}
          </h3>
          <p className="mt-1.5 text-[0.76rem] text-faint">{study.subtitle}</p>
        </div>

        <div className="shrink-0 text-right">
          <p className="arabic text-[1.45rem] text-ink">{study.rootArabic}</p>
          <p className="mt-1.5 font-mono text-[0.6rem] tracking-[0.18em] text-faint">
            {study.root}
          </p>
        </div>
      </div>

      <div className="relative px-6 pb-6 sm:px-7 sm:pb-7">
        <p className="text-[0.9rem] leading-relaxed text-muted">{study.summary}</p>

        {published && study.counts ? (
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="chip">{study.counts.verses} verses</span>
            <span className="chip">{study.counts.forms} forms</span>
            <span className="chip">
              {study.counts.direct}/{study.counts.verses} direct
            </span>
            <span className="chip">0 contradictions</span>
          </div>
        ) : (
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="chip">Not yet published</span>
            <span className="chip">Research in progress</span>
          </div>
        )}

        <div className="relative mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
          {published ? (
            <>
              <Link
                href={`/studies/${study.slug}`}
                className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-ink transition-colors hover:text-gold"
              >
                Enter the volume
                <ArrowRight className="size-3.5" />
              </Link>
              <a
                href={study.href}
                target="_blank"
                rel="noreferrer"
                className="relative z-20 inline-flex items-center gap-1 rounded-full border border-line bg-surface px-3 py-1.5 text-[0.72rem] font-medium text-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                Read the study
                <ArrowUpRight className="size-3" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </>
          ) : (
            <span className="text-[0.76rem] text-faint">
              This volume is still being researched.
            </span>
          )}
        </div>
      </div>
    </>
  );

  if (!published) {
    return (
      <article
        className={cn(
          "relative overflow-hidden rounded-[20px] border border-line bg-surface/40",
          study.accent === "gold" ? "shelf-spine-gold" : "shelf-spine-mint",
        )}
      >
        <span className="absolute inset-y-0 left-0 w-1 bg-line-strong" aria-hidden="true" />
        {body}
      </article>
    );
  }

  return (
    <article
      className={cn(
        "shelf-card group",
        study.accent === "gold" ? "shelf-spine-gold" : "shelf-spine-mint",
      )}
    >
      {body}
    </article>
  );
}

export function ShelfRow({ study }: { study: Study }) {
  const published = study.status === "published";

  const inner = (
    <>
      <span className="font-mono text-[0.62rem] tracking-[0.16em] text-gold">
        {study.volume}
      </span>
      <span className="min-w-0">
        <span className="block font-display text-[0.98rem] leading-snug text-ink">
          {study.title}
        </span>
        <span className="mt-1 block truncate text-[0.72rem] text-faint">
          {study.status === "published" ? study.poles?.[0].gloss : study.subtitle}
        </span>
      </span>
      <span className="flex items-center gap-3">
        <span className="arabic text-lg text-ink">{study.rootArabic}</span>
        {published ? (
          <ArrowUpRight className="size-3.5 text-faint" />
        ) : (
          <span className="text-[0.55rem] uppercase tracking-[0.12em] text-faint">
            soon
          </span>
        )}
      </span>
    </>
  );

  if (!published) {
    return <div className="volume-row opacity-60">{inner}</div>;
  }

  return (
    <Link
      href={`/studies/${study.slug}`}
      className="volume-row group transition-colors hover:bg-surface/50"
    >
      {inner}
    </Link>
  );
}
