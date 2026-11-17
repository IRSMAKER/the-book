import Link from "next/link";
import { publishedStudies, preparingStudies } from "@/data/studies";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl tracking-tight text-ink">The Book</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            A shelf of Quranic studies. Each volume begins with a word, collects every
            verse that carries it, and tests one meaning against the whole.
          </p>
          <p className="mt-5 text-xs leading-relaxed text-faint">
            Research and writing by Muhammad Idrees. These are studies, not fatwas.
          </p>
        </div>

        <div>
          <p className="eyebrow">The shelf</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {publishedStudies.map((study) => (
              <li key={study.slug}>
                <Link
                  className="text-muted transition-colors hover:text-ink"
                  href={`/studies/${study.slug}`}
                >
                  {study.title}
                </Link>
              </li>
            ))}
            {preparingStudies.map((study) => (
              <li key={study.slug} className="text-faint">
                {study.title}
                <span className="ml-2 text-[0.62rem] uppercase tracking-[0.12em]">
                  in preparation
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Reference</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link className="text-muted transition-colors hover:text-ink" href="/library">
                The full library
              </Link>
            </li>
            <li>
              <Link className="text-muted transition-colors hover:text-ink" href="/method">
                How a volume is made
              </Link>
            </li>
            <li>
              <Link className="text-muted transition-colors hover:text-ink" href="/about">
                About &amp; citation
              </Link>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-1 text-muted transition-colors hover:text-ink"
                href="https://github.com/IRSMAKER/the-book"
                target="_blank"
                rel="noreferrer"
              >
                Source on GitHub
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 The Book. Built as a public research library.</p>
          <p lang="ar" dir="rtl" className="font-arabic text-sm text-muted">
            اقْرَأْ
          </p>
        </div>
      </div>
    </footer>
  );
}
