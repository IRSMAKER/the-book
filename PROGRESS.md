# The Book — Progress

A shelf for the completed Quranic word studies. Each volume keeps its own app; The Book
catalogues them, gives each a cover page, and explains the shared method.

## Plan

| # | Step | State |
|---|---|---|
| 1 | Scaffold the app from the series stack (Next 16, Tailwind 4, same fonts/tokens) | done |
| 2 | Define the study catalogue in `src/data/studies.ts` | done |
| 3 | Build the shared shell: brand mark, header, footer, theme, service worker | done |
| 4 | Build the home page: thesis, shelf, method, series totals, upcoming volumes | done |
| 5 | Build the library page grouped by category | done |
| 6 | Build the per-study cover pages with external entry links | done |
| 7 | Build the method page and the about/citation page | done |
| 8 | Add PWA, icons, OG image, robots, sitemap, 404 | done |
| 9 | Build, lint, browser-test every route, and fix defects | in progress |
| 10 | Create the public GitHub repo and deploy to Vercel | pending |
| 11 | Verify the live site and record the final status | pending |

## Decisions

- **The Book is a hub, not a merge.** The studies stay in their own apps. The Book holds
  the shelf, the cover pages, and the shared method.
- **No iframes, no copied verse libraries.** Each cover page links out to the live volume.
- **Only completed research is listed as open.** Garden, Messenger & Prophet, and the Birth
  of Jesus are shown as in preparation, without invented findings.
- **Design parity with the series.** Same dark/light tokens, Fraunces/Inter/Amiri, card
  system, eyebrow labels, and offset-chip detail.
- **The shelf is data-driven.** Adding a study is one entry in `src/data/studies.ts`.

## Series totals (published volumes)

| Measure | Value |
|---|---|
| Volumes open | 2 |
| Verses read | 164 |
| Root occurrences | 177 |
| Word forms | 62 |
| Direct fits | 161 |
| Explained nuances | 3 |
| Contradictions | 0 |

## Live links

| Item | URL |
|---|---|
| The Book | https://the-book.vercel.app |
| The Standing (S-L-W) | https://salah-research.vercel.app |
| The Zakāh (Z-K-W) | https://zakah-research.vercel.app |
| Repository | https://github.com/IRSMAKER/the-book |

## Verification log

To be filled after the build and browser pass.
