import type { BudgetValue, ProjectTypeValue } from "@/lib/contact";

/**
 * Grille tarifaire de départ, à valider avant publication.
 * Aucun tarif horaire ou journalier public : il n'a pas été validé.
 */
export type Plan = {
  id: string;
  name: string;
  price: string;
  target: string;
  features: readonly string[];
  limit: string;
  highlight?: boolean;
  badge?: string;
  cta: { label: string; type: ProjectTypeValue; budget: BudgetValue };
};

export const PLANS: readonly Plan[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    price: "1 790 €",
    target:
      "Pour les indépendants, artisans et petites entreprises qui veulent une présence professionnelle en ligne.",
    features: [
      "Site vitrine au design personnalisé",
      "Jusqu’à 5 pages principales",
      "Mobile, tablette et ordinateur",
      "Formulaire de contact",
      "SEO technique de base",
      "Mise en ligne et vérifications",
      "Accompagnement à la prise en main",
    ],
    limit:
      "contenus, fonctionnalités particulières, licences et prestations externes peuvent être chiffrés en complément.",
    cta: { label: "Choisir Essentiel", type: "vitrine", budget: "1500-2500" },
  },
  {
    id: "pro",
    name: "Pro",
    price: "2 490 €",
    target:
      "Pour les entreprises qui veulent un site plus complet, avec plus de possibilités de présentation et de conversion.",
    features: [
      "Contenu de l’Essentiel, adapté au projet",
      "Architecture de contenu approfondie",
      "Pages de services détaillées",
      "Parcours utilisateurs renforcés",
      "Appels à l’action optimisés",
      "SEO on-page sur les pages convenues",
      "Contrôles de performance et de compatibilité",
    ],
    limit: "nombre de pages et de fonctionnalités définis au devis, jamais illimités.",
    highlight: true,
    badge: "Le plus complet",
    cta: { label: "Choisir Pro", type: "vitrine", budget: "1500-2500" },
  },
  {
    id: "expert",
    name: "Expert",
    price: "3 490 €",
    target:
      "Pour les projets qui demandent une architecture avancée, des fonctionnalités spécifiques ou une approche technique plus poussée.",
    features: [
      "Étude du besoin et définition du périmètre",
      "Architecture propre au projet",
      "Fonctionnalités convenues et intégrations",
      "Optimisation des performances",
      "Vérifications techniques approfondies",
      "Documentation ou transfert de compétences selon le projet",
    ],
    limit: "le prix final dépend du périmètre, des intégrations et de la complexité technique.",
    cta: { label: "Étudier mon projet", type: "surmesure", budget: "2500-4000" },
  },
];

export const SHOP_OFFER = {
  name: "Boutique en ligne",
  price: "1 790 €",
  target:
    "Pour un périmètre e-commerce simple, sous réserve de validation du cahier des charges. Shopify ou WooCommerce selon vos besoins.",
  separate:
    "migrations, catalogues volumineux, développements spécifiques, applications payantes et intégrations complexes.",
  features: [
    "Configuration de la boutique",
    "Collections ou catégories organisées",
    "Configuration initiale des produits, dans la limite définie au devis",
    "Paiements et livraison paramétrés",
    "Pages essentielles",
    "Adaptation mobile et SEO technique de base",
    "Tests avant lancement",
  ],
  cta: { label: "Créer ma boutique en ligne", type: "boutique", budget: "1000-1500" },
} as const satisfies {
  name: string;
  price: string;
  target: string;
  separate: string;
  features: readonly string[];
  cta: { label: string; type: ProjectTypeValue; budget: BudgetValue };
};

export const ADDONS: readonly { label: string; value: string; accent?: boolean }[] = [
  { label: "Maintenance et suivi technique", value: "à partir de 60 €/mois", accent: true },
  { label: "Maintenance renforcée ou e-commerce", value: "à partir de 85 €/mois, selon le périmètre", accent: true },
  { label: "Correction de bug", value: "sur devis, selon la complexité" },
  { label: "Intervention ponctuelle", value: "devis après analyse" },
  { label: "Refonte de site existant", value: "sur devis" },
  { label: "Fonctionnalité sur mesure", value: "sur devis" },
  { label: "Optimisation SEO complémentaire", value: "sur devis" },
  { label: "Ajout de pages ou de fonctionnalités", value: "selon le périmètre demandé" },
];

export const PRICING_NOTE =
  "Chaque projet est différent. Les tarifs indiqués correspondent à des prestations de départ et le devis précise les fonctionnalités, les livrables, les délais et les éventuelles options.";
