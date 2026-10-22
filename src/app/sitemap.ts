import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

/**
 * Pages indexables. Les pages légales sont volontairement absentes tant qu'elles
 * sont en noindex (voir checklist) ; les ajouter une fois leur texte final publié.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE.url}/`, changeFrequency: "monthly", priority: 1 }];
}
