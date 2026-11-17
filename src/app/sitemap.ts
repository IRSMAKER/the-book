import type { MetadataRoute } from "next";
import { publishedStudies } from "@/data/studies";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://the-book.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/library", "/method", "/about"];

  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.7,
    })),
    ...publishedStudies.map((study) => ({
      url: `${base}/studies/${study.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
