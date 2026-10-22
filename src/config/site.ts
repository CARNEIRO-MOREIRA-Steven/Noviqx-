export const SITE = {
  name: "NOVIQX",
  tagline: "Solutions digitales",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://noviqx.fr").replace(/\/$/, ""),
  locale: "fr_FR",
  title: "NOVIQX | Création de sites web à Chauny et dans l’Aisne",
  description:
    "NOVIQX crée des sites vitrines, boutiques Shopify et solutions web sur mesure pour les entreprises. Design premium, SEO et maintenance dans l’Aisne.",
  /** Affichée uniquement si renseignée (voir .env.example). */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || null,
} as const;
