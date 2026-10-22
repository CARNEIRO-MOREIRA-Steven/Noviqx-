/**
 * Schéma et validation du formulaire de contact.
 * Ce module est utilisé côté navigateur (retour immédiat) ET côté serveur
 * (source de vérité : l'API route revalide toujours).
 */

export const PROJECT_TYPES = [
  { value: "vitrine", label: "Site vitrine" },
  { value: "boutique", label: "Boutique en ligne" },
  { value: "surmesure", label: "Développement sur mesure" },
  { value: "maintenance", label: "Maintenance ou correction" },
  { value: "refonte", label: "Refonte d’un site existant" },
  { value: "autre", label: "Autre ou à définir" },
] as const;

export const BUDGETS = [
  { value: "<1000", label: "Moins de 1 000 €" },
  { value: "1000-1500", label: "1 000 à 1 500 €" },
  { value: "1500-2500", label: "1 500 à 2 500 €" },
  { value: "2500-4000", label: "2 500 à 4 000 €" },
  { value: ">4000", label: "Plus de 4 000 €" },
  { value: "a-definir", label: "À définir ensemble" },
] as const;

export type ProjectTypeValue = (typeof PROJECT_TYPES)[number]["value"];
export type BudgetValue = (typeof BUDGETS)[number]["value"];

export const LIMITS = {
  nameMin: 2,
  nameMax: 120,
  emailMax: 254,
  companyMax: 160,
  messageMin: 20,
  messageMax: 4000,
} as const;

export type ContactValues = {
  nom: string;
  email: string;
  entreprise: string;
  type: ProjectTypeValue | "";
  budget: BudgetValue | "";
  message: string;
  consent: boolean;
  /** Champ piège anti-spam : doit rester vide. */
  website: string;
};

export type ContactField = "nom" | "email" | "type" | "budget" | "message" | "consent";
export type ContactErrors = Partial<Record<ContactField, string>>;

export const EMPTY_VALUES: ContactValues = {
  nom: "",
  email: "",
  entreprise: "",
  type: "",
  budget: "",
  message: "",
  consent: false,
  website: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isProjectType(value: unknown): value is ProjectTypeValue {
  return PROJECT_TYPES.some((t) => t.value === value);
}

export function isBudget(value: unknown): value is BudgetValue {
  return BUDGETS.some((b) => b.value === value);
}

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  const nom = values.nom.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (nom.length < LIMITS.nameMin || nom.length > LIMITS.nameMax) {
    errors.nom = "Indiquez votre nom et prénom.";
  }
  if (!EMAIL_RE.test(email) || email.length > LIMITS.emailMax) {
    errors.email = "Saisissez une adresse e-mail valide, par exemple nom@exemple.fr.";
  }
  if (!isProjectType(values.type)) {
    errors.type = "Choisissez un type de projet.";
  }
  if (!isBudget(values.budget)) {
    errors.budget = "Choisissez une fourchette de budget, ou « À définir ensemble ».";
  }
  if (message.length < LIMITS.messageMin) {
    errors.message = `Décrivez votre besoin en quelques lignes (${LIMITS.messageMin} caractères minimum).`;
  } else if (message.length > LIMITS.messageMax) {
    errors.message = `Votre message est trop long (${LIMITS.messageMax} caractères maximum).`;
  }
  if (!values.consent) {
    errors.consent = "Cochez la case pour que je puisse traiter votre demande.";
  }
  return errors;
}

/** Normalise une entrée inconnue (corps de requête JSON) en valeurs typées. */
export function parseContactInput(input: unknown): ContactValues | null {
  if (typeof input !== "object" || input === null) return null;
  const o = input as Record<string, unknown>;
  const str = (k: string): string => (typeof o[k] === "string" ? (o[k] as string) : "");
  const type = str("type");
  const budget = str("budget");
  return {
    nom: str("nom"),
    email: str("email"),
    entreprise: str("entreprise").slice(0, LIMITS.companyMax),
    type: isProjectType(type) ? type : "",
    budget: isBudget(budget) ? budget : "",
    message: str("message"),
    consent: o.consent === true,
    website: str("website"),
  };
}

export const labelOf = {
  type: (v: string) => PROJECT_TYPES.find((t) => t.value === v)?.label ?? v,
  budget: (v: string) => BUDGETS.find((b) => b.value === v)?.label ?? v,
};
