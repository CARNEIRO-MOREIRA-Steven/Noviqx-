import type { BudgetValue, ProjectTypeValue } from "@/lib/contact";

/**
 * Lien vers le formulaire de contact avec présélection du type de projet
 * (et du budget). Lu côté client par le formulaire via `useSearchParams`,
 * ce qui garde la page entièrement statique.
 */
export function contactHref(type?: ProjectTypeValue, budget?: BudgetValue): string {
  const params = new URLSearchParams();
  if (type) params.set("type", type);
  if (budget) params.set("budget", budget);
  const query = params.toString();
  return `/${query ? `?${query}` : ""}#contact`;
}
