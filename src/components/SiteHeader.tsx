"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/library", label: "Library" },
  { href: "/method", label: "Method" },
  { href: "/about", label: "About" },
];

function Mark() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="size-8 shrink-0"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M16 10.2c-2.5-1.7-5.2-2.4-8.4-2.1v16.6c3.2-.3 5.9.4 8.4 2.1 2.5-1.7 5.2-2.4 8.4-2.1V8.1c-3.2-.3-5.9.4-8.4 2.1Z"
        stroke="var(--line-strong)"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path d="M16 10.2v16.6" stroke="var(--gold)" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="16" cy="5.6" r="1.9" fill="var(--mint)" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Mark />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink">
              The Book
            </span>
            <span className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-faint">
              Quranic studies
            </span>
          </span>
          <span className="sr-only">The Book — home</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-[0.8rem] font-medium transition-colors",
                  active
                    ? "bg-surface-2 text-ink"
                    : "text-muted hover:bg-surface hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full border border-line text-muted md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-background md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-3 text-sm",
                  pathname === link.href
                    ? "bg-surface-2 text-ink"
                    : "text-muted hover:bg-surface",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
