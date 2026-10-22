export type NavLink = { href: string; label: string };

/** Liens de la navigation principale. Les ancres correspondent aux `id` des sections de la page d'accueil. */
export const NAV_LINKS: readonly NavLink[] = [
  { href: "/#services", label: "Services" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#tarifs", label: "Tarifs" },
  { href: "/#methode", label: "Méthode" },
  { href: "/#faq", label: "FAQ" },
];

export const FOOTER_COLUMNS: readonly { title: string; links: readonly NavLink[] }[] = [
  {
    title: "Services",
    links: [
      { href: "/#services", label: "Sites vitrines" },
      { href: "/#services", label: "Boutiques en ligne" },
      { href: "/#services", label: "Sur mesure" },
      { href: "/#services", label: "Maintenance" },
    ],
  },
  {
    title: "Explorer",
    links: [
      { href: "/#realisations", label: "Réalisations" },
      { href: "/#tarifs", label: "Tarifs" },
      { href: "/#methode", label: "Méthode" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "/#contact", label: "Formulaire de contact" },
      { href: "/#local", label: "Secteur Chauny et Aisne" },
    ],
  },
];

export const LEGAL_LINKS: readonly NavLink[] = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
];
