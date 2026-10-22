/** Contenus éditoriaux courts : méthode, arguments, secteur local. */

export const METHOD_STEPS: readonly { title: string; text: string }[] = [
  {
    title: "Échange et cadrage",
    text: "Je comprends votre activité, vos objectifs, vos clients, les fonctionnalités attendues et votre budget.",
  },
  {
    title: "Maquette et conception",
    text: "Nous définissons la direction visuelle, l’architecture des pages et les parcours des visiteurs.",
  },
  {
    title: "Développement et validation",
    text: "Je développe le site, j’intègre les contenus, je vérifie les affichages et j’effectue les ajustements prévus.",
  },
  {
    title: "Mise en ligne et accompagnement",
    text: "Mise en production, contrôles finaux, puis accompagnement pour votre prise en main.",
  },
];

export const METHOD_CONTINUITY =
  "Une seule personne suit le projet de la maquette à la mise en ligne, puis après la livraison. Rien ne se perd entre deux interlocuteurs.";

export const WHY_ITEMS: readonly { title: string; text: string }[] = [
  { title: "Un interlocuteur direct", text: "Du premier échange à la livraison, vous parlez à la personne qui conçoit et développe votre site." },
  { title: "Une conception sur mesure", text: "Je pars de vos besoins réels, pas d’un modèle à remplir." },
  { title: "L’œil du détail", text: "Espacements, typographie, états des boutons : les finitions comptent." },
  { title: "Une approche technique réfléchie", text: "Je choisis l’outil selon votre projet, pas selon mes habitudes." },
  { title: "Tous les écrans", text: "Téléphone, tablette, ordinateur : la lisibilité est vérifiée partout." },
  { title: "Le SEO dès la conception", text: "Structure, titres et performances sont pensés avec le design." },
  { title: "Des budgets transparents", text: "Les prix de départ sont affichés et le devis détaille le périmètre." },
  { title: "Un suivi après la mise en ligne", text: "Maintenance, évolutions et corrections si vous le souhaitez." },
];

/** Les deux premières villes sont mises en avant (secteur d'activité actuel). */
export const LOCAL_TOWNS: readonly string[] = [
  "Chauny",
  "Beautor",
  "Tergnier",
  "La Fère",
  "Saint-Quentin",
  "Aisne",
  "Hauts-de-France",
];
