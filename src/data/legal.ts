import type { LegalSection } from "@/components/layout/LegalPage";

/**
 * Structure des pages légales. Aucune information d'éditeur n'est inventée :
 * chaque crochet [À renseigner : …] doit être remplacé par les données réelles
 * (et validé juridiquement) avant de retirer le noindex de ces pages.
 */

export const MENTIONS_INTRO =
  "Conformément à la loi pour la confiance dans l’économie numérique, voici les informations relatives à l’éditeur et à l’hébergeur du site.";

export const MENTIONS_SECTIONS: readonly LegalSection[] = [
  {
    title: "Éditeur du site",
    body: [
      "NOVIQX, activité exercée à titre indépendant.",
      "Nom et prénom de l’entrepreneur : [À renseigner]",
      "Statut juridique : [À renseigner]",
      "Numéro SIRET : [À renseigner]",
      "Adresse professionnelle : [À renseigner]",
      "Adresse e-mail : [À renseigner après vérification de la boîte]",
      "Directeur de la publication : [À renseigner]",
    ],
  },
  {
    title: "Hébergeur",
    body: ["Nom, adresse et contact de l’hébergeur : [À renseigner selon l’hébergement retenu]"],
  },
  {
    title: "Propriété intellectuelle",
    body: [
      "Les textes, visuels et éléments graphiques de ce site sont la propriété de NOVIQX, sauf mention contraire. Toute reproduction sans autorisation écrite est interdite.",
    ],
  },
  {
    title: "Responsabilité",
    body: [
      "NOVIQX s’efforce de fournir des informations exactes et à jour. Les tarifs affichés sont des prix de départ : seul le devis fait foi.",
    ],
  },
];

export const PRIVACY_INTRO =
  "Cette page explique comment sont traitées les données saisies dans le formulaire de contact.";

export const PRIVACY_SECTIONS: readonly LegalSection[] = [
  {
    title: "Responsable du traitement",
    body: ["NOVIQX, représenté par [À renseigner : nom de l’entrepreneur]. Contact : [À renseigner]."],
  },
  {
    title: "Données collectées et finalité",
    body: [
      "Le formulaire collecte votre nom, votre adresse e-mail, le nom de votre entreprise (facultatif), le type de projet, le budget estimé et la description de votre besoin.",
      "Ces données servent uniquement à répondre à votre demande et à établir un devis. Elles ne sont ni vendues, ni transmises à des tiers à des fins commerciales.",
    ],
  },
  {
    title: "Destinataires",
    body: [
      "Les données sont reçues par NOVIQX. Elles transitent par le prestataire d’envoi d’e-mails utilisé par le site : [À renseigner : nom du prestataire et pays de traitement].",
    ],
  },
  {
    title: "Durée de conservation",
    body: ["[À renseigner : durée de conservation des demandes, par exemple 3 ans après le dernier contact]."],
  },
  {
    title: "Vos droits",
    body: [
      "Vous pouvez demander l’accès, la rectification ou l’effacement de vos données, ainsi que vous opposer à leur traitement, en écrivant à l’adresse de contact. Vous pouvez aussi saisir la CNIL (cnil.fr).",
    ],
  },
  {
    title: "Cookies et mesure d’audience",
    body: [
      "Ce site n’installe aucun traceur nécessitant votre consentement. Si un outil de mesure d’audience est ajouté, cette page sera mise à jour et, si nécessaire, un module de consentement sera mis en place.",
    ],
  },
];
