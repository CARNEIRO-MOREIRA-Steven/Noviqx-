"use client";

import { useState, type ReactNode } from "react";
import { CATEGORIES, type ProjectCategory } from "@/data/portfolio";
import { cx } from "@/lib/cx";
import styles from "./PortfolioFilter.module.css";

/**
 * Filtre par catégorie. Il ne fait que poser un attribut `data-filter` :
 * le masquage est géré en CSS, sur des cartes rendues côté serveur.
 */
export function PortfolioFilter({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filtrer par catégorie">
        {CATEGORIES.map((category) => (
          <button
            key={category.value}
            type="button"
            className={cx(styles.chip)}
            aria-pressed={active === category.value}
            onClick={() => setActive(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className={styles.works} data-filter={active}>
        {children}
      </div>
    </>
  );
}
