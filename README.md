# The Book — A Library of Quranic Studies

A shelf for the Quranic word studies. **The Book** does not merge the studies into one document. Each volume keeps its own app — its own journey, word map, verse library, conclusion, print view, and full research document — and The Book holds the cover page and the catalogue.

**Thesis of the shelf:** every volume begins with one Arabic word, collects every verse that carries it, reads each verse in context, and tests a single meaning against the whole. The method is shared; the material is not.

## What is inside

| Route | Content |
|---|---|
| `/` | The premise, the shelf, the four moves of the method, the series totals, and the volumes in preparation |
| `/library` | Every volume, grouped by category, with open and in-preparation states |
| `/studies/salah` | Cover page for **The Standing** — thesis, counts, three poles, five ways in, and the external study link |
| `/studies/zakah` | Cover page for **The Zakāh** — thesis, counts, three poles, five ways in, and the external study link |
| `/method` | The shared method: corpus, root hygiene, contextual reading, late synthesis, verification, boundaries |
| `/about` | What the library is, who made it, its limits, and how to cite it |

The studies themselves live at:

- **The Standing** — <https://salah-research.vercel.app>
- **The Zakāh** — <https://zakah-research.vercel.app>

The default site URL is `https://the-book.vercel.app`, overridable with `NEXT_PUBLIC_SITE_URL`.

## Design rule

The Book is a catalogue, not a container.

- A volume is never copied into The Book, and never rendered in an iframe.
- The cover page gives the thesis, the counts, the poles, and the entry points.
- Every study action opens the volume's own app in a new tab.
- A published volume is listed only when its research is complete enough to stand alone.
- In-preparation volumes are listed without links and without invented findings.

## Add a volume

Everything on the shelf is driven by `src/data/studies.ts`.

1. Add a `Study` entry with `status: "published"` and an `href`.
2. Fill `counts`, `poles`, and `sections`.
3. The library, home page, footer, sitemap, study route, and previous/next navigation all update automatically.
4. Run `npm run build`.

Preparing volumes use `status: "preparing"` and no `href`; they are rendered as non-links.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- `next/font` — Fraunces (display), Inter (body), Amiri (Arabic)
- Static content only: no database, no server state
- PWA: manifest + service worker for offline reading
- Deployed on Vercel

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build
npm run start
npm run lint
```

## Credit

Research and writing by **Muhammad Idrees**. The studies are independent work, not a fatwa and not a translation.
