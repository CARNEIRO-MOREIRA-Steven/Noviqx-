import type { ProjectTypeValue } from "@/lib/contact";

export type Service = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  /** Style de la carte. */
  variant?: "default" | "light" | "outline";
  features?: readonly string[];
  /** Liste « terminal » (carte sur mesure). Les lignes commençant par // sont atténuées. */
  stack?: readonly string[];
  split?: readonly { title: string; text: string }[];
  tags?: readonly string[];
  cta: { label: string; type: ProjectTypeValue };
};

/**
 * L'ordre compte : la grille alterne 7/5 puis 5/7 colonnes sur ordinateur
 * (voir Services.module.css).
 */
export const SERVICES: readonly Service[] = [
  {
    id: "vitrine",
    eyebrow: "Site vitrine",
    title: "Création de sites vitrines",
    description:
      "Des sites professionnels pour artisans, indépendants, commerçants et petites entreprises, qui présentent clairement votre activité et donnent envie de vous contacter.",
    features: [
      "Design personnalisé",
      "Expérience utilisateur claire et responsive",
      "Bases SEO solides",
      "Formulaires de contact efficaces",
      "Structure évolutive et gestion de contenu adaptée",
    ],
    tags: ["WordPress", "Développement spécifique si pertinent"],
    cta: { label: "Créer mon site vitrine", type: "vitrine" },
  },
  {
    id: "boutique",
    eyebrow: "E-commerce",
    title: "Création de boutiques en ligne",
    description:
      "Une boutique pensée pour valoriser vos produits et faciliter l’achat, avec une prise en main accompagnée.",
    variant: "light",
    features: [
      "Présentation produit soignée",
      "Navigation fluide, achat optimisé",
      "Paiements et livraison paramétrés",
      "Catégories, collections et SEO technique",
    ],
    tags: ["Shopify", "WooCommerce"],
    cta: { label: "Lancer ma boutique", type: "boutique" },
  },
  {
    id: "sur-mesure",
    eyebrow: "Sur mesure",
    title: "Développement web sur mesure",
    description:
      "Pour les projets qui demandent plus de flexibilité. Le sur-mesure n’est pas toujours la meilleure option : le choix de la technologie dépend de vos objectifs, de votre budget et de la complexité du besoin.",
    variant: "outline",
    stack: [
      "interfaces spécifiques",
      "fonctionnalités personnalisées",
      "intégration d’API",
      "automatisation de tâches",
      "interfaces métier simples",
      "// refonte ou évolution d’un projet existant",
    ],
    tags: ["React", "Next.js", "TypeScript"],
    cta: { label: "Étudier mon projet", type: "surmesure" },
  },
  {
    id: "maintenance",
    eyebrow: "Sites existants",
    title: "Maintenance, dépannage et optimisation",
    description:
      "Un accompagnement technique pour les sites déjà en ligne : corrections, performances, compatibilité. Selon la faisabilité, sur WordPress, Shopify ou un projet spécifique.",
    split: [
      {
        title: "Intervention ponctuelle",
        text: "Correction de bug, problème d’affichage, ajustement responsive. Un devis est établi après analyse.",
      },
      {
        title: "Contrat de maintenance",
        text: "Mises à jour, vérifications de compatibilité et suivi technique, dans un périmètre défini à l’avance.",
      },
    ],
    cta: { label: "Corriger un problème sur mon site", type: "maintenance" },
  },
];

export const BAND_ITEMS: readonly { title: string; caption: string }[] = [
  { title: "Sites vitrines", caption: "Présenter votre activité" },
  { title: "Boutiques e-commerce", caption: "Vendre en ligne" },
  { title: "Développement sur mesure", caption: "Un besoin spécifique" },
  { title: "Maintenance et optimisation", caption: "Faire durer votre site" },
];
