
import Tremplin from "../app/Tremplin.png";
import Casamance from "../app/casamance.png";
import LespaceDunInstant from "../app/lespaced1instant.png";

export type ProjectCategory = "vitrine" | "ecommerce" | "reservation";

export type Project = {
  id: string;
  category: ProjectCategory;
  sector: string;
  visual: "craft" | "shop" | "tool";
  name: string;
  type: string;
  description: string;
  hover: string;
  tags: readonly string[];
  demo: boolean;
  url?: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const CATEGORIES: readonly {
  value: "all" | ProjectCategory;
  label: string;
}[] = [
  { value: "all", label: "Tout" },
  { value: "vitrine", label: "Sites vitrines" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "reservation", label: "Sites de réservation" },
];

export const PROJECTS: readonly Project[] = [
  {
    id: "tremplin",
    category: "vitrine",
    sector: "Entrepreneuriat",
    visual: "craft",
    name: "Tremplin Entreprendre",
    type: "Site vitrine",
    description:
      "Développement d'un site vitrine interactif avec Next.js, intégrant des formulaires dynamiques, la génération automatisée de documents PDF et l'envoi d'e-mails côté serveur.",
    hover:
      "Un site dédié à l'entrepreneuriat, enrichi de fonctionnalités interactives et d'outils automatisés.",
    tags: ["Next.js", "React", "TypeScript", "Génération PDF"],
    demo: false,
    url: "https://tremplin-entreprendre.fr/",
    image: {
      src: Tremplin.src,
      alt: "Site Tremplin Entreprendre",
      width: Tremplin.width,
      height: Tremplin.height,
    },
  },
  {
    id: "casamance",
    category: "ecommerce",
    sector: "Mode et textile",
    visual: "shop",
    name: "Casamance",
    type: "E-commerce",
    description:
      "Personnalisation et développement front-end d'une boutique Shopify, avec un travail sur l'expérience utilisateur et l'identité visuelle.",
    hover:
      "Une boutique en ligne personnalisée pour valoriser les produits et fluidifier le parcours d'achat.",
    tags: ["Shopify", "Liquid", "JavaScript", "CSS"],
    demo: false,
    url: "https://casamance-mode.fr/"
    ,image: {
      src: Casamance.src,
      alt: "Boutique e-commerce Casamance",
      width: Casamance.width,
      height: Casamance.height,
    },
  },

{
  id: "lespace-instant",
  category: "reservation",
  sector: "Hébergement touristique",
  visual: "craft",
  url: "https://lespaced1instant.com/",
  name: "L'Espace d'un Instant",
  type: "Sites de réservation",
  description:
    "Un site dédié à une maison d'hôtes, conçu pour valoriser les hébergements, présenter l'expérience proposée et faciliter les réservations.",
  hover:
    "Un univers immersif pour mettre en valeur l'hébergements et accompagner les visiteurs jusqu'à la réservation.",
  tags: ["WordPress", "Réservation en ligne", "Responsive"],
  demo: false,
  image: {
    src: LespaceDunInstant.src,
    alt: "Site de la maison d'hôtes L'Espace d'un Instant",
    width: LespaceDunInstant.width,
    height: LespaceDunInstant.height,
  },
  },
  // {
  //   id: "boutique-concept",
  //   category: "ecommerce",
  //   sector: "Concept",
  //   visual: "shop",
  //   name: "Boutique concept",
  //   type: "E-commerce",
  //   description:
  //     "Une boutique avec collections, fiches produit lisibles et tunnel d'achat court, pensée pour la prise en main du gérant.",
  //   hover:
  //     "Un concept e-commerce conçu autour d'un parcours d'achat simple et efficace.",
  //   tags: ["Shopify", "Collections", "Paiement"],
  //   demo: true,
  // },
  // {
  //   id: "outil-metier-concept",
  //   category: "specifique",
  //   sector: "Concept",
  //   visual: "tool",
  //   name: "Outil métier concept",
  //   type: "Développement spécifique",
  //   description:
  //     "Une interface interne pour gérer des demandes et leur suivi, avec les seules fonctionnalités utiles au quotidien.",
  //   hover:
  //     "Un outil métier sur mesure pour simplifier la gestion et le suivi des demandes.",
  //   tags: ["React", "TypeScript", "API"],
  //   demo: true,
  // },
];
