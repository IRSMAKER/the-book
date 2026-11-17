export type CategoryId = "words" | "concepts" | "distinctions" | "narratives";

export type StudyStatus = "published" | "preparing";

export type Pole = {
  name: string;
  gloss: string;
};

export type Counts = {
  verses: number;
  occurrences: number;
  forms: number;
  direct: number;
  nuance: number;
};

export type StudySection = {
  label: string;
  href: string;
  body: string;
};

export type Study = {
  slug: string;
  volume: string;
  title: string;
  subtitle: string;
  root: string;
  rootArabic: string;
  category: CategoryId;
  status: StudyStatus;
  thesis: string;
  summary: string;
  href?: string;
  counts?: Counts;
  poles?: Pole[];
  sections?: StudySection[];
  accent: "gold" | "mint";
};

export const CATEGORIES: {
  id: CategoryId;
  label: string;
  description: string;
}[] = [
  {
    id: "words",
    label: "Quranic Words",
    description: "One root, every verse that carries it, one meaning.",
  },
  {
    id: "concepts",
    label: "Quranic Concepts",
    description: "A theme traced across the whole text, not a single root.",
  },
  {
    id: "distinctions",
    label: "Quranic Distinctions",
    description: "Two words the Quran keeps apart, and why the gap matters.",
  },
  {
    id: "narratives",
    label: "Quranic Narratives",
    description: "One account, read closely against its own grammar.",
  },
];

export const studies: Study[] = [
  {
    slug: "salah",
    volume: "01",
    title: "The Standing",
    subtitle: "A Quranic Study of S-L-W",
    root: "S-L-W",
    rootArabic: "ص-ل-و",
    category: "words",
    status: "published",
    thesis:
      "S-L-W names a standing-state within the full working reach of a power that determines one — sustained, renewed, settled.",
    summary:
      "The word usually translated “prayer” names a standing-state before it names an act. Read through fire, command, covenant, and community, the root holds one structure in three directions.",
    href: "https://salah-research.vercel.app",
    counts: { verses: 108, occurrences: 118, forms: 42, direct: 105, nuance: 3 },
    poles: [
      { name: "STATE", gloss: "the standing taken toward God" },
      { name: "DELIVERY", gloss: "the standing imposed within fire" },
      { name: "SITE", gloss: "the assigned place of standing" },
    ],
    sections: [
      { label: "The Journey", href: "/journey", body: "The research in order, from the question to the settled meaning." },
      { label: "The Word", href: "/poles", body: "The three-pole map, the noun lexicon, the tables, and the bridges." },
      { label: "108 Verses", href: "/verses", body: "Every verse with Arabic, a rendering, its form, its pole, and its fit." },
      { label: "Conclusion", href: "/conclusion", body: "The plain-language and detailed conclusions, with print and PDF." },
      { label: "Full Study", href: "/appendix", body: "The complete eighteen-part research document." },
    ],
    accent: "mint",
  },
  {
    slug: "zakah",
    volume: "02",
    title: "The Zakāh",
    subtitle: "A Quranic Study of Z-K-W",
    root: "Z-K-W",
    rootArabic: "ز-ك-و",
    category: "words",
    status: "published",
    thesis:
      "Z-K-W names purity-with-growth: the release of a portion that cleanses what remains and causes it to increase.",
    summary:
      "The word usually translated “charity” is a quality of the self before it is a payment. The study follows it from a pure soul, through the giving that produces it, to the God who alone makes it grow.",
    href: "https://zakah-research.vercel.app",
    counts: { verses: 56, occurrences: 59, forms: 20, direct: 56, nuance: 0 },
    poles: [
      { name: "STATE", gloss: "a quality of the living self" },
      { name: "ACT", gloss: "the giving that produces it" },
      { name: "GRANT", gloss: "the God who alone makes it work" },
    ],
    sections: [
      { label: "The Journey", href: "/journey", body: "The research in order, from the question to the settled meaning." },
      { label: "The Word", href: "/poles", body: "The three-pole map, the noun lexicon, the tables, and the bridges." },
      { label: "56 Verses", href: "/verses", body: "Every verse with Arabic, a rendering, its form, its pole, and its fit." },
      { label: "Conclusion", href: "/conclusion", body: "The plain-language and detailed conclusions, with print and PDF." },
      { label: "Full Study", href: "/appendix", body: "The complete eighteen-part research document." },
    ],
    accent: "gold",
  },
  {
    slug: "the-garden",
    volume: "03",
    title: "The Garden",
    subtitle: "A Study of Jannah, Sun, and Shade",
    root: "J-N-N",
    rootArabic: "ج-ن-ن",
    category: "concepts",
    status: "preparing",
    thesis:
      "Paradise is described by what it removes: no burning exposure, no lost shade, no labour without return.",
    summary:
      "A concept study rather than a single-root study. It reads the Garden together with the sun, the exposure, and the shade that surround it in the Quran’s own imagery.",
    accent: "mint",
  },
  {
    slug: "messenger-and-prophet",
    volume: "04",
    title: "Messenger and Prophet",
    subtitle: "A Study of Two Offices",
    root: "R-S-L · N-B-ʾ",
    rootArabic: "ر-س-ل · ن-ب-أ",
    category: "distinctions",
    status: "preparing",
    thesis:
      "The sending and the prophethood are not synonyms: one names the office of transmission, the other the appointment that carries it.",
    summary:
      "A distinction study. It follows where the Quran says “obey the Messenger” and where it speaks of prophets, and refuses to collapse the two into one word.",
    accent: "gold",
  },
  {
    slug: "the-birth-of-jesus",
    volume: "05",
    title: "The Birth of Jesus",
    subtitle: "A Reading of the Conception",
    root: "M-R-Y",
    rootArabic: "م-ر-ي",
    category: "narratives",
    status: "preparing",
    thesis:
      "The account is told through grammar: a guarded opening, a breath, and a command — with no vocabulary of ordinary insemination.",
    summary:
      "A narrative study. It reads the conception verses word by word, following the pronouns and the botanical language rather than the later stories told about them.",
    accent: "mint",
  },
];

export const publishedStudies = studies.filter((study) => study.status === "published");
export const preparingStudies = studies.filter((study) => study.status === "preparing");

export const studyBySlug = new Map(studies.map((study) => [study.slug, study]));

export const SERIES = {
  verses: publishedStudies.reduce((sum, study) => sum + (study.counts?.verses ?? 0), 0),
  occurrences: publishedStudies.reduce(
    (sum, study) => sum + (study.counts?.occurrences ?? 0),
    0,
  ),
  forms: publishedStudies.reduce((sum, study) => sum + (study.counts?.forms ?? 0), 0),
  direct: publishedStudies.reduce((sum, study) => sum + (study.counts?.direct ?? 0), 0),
  nuance: publishedStudies.reduce((sum, study) => sum + (study.counts?.nuance ?? 0), 0),
  contradictions: 0,
};

export function categoryOf(id: CategoryId) {
  return CATEGORIES.find((category) => category.id === id)!;
}
